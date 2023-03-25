import { Alert, Button, Card, CardActionArea, CardContent,TextField, Typography} from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import {data} from './data'
import {app, auth} from './firebase';
import { useCookies } from 'react-cookie';
import { getDatabase, onValue, ref, set } from "firebase/database";
import * as React from "react"
import { useLocation, useParams } from 'react-router-dom';


function Page(props) {
    const [questionslist, setQuestionslist] = useState([])
    const {questionbank} = useParams()
    const [cookies, setCookie] = useCookies(['user']);
    const [input, setInput] = useState("")
    const [question, setQuestion] = useState("")
    const questions = 10
    const [rightans, setRight] = useState()
    //const [done, setDone] = useState("")
    const [alert, setAlert] = useState()
    //const [random, setRandom] = useState(0)
    const [mscore, setMscore] = useState(0)
    //const text = useRef(null)
    
    function writeUserData(id, question, answer) {
      const db = getDatabase();
      set(ref(db, 'questions/' + id), {
        question: question,
        answer: answer,
      }); 
    }

    const getuserscore = async (name) => {
      const db = getDatabase();
      const reff = ref(db, 'users/'+name);
      onValue(reff, (snapshot) => {
        const newdata = snapshot.val();
        setMscore(newdata.score)
    });    
    }

    const setquestions = async () => {
      for (let i =0;i<questions;i++){
        writeUserData(i, data[i].question, data[i].answer)
      }
    }

    const getquestions = async () => {
      const db = getDatabase();
      const reff = ref(db, 'questions/');
      onValue(reff, (snapshot) => {
        const newdata = snapshot.val();
        setQuestionslist(newdata)
      });    
    }

    const updatefirebase = (name) =>{
      const db = getDatabase();
        set(ref(db, 'users/'+name), {
          score:mscore+1
        }); 
    }

    useEffect(()=>{
      if (cookies.Answer){
        setInput(cookies.Answer)
        answeredright()
      }
    },[cookies])


    const answeredright = () => {
            setRight(true)
            setAlert(
                <div style={{marginTop:20}}>
                <Alert severity="success">That's Right</Alert>
                </div>
            )
    }


    const checkanswer = (e)=>{
        if (questionslist[cookies.Question].answer === input.toLowerCase()){
            answeredright()
            setCookie("Answer", input, { path: '/' })
            updatefirebase(cookies.Name)
        }
        else{
            setRight(false)
            setAlert(
                <div style={{marginTop:20}}>
                <Alert severity="error">Wrong Answer</Alert>
                </div>
            )
        }
    }

    useEffect(()=>{
      if(!cookies.Question){
        setCookie("Question", Math.floor(Math.random() * (questions)), { path: '/' })
        window.location.reload(false)
      }
    },[])

    useEffect(()=>{
      console.log(window.location.href)
      console.log(questionbank)
        getquestions()
        getuserscore(cookies.Name)
    },[])

    useEffect(()=>{
        let set = questionslist[cookies.Question]
        if (set){
            setQuestion(set.question)
        }
    },[questionslist, cookies])


  return (
    <>
    <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ?
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {question}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{marginTop:20, display:'flex', justifyContent: 'space-between'}}>
    <TextField value={input} disabled={rightans} style={{ maxWidth: 500, minWidth:200, width:'80%'}} onChange={e=>setInput(e.target.value)} variant='outlined'/>
    <Button disabled={rightans} variant='outlined' onClick={checkanswer} style={{backgroundColor:"white", minWidth: 40,minHeight: 40,maxWidth: 40,marginLeft: 'auto',marginTop:"auto",marginBottom:"auto", maxHeight: 40}}>&#x2713;</Button>
    </div>
    {alert}
    </>
  )
}

export default Page