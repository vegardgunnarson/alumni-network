import keycloak from "../keycloak/keycloak";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkDbForUser } from "../api/user";
import { useUser } from "../Context/UserContext";

const GetLoggedIn = () => {
    const { user, setUser } = useUser();

    const nav = useNavigate();

    useEffect( () => {

    }, []);

    const loggIn = async () => {
        if(keycloak.authenticated){
            const loggedInUser = await checkDbForUser();
            console.log(loggedInUser[0])
            if (loggedInUser[0]){
                alert("could not get user")
            } else {
                setUser(loggedInUser[1])
                console.log("loggedInUser")
                nav('/timeline')

            }

    }
    else{
        await keycloak.login()
        nav('/timeline')

            }
        }
    }

export default GetLoggedIn;