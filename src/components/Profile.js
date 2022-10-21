import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import keycloak from "../keycloak/keycloak";


import "../styles/Profile.scss";
import { currentuser} from "./UserHandler";
import { selectUser, updateUser } from "../Features/userSlice"
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export default function Profile() {

    const thisUser = useSelector(selectUser)
    const dispatch = useDispatch()

    
    const [updateuser, setUpdateuser] = useState({
        id:thisUser.id,
        status: thisUser.status,
        bio: thisUser.bio,
        fun_fact: thisUser.fun_fact
    });
    const handleChange = (event) => {
        setUpdateuser({...updateuser, [event.target.name]:event.target.value})
        console.log(updateuser)
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        console.log(updateuser);
        setUpdateuser({status:updateuser.status, bio:updateuser.bio, fun_fact:updateuser.fun_fact})
        updateUserInDb()
        dispatch(updateUser(getUser()))



    const updateUserInDb = async () => {
        const response = await axios.put(`${apiUrl}student${thisUser.id}`, updateuser)
        if(response.status !== 201){
          console.log(response)
        }
        return response.data
    }
    const getUser = async () => {
        const response = await axios.get(`${apiUrl}student${updateuser.id}`)
        console.log(response.data)
    }
}
    
    

  return (
    <div class="mt-auto py-3 text-center text-lg-start" className="profile">
        <div className="nameAndPicture">
            <img src={thisUser.picture} alt="could not be found" className="image" />
        <div class="form-control" id="name" className="name">{thisUser.id}</div>
        </div>
            <input type="input" name="status" placeholder="Status" onChange={handleChange} value={updateuser.status} id="status" className="status"></input>
            <input  name="bio" placeholder="Bio" id="bio" onChange={handleChange} className="bio" value={updateuser.bio}></input><br/>
            <input  name="funfact" placeholder="Funfact" onChange={handleChange} id="funfact" value={updateuser.fun_fact} className="funfact"></input><br/>
        <div class="nav-item" className="buttons">
            <button type="submit" class="btn btn-secondary m-4" onSubmit={handlesubmit}>Save</button>
            <button class="btn btn-danger m-4" onClick={() => keycloak.logout()}>Logout</button>
        </div>
    </div>
  );
}
