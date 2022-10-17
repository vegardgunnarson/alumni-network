import keycloak from "../keycloak/keycloak";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL+"student";



const GetLoggedIn = () => {
    const nav = useNavigate();


    useEffect( () => {
        logginmukk();
        nav('/timeline');

    }, []);

    const logginmukk = async () => {
    while(!keycloak.authenticated)
       await goingToLogIn()

    }
    const goingToLogIn = async () => {
        await keycloak.login();    
    
}
}




export default GetLoggedIn;