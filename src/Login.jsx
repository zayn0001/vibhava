import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, setDoc, doc, collectionGroup } from "firebase/firestore";
//import {db} from './firebase';
import { Alert, Button, TextField } from '@mui/material';
import { getDatabase, onValue, ref, set } from 'firebase/database';
//import { getModularInstance } from '@firebase/util';
//import { useEffect, useState } from 'react'



function Login(){
    //const [cookies, setCookie] = useCookies(['user']);
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")

    const [login, setLogin] = useState({})
    const getfromstorage = () => JSON.parse(localStorage.getItem("login"));

    const [alert, setAlert] = useState()

    function writeUserData() {
      const db = getDatabase();
      set(ref(db, 'userdata/'+username), {
        insta: name,
        mail: mail,
      }); 
    }
    
    useEffect(() => {
      localStorage.setItem("login", JSON.stringify(login));
      if(!login.Name || !login.SignedIn){
        localStorage.setItem("login", JSON.stringify(login));
      }
      console.log(localStorage)
    }, [login]);
    
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
          writeUserData()
          //setCookie('Name', username, { path: '/' });
          setLogin(login=>({...login, "Name":username}))
          setLogin(login=>({...login, "mail":mail}))
          setLogin(login=>({...login, "insta":name}))
          //setCookie("SignedIn", true, { path: '/' })
          setLogin(login=>({...login, "SignedIn":true}))
          window.location.reload(false)
        }
    });    
  }

    const handleclick = () => {
        signin(username)
        //window.location.reload(false)
    };

    return(
       <>
        <div style={{marginTop:20, display:'flex', justifyContent: 'space-between',alignItems: 'flex-end',gap: 15, flexDirection:"column"}}>
        <TextField label="Name" style={{maxWidth: 500, minWidth:200, width:'100%',borderRadius:'5px', background:'white'}} onChange={e=>setUsername(e.target.value)} variant='filled' required/>
        <TextField label="Instagram ID" style={{maxWidth: 500, minWidth:200, width:'100%',borderRadius:'5px', background:'white'}} onChange={e=>setName(e.target.value)} variant='filled' required/>
        <TextField label="E-mail" style={{maxWidth: 500, minWidth:200, width:'100%',borderRadius:'5px', background:'white'}} onChange={e=>setMail(e.target.value)} variant='filled' required/>
        <Button variant='outlined' onClick={handleclick} style={{minWidth: 40,minHeight: 40,maxWidth: 40,marginLeft: 'auto',borderRadius:'5px', background:'white',marginTop:"auto",marginBottom:"auto", maxHeight: 40}}>&#x2713;</Button>
        </div>
        {alert}
        </>
        )

}

export default Login



