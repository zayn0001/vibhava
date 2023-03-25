import { Alert, Button, Card, CardActionArea, CardContent, Hidden, TextField, Typography } from '@mui/material'
import { useEffect, useReducer, useRef, useState } from 'react'
import './App.css'
import {data} from './data'
import {app, auth} from './firebase';
import { useCookies } from 'react-cookie';
import { getDatabase, onValue, ref, set } from "firebase/database";




function Page(props) {
    const [questionslist, setQuestionslist] = useState([])
    const [cookies, setCookie] = useCookies(['user']);
    const [input, setInput] = useState("")
    const [question, setQuestion] = useState("")
    const questions = 10
    const [rightans, setRight] = useState()
    const [done, setDone] = useState("")
    const [alert, setAlert] = useState()
    const [random, setRandom] = useState(0)
    const text = useRef(null)
    
    function writeUserData(id, question, answer) {
      const db = getDatabase();
      set(ref(db, 'questions/' + id), {
        question: question,
        answer: answer,
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

    useEffect(()=>{
      console.log(cookies)
      if (cookies.Answer){
        console.log(questionslist)
        //console.log(parseInt(cookies.question))
        //console.log(cookies.Question, typeof(parseInt(cookies.Question)))
        setInput(cookies.Answer)
        setRandom(parseInt(cookies.Question))
        answeredright()
        //console.log(text.current)
        //console.log(text.current.value)
      }
    },[cookies])


    const answeredright = () => {
      console.log("correct")
            setRight(true)
            setAlert(
                <div style={{marginTop:20}}>
                <Alert severity="success">That's Right</Alert>
                </div>
            )
    }


    const checkanswer = (e)=>{
        console.log("clicked")
        console.log(questionslist[random].answer)
        console.log(input.toLowerCase())
        if (questionslist[random].answer === input.toLowerCase()){
            answeredright()
            setCookie("Answer", input, { path: '/' })
            setCookie("Question", random, { path: '/' })
            //window.location.reload(false)
        }
        else{
            console.log("incorrect")
            setRight(false)
            setAlert(
                <div style={{marginTop:20}}>
                <Alert severity="error">Wrong Answer</Alert>
                </div>
            )
        }
    }

    useEffect(()=>{
        //setquestions()
        if(!cookies.Answer){
        setRandom(Math.floor(Math.random() * (questions)))
        }
        getquestions()
      
        //handle()
    },[])

    useEffect(()=>{
        let set = questionslist[random]
        if (set){
            console.log(set.question)
            setQuestion(set.question)
        }
        console.log(questionslist)
    },[questionslist])


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
    <TextField value={input} disabled={rightans} style={{maxWidth: 500, minWidth:200, width:'80%'}} onChange={e=>setInput(e.target.value)} variant='outlined'/>
    <Button disabled={rightans} variant='outlined' onClick={checkanswer} style={{minWidth: 40,minHeight: 40,maxWidth: 40,marginLeft: 'auto',marginTop:"auto",marginBottom:"auto", maxHeight: 40}}>&#x2713;</Button>
    </div>
    {alert}
    </>
  )
}

export default Page