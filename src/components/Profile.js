import React, { useState } from "react";
import keycloak from "../keycloak/keycloak";

import "../styles/Profile.scss";

export default function Profile() {

    const [user, setUser] = useState({
        name: "Kari Nordmann",
        bio: "This is my bio",
        status: 'Status example',
        image:   "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-woman-vector-id1074273082?k=20&m=1074273082&s=612x612&w=0&h=SovjUEtBkN7NidGCPXY_Gq-RxuQB-xUhF3xOeRg6qG8=",
        funfact: "Addicted to cheeze"

    });
    function handleStatusChange(e) {
        setUser({
            ...user,
            status:e.target.value
        });
    }
    function handleBioChange(e) {
        setUser({
            ...user,
            bio:e.target.value
        });
    }
    function handleFunfactChange(e) {
        setUser({
            ...user,
            funfact:e.target.value
        });
    }




  return (
    <div class="mt-auto py-3 text-center text-lg-start" className="profile">
        <form class="container-lg" className="form">
            <div>
            <img src={user.image} alt="could not be found" className="image" />
            <textarea class="form-control" id="name" className="name">{keycloak.tokenParsed.name}</textarea><br/>
            </div>
            <input placeholder="Status" value={user.status} onChange={handleStatusChange} class="form-control" id="status" className="status"/>
            <input placeholder="Bio" value={user.bio} onChange={handleBioChange} class="form-control" id="bio" className="bio"/><br/>
            <input placeholder="Funfact" value={user.funfact} onChange={handleFunfactChange} class="form-control" id="funfact" className="funfact"/><br/>
          <div class="nav-item" className="buttons">
          <button type="submit" class="btn btn-secondary m-4" onClick={''}>Save</button>
          <button class="btn btn-danger m-4" onClick={() => keycloak.logout()}>Logout</button>
          </div>
        </form>
    </div>
  );
}
