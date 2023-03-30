import { Alert, Button, Card, CardActionArea, CardContent,TextField, Typography} from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import {data} from './data'
import {app, auth} from './firebase';
//import { Cookies, useCookies } from 'react-cookie';
import { getDatabase, onValue, ref, set } from "firebase/database";
import * as React from "react"
import {useSearchParams } from 'react-router-dom';
//import { getSearchParamsForLocation } from 'react-router-dom/dist/dom';


function Page(props) {
    const [questionslist, setQuestionslist] = useState([])
    const questionbank = window.location.hash.split("/")[1]
    const [options, setOptions] = useState(["sdFFkIIsNN6DD83","asefMMfd89mel8","amfo38rcIIsdfm9","liuSSfax38d6","sldfm823HHcr23j","mxieAAwr8m34y53","jaytvLLu33v6"])
    const [path, setPath] = useState({"sdFFkIIsNN6DD83":"1","asefMMfd89mel8":"2","amfo38rcIIsdfm9":"3","liuSSfax38d6":"4","sldfm823HHcr23j":"5","mxieAAwr8m34y53":"6","jaytvLLu33v6":"7"})
    //const [cookies, setCookie] = useCookies(['user']);
    const [input, setInput] = useState("")
    const [question, setQuestion] = useState("")
    const questions = 82
    const [rightans, setRight] = useState()
    const [alert, setAlert] = useState()
    const [mscore, setMscore] = useState(0)
    const [qnarray, setQnarray] = useState({"Question":"","Answer":""});
    
    
    const getfromstorage = (item) => JSON.parse(localStorage.getItem(item));

    useEffect(()=>{
      const items = getfromstorage(questionbank)
      if (items) {
        setQnarray(items)
      }

      if(!getfromstorage(questionbank)){
        const ran = Math.floor(Math.random() * (questions))
        setQnarray(qnarray=>({
          ...qnarray,
          "Question":ran
        }))
        //console.log(ran, "ran")
        window.location.reload(false)
      }
      //console.log(questionbank)
      getquestions()
      getuserscore(getfromstorage("login").Name)
    },[])



    useEffect(() => {
      localStorage.setItem(questionbank, JSON.stringify(qnarray));
      if(!qnarray.Question || !qnarray.Answer){
        localStorage.setItem(questionbank, JSON.stringify(qnarray));
      }
      //console.log(localStorage)
    }, [qnarray]);


    useEffect(()=>{
      if (getfromstorage(questionbank).Answer){
        setInput(getfromstorage(questionbank).Answer)
        answeredright()
      }
      let set = questionslist[getfromstorage(questionbank).Question]
      //console.log(set.Question)
      if (set){
        //console.log(set)
          setQuestion(set.Question)
      }
      //console.log(questionslist)
      //console.log(cookies)
    },[questionslist])
    
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
        if(newdata){
        setMscore(newdata.score)
        }
    });    
    }

    const setquestions = async () => {
      for (let i =0;i<questions;i++){
        writeUserData(i, data[i].question, data[i].answer)
      }
    }

    const getquestions = async () => {
      const db = getDatabase();
      const reff = ref(db, 'Questions/');
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




    const answeredright = () => {
      setRight(true)
      setAlert(
          <div style={{marginTop:20}}>
          <Alert severity="success">That's Right</Alert>
          <Alert style={{marginTop:20}} severity="info">{path[questionbank]}</Alert>
          </div>
      )
    }


    const checkanswer = (e)=>{
      //console.log(questionslist[getfromstorage(questionbank).Question].Answer)
      //console.log(input.toLowerCase())
      if (questionslist[getfromstorage(questionbank).Question].Answer === input.toLowerCase()){
          answeredright()
          //setCookie("Answer", input, { path: '/' })
          setQnarray(qnarray=>({
            ...qnarray,
            "Answer":input
          }))
          updatefirebase(getfromstorage("login").Name)
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
    <TextField value={input} disabled={rightans} style={{ maxWidth: 500, minWidth:200, width:'80%', borderRadius:'5px', background:'white'}} onChange={e=>setInput(e.target.value)} variant='outlined'/>
    <Button disabled={rightans} variant='outlined' onClick={checkanswer} style={{backgroundColor:"white", minWidth: 40,minHeight: 40,maxWidth: 40,marginLeft: 'auto',marginTop:"auto",marginBottom:"auto", maxHeight: 40}}>&#x2713;</Button>
    </div>
    {alert}
    </>
  )
}

export default Page