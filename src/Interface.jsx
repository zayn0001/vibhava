import Page from './Page'
import Login from "./Login"
import { useCookies } from 'react-cookie';
import { useEffect} from 'react';
import * as React from "react"
import { Routes, Route} from 'react-router-dom';
import {app, auth} from './firebase';
import { getDatabase, onValue, ref, set } from "firebase/database";

function Interface() {
    const [cookies, setCookie] = useCookies(['user']);
    //const [score, setScore] = React.useState(-1)

    function writeUser(name) {
        const db = getDatabase();
        set(ref(db, 'users/'+name), {
          score:0
        }); 
    }

    useEffect(()=>{
        if(cookies.Name){
        writeUser(cookies.Name)
        }
    },[cookies])

    if (cookies.SignedIn){
        return (
            <Routes>
            <Route path="/vibhava/:questionbank" element={<Page user={cookies.Name}/>} />
            <Route path="/vibhava" element={<Page user={cookies.Name}/>}/>
            </Routes>
        )
    }
    else{
        return (
            <Login />
        )
    }
}

export default Interface