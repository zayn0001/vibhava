import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
//import {db} from './firebase';
import { useCookies } from 'react-cookie';
import { Alert, Button, TextField } from '@mui/material';
import { getDatabase, onValue, ref } from 'firebase/database';
//import { useEffect, useState } from 'react'



function Login(){
    const [cookies, setCookie] = useCookies(['user']);
    const [username, setUsername] = useState("")
    const [alert, setAlert] = useState()
    
    
    const signin = async (name) => {
      const db = getDatabase();
      const reff = ref(db, 'users/'+name);
      onValue(reff, (snapshot) => {
        const newdata = snapshot.val();
        //setScore(newdata.scoreif
        if (newdata){
          console.log("user exists")
          setAlert(
            <div style={{marginTop:20}}>
            <Alert severity="error">User already exists. Try another</Alert>
            </div>
          )
        }
        else{
          setCookie('Name', username, { path: '/' });
          setCookie("SignedIn", true, { path: '/' })
          window.location.reload(false)
        }
    });    
  }

    const handleclick = () => {
        signin(username)
        //window.location.reload(false)
      };

      useEffect(()=>{
        console.log(cookies)
      },[cookies])

    return(
       <>
        <div style={{marginTop:20, display:'flex', justifyContent: 'space-between'}}>
        <TextField label="Name" style={{maxWidth: 500, minWidth:200, width:'80%'}} onChange={e=>setUsername(e.target.value)} variant='outlined'/>
        <Button  variant='outlined' onClick={handleclick} style={{minWidth: 40,minHeight: 40,maxWidth: 40,marginLeft: 'auto',marginTop:"auto",marginBottom:"auto", maxHeight: 40}}>&#x2713;</Button>
        </div>
        {alert}
        </>
        )

}

export default Login



