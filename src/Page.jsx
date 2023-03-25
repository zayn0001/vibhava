import { Alert, Button, Card, CardActionArea, CardContent, Hidden, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import {data} from './data'
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import {db} from './firebase';

function Page() {
    //const [qdata,_] = useState(data)
    const [questionslist, setQuestionslist] = useState([])
    const [input, setInput] = useState("")
    const [question, setQuestion] = useState("")
    const questions = 10
    const [rightans, setRight] = useState()
    const [alert, setAlert] = useState()
    const [random, setRandom] = useState(0)  

    //console.log(random)
    //console.log(data.find(x=>x.id===random).question)
    const setquestions = async () => {
        //e.preventDefault();  
        for (let i =0;i<questions;i++){
                const docRef = await addDoc(collection(db, "questions"), data[i]);
        }
    }

    const getquestions = async () => {
        await getDocs(collection(db, "questions"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => (doc.data()));
                setQuestionslist(newData);      
                //console.log(questionslist)     
            })
    }

    const checkanswer = (e)=>{
        console.log("clicked")
        console.log(questionslist.find(x=>x.id===random).answer)
        console.log(input)
        if (questionslist.find(x=>x.id===random).answer === input.toLowerCase()){
            console.log("correct")
            setRight(true)
            setAlert(
                <div style={{marginTop:20}}>
                <Alert severity="success">"That's Right"</Alert>
                </div>
            )
        }
        else{
            console.log("incorrect")
            setRight(false)
            setAlert(
                <div style={{marginTop:20}}>
                <Alert severity="error">"Wrong Answer"</Alert>
                </div>
            )
        }
    }

    useEffect(()=>{
        //setQuestion(questions.find(x=>x.id===random).question)
        //setquestions()
        setRandom(Math.floor(Math.random() * (questions)))
        getquestions()
    },[])

    useEffect(()=>{
        let set = questionslist.find(x=>x.id===random)
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
    <TextField disabled={rightans} style={{maxWidth: 500, minWidth:200, width:'80%'}} onChange={e=>setInput(e.target.value)} variant='outlined'>

    </TextField>
    <Button disabled={rightans} variant='outlined' onClick={checkanswer} style={{minWidth: 40,minHeight: 40,maxWidth: 40,marginLeft: 'auto',marginTop:"auto",marginBottom:"auto", maxHeight: 40}}>&#x2713;</Button>
    </div>
    {alert}
    </>
  )
}

export default Page