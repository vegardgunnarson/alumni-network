import React, { useState, useEffect } from "react";
import keycloak from "../keycloak/keycloak";

import "../styles/Profile.scss";
import { updateBio, updateStatus , updateFunfact} from "./UserHandler";

export default function Profile() {


    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://alumni-case-database.herokuapp.com/api/v1/student/1")
            .then((response) => response.json())
            .then((data => setUser(data)))
    }

    useEffect(() => {
        fetchData();
    },[])


    const saveChanges = async () => {
        console.log("he");
        console.log(document.getElementById('bio'));
        await updateBio(user, document.getElementById('bio'));

        await updateStatus(user, document.getElementById('status'));

        await updateFunfact(user, document.getElementById('funfact'));
    }


  return (
    <div class="mt-auto py-3 text-center text-lg-start" className="profile">
        <form class="container-lg" className="form">
            <div className="nameAndPicture">
            <img src={user.picture} alt="could not be found" className="image" />
            <div class="form-control" id="name" className="name">{user.name}</div>
            </div>
            <p  placeholder="Status" id="status" className="status">{user.status}</p>
            <p  placeholder="Bio" id="bio" className="bio">{user.bio}</p><br/>
            <p  placeholder="Funfact"  id="funfact" className="funfact">{user.fun_fact}</p><br/>
          <div class="nav-item" className="buttons">
          <button type="submit" class="btn btn-secondary m-4" onClick={saveChanges}>Save</button>
          <button class="btn btn-danger m-4" onClick={() => keycloak.logout()}>Logout</button>
          </div>
        </form>
    </div>
  );
}
