import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import keycloak from "../keycloak/keycloak";

import { updateThisUser } from "../util/createUser"

import "../styles/Profile.scss";
import { currentuser} from "./UserHandler";
import { selectUser, updateUser } from "../Features/userSlice"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

export default function Profile() {
    const nav = useNavigate()
    const thisUser = useSelector(selectUser)
    const dispatch = useDispatch()

    const [updateuser, setUpdateuser] = useState({
        status: thisUser.status,
        bio: thisUser.bio,
        fun_fact: thisUser.fun_fact
    });
    const handleChange = (event) => {
        setUpdateuser({...updateuser, [event.target.name]:event.target.value})
    }

    const handlesubmit = async () => {
        dispatch(updateUser( await updateUserInDb()))
    }


    const updateUserInDb = async () => {
        console.log("HELLO");
        const newUser = {  	
            id: thisUser.id,
            name: thisUser.name,
            picture: thisUser.picture,
            status: updateuser.status,
            bio: updateuser.bio,
            fun_fact: updateuser.funfact,
            createdAlumniEvents: thisUser.createdAlumniEvents,
            alumniGroups: thisUser.alumniGroups,
            alumniEvents: thisUser.alumniEvents,
            topics: thisUser.topics,
            posts: thisUser.posts,
            ownedAlumniGroups: thisUser.ownedAlumniGroups,
            studentMembershipInvites: thisUser.studentMembershipInvites,
            studentRSVPs:thisUser.studentRSVP 
        }

        const link = `${apiUrl}student/${thisUser.id}`
        const response = await axios.put(`${apiUrl}student/${thisUser.id}`, newUser)
        return newUser
        console.log(response);

    }
    

    
    

  return (
    <div class="mt-auto py-3 text-center text-lg-start" className="profile">
        <div className="nameAndPicture">
            <img src={thisUser.picture} alt="could not be found" className="image" />
        <div class="form-control" id="name" className="name">{thisUser.id}</div>
        </div>
            <input  name="status" placeholder="Status" onChange={handleChange} value={updateuser.status} id="status" className="status"></input>
            <input  name="bio" placeholder="Bio" id="bio" onChange={handleChange} className="bio" value={updateuser.bio}></input><br/>
            <input  name="funfact" placeholder="Funfact" onChange={handleChange} id="funfact" value={updateuser.fun_fact} className="funfact"></input><br/>
        <div class="nav-item" className="buttons">
            <button type="submit" class="btn btn-secondary m-4" onClick={handlesubmit}>Save</button>
            <button class="btn btn-danger m-4" onClick={() => keycloak.logout()}>Logout</button>
        </div>
    </div>
  );
}
