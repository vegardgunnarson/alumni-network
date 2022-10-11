import React from "react";
import keycloak from "../keycloak/keycloak";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const GetLoggedIn = () => {

    const nav = useNavigate();

    useEffect(() => {
        keycloak.login();
        nav('/timeline')
    }, []);
}


export default GetLoggedIn;