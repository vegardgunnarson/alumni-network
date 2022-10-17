import React, { useState, useEffect } from "react";
import keycloak from "../keycloak/keycloak";


import "../styles/Profile.scss";
import { currentuser} from "./UserHandler";

export default function Profile() {


    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}`)
            .then((response) => response.json())
            .then((data => setUser(data)))
    }

    useEffect(() => {
        fetchData();
    },[])


    const [updateuser, setUpdateuser] = useState({
        bio: user.bio,
        status: user.status,
        fun_fact: user.fun_fact
    });
    const handleChange = (event) => {
        setUpdateuser({...updateuser, [event.target.name]:event.target.value})
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        console.log(updateuser);
        setUpdateuser({status:user.status, bio:user.bio, fun_fact:user.fun_fact})
    }
    


  return (
    <div class="mt-auto py-3 text-center text-lg-start" className="profile">
        <form class="container-lg" className="form">
            <div className="nameAndPicture">
            <img src={user.picture} alt="could not be found" className="image" />
            <div class="form-control" id="name" className="name">{user.name}</div>
            </div>
            <input  name="status" placeholder="Status" onChange={handleChange} value={updateuser.status} id="status" className="status"/>
            <input  name="bio" placeholder="Bio" id="bio" onChange={handleChange} className="bio" value={updateuser.bio}></input><br/>
            <input  name="funfact" placeholder="Funfact" onChange={handleChange} id="funfact" value={updateuser.fun_fact} className="funfact"></input><br/>
          <div class="nav-item" className="buttons">
          <button type="submit" class="btn btn-secondary m-4" onSubmit={handlesubmit}>Save</button>
          <button class="btn btn-danger m-4" onClick={() => keycloak.logout()}>Logout</button>
          </div>
        </form>
    </div>
  );
}
