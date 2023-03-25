import Page from './Page'
import Login from "./Login"
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

function Interface() {
    const [cookies, setCookie] = useCookies(['user']);
    useEffect(()=>{
        console.log(cookies.Name)
        console.log(cookies.SignedIn)
    })

    if (cookies.SignedIn){
        return (
            <Page user={cookies.Name}/>
        )
    }
    else{
        return (
            <Login />
        )
    }
}

export default Interface