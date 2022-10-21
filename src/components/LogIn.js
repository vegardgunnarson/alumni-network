import keycloak from "../keycloak/keycloak";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkDbForUser } from "../api/user";
import { useUser } from "../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUser } from "../Features/userSlice";

const GetLoggedIn = () => {
    const nav = useNavigate();
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect( () => {
        loggIn();
    }, []);


    const loggIn = async () => {
        if(keycloak.authenticated){
            const loggedInUser = await checkDbForUser();
            console.log(loggedInUser[0])
            if (loggedInUser[0]){
                alert("could not get user")
            } else {
                await dispatch(updateUser(loggedInUser[1]))
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
