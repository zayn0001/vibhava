import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
//import {db} from './firebase';
import { useCookies } from 'react-cookie';
import { Button, TextField } from '@mui/material';
//import { useEffect, useState } from 'react'



function Login(){
    const [cookies, setCookie] = useCookies(['user']);
    const [username, setUsername] = useState("")

    const signin = () => {
        setCookie('Name', username, { path: '/' });
        setCookie("SignedIn", true, { path: '/' })
        window.location.reload(false)
      };

      useEffect(()=>{
        
        console.log(cookies)
      },[cookies])

    return(
        <div style={{marginTop:20, display:'flex', justifyContent: 'space-between'}}>
        <TextField label="Name" style={{maxWidth: 500, minWidth:200, width:'80%'}} onChange={e=>setUsername(e.target.value)} variant='outlined'/>
        <Button  variant='outlined' onClick={signin} style={{minWidth: 40,minHeight: 40,maxWidth: 40,marginLeft: 'auto',marginTop:"auto",marginBottom:"auto", maxHeight: 40}}>&#x2713;</Button>
        </div>
        )

}

export default Login



