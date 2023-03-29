import Page from './Page'
import Login from "./Login"
import { useEffect, useState} from 'react';
import React from "react"
import { Routes, Route} from 'react-router-dom';
import {app, auth} from './firebase';
import { getDatabase, onValue, ref, set } from "firebase/database";
import Fof from './404';

function Interface() {
    //const [cookies, setCookie] = useCookies(['user']);
    const [login, setLogin] = useState({})
    const getfromstorage = () => JSON.parse(localStorage.getItem("login"));
    const questionbank = window.location.hash.split("/")[1]
    const [options, setOptions] = useState(["ceaser","binary","alphabet","morse","plain",7,8,9,10,11,12,13,14,15])
    console.log(questionbank)
    if(!options.includes(questionbank)){
      return <Fof/>
    }
    //const [score, setScore] = React.useState(-1)

    function writeUser(name) {
        const db = getDatabase();
        set(ref(db, 'users/'+name), {
          score:0
        }); 
    }

    useEffect(()=>{
        if (getfromstorage()){
        const db = getDatabase();
        const reff = ref(db, 'users/'+getfromstorage().Name);
        onValue(reff, (snapshot) => {
        const newdata = snapshot.val();
        if(getfromstorage().Name && !newdata){
        writeUser(getfromstorage().Name)
        }
    })
    }},[login])

    if (!(getfromstorage()== null || Object.keys(getfromstorage()).length==0) ){
        //console.log(getfromstorage())
        if(getfromstorage().SignedIn){
        return (
            <Routes>
            <Route path="/vibhava" element={<Page />}/>
            </Routes>
        )
        }
    }
    else{
        //console.log(getfromstorage())
        return (
            <Login />
        )
    }
}

export default Interface