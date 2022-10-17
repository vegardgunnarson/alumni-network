import React from "react";
import keycloak from "../keycloak/keycloak";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from "../api/user";
import axios, { createHeaders } from "../api/index";

const apiUrl = process.env.REACT_APP_API_URL+"student";



const GetLoggedIn = () => {
    const nav = useNavigate();


    useEffect( () => {
    
    goingToLogIn()
    
    }, []);


    const goingToLogIn = async () => {

        
        if(!keycloak.authenticated){
    
        keycloak.login();

        }
        
        try {
              const response = await fetch(apiUrl, {
                  method: 'POST',
                  headers: createHeaders(),
                  body: JSON.stringify({
                    token: keycloak.tokenParsed.preferred_username,
                    name: keycloak.tokenParsed.name,
                  })
              });
        
              const data = await response.json();
              //return user object
              return data;
        
          } catch (error) {
              return error.message;
          }
        } 
        nav('/timeline')
    
    
}




export default GetLoggedIn;