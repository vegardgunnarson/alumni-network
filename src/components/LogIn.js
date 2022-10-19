import keycloak from "../keycloak/keycloak";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkDbForUser, createUser } from "../api/user";
import UserProvider, { useUser } from "../Context/UserContext";



const apiUrl = process.env.REACT_APP_API_URL+"student";



const GetLoggedIn = () => {
    const nav = useNavigate();

    useEffect( () => {
        logginmukk();

    }, []);

    const logginmukk = async () => {
    if(keycloak.authenticated){
        nav('/timeline')

        const result = await checkDbForUser(keycloak.tokenParsed.preferred_username);
    }
    else{
        await goingToLogIn()
        nav('/timeline')

    }
        
    }

    }
    const goingToLogIn = () => {
        keycloak.login();   
        
    
}





export default GetLoggedIn;