import keycloak from "../keycloak/keycloak";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, getId } from "../api/user";
import UserProvider, { useUser, setUse } from "../Context/UserContext";



const apiUrl = process.env.REACT_APP_API_URL+"student";



const GetLoggedIn = () => {
    const nav = useNavigate();
    const [ user, setUser ] = useState([])
    const [theFetch, setTheFetch] = useState()


    useEffect( () => {
        logginmukk();

    }, []);

    useEffect(() => {
        if(theFetch !== ""){
        }
        
    },[theFetch])
    
    const logginmukk = async () => {
        if(keycloak.authenticated){
            const id = await getId();
            const userUrl = apiUrl+"/"+id;
            setTheFetch();
            const user = await fetchData(userUrl);

            if (user.id !== 0){
                localStorage.setItem("user_id", user.id)
                localStorage.setItem("user_username", user.token)
                localStorage.setItem("user_name", user.name)
                localStorage.setItem("user_bio", user.bio)
                localStorage.setItem("user_status", user.status)
                localStorage.setItem("user_funfact", user.funfact)
                localStorage.setItem("user_picture", user.picture)
            }

        console.log(theFetch)
        createUser(id)
        console.log(userUrl)
        nav('/timeline')

    }
    else{
        await goingToLogIn()
        nav('/timeline')

            }
        }


        const fetchData = async (url) => {
            console.log("the fetch "+url)
            const theUser = await fetch(`${url}`)
                .then((response) => response.json())
                .then((data => {return data}))
                return theUser;
        }

    const goingToLogIn = () => {
        keycloak.login();   
            
        
        }

    }


export default GetLoggedIn;