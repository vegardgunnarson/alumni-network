import React from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect } from "react";
import { useCallback } from "react";

import "../styles/Profile.scss";

export default function Profile() {
  const user = {
    name: "Kari Nordmann",
    image:
      "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-woman-vector-id1074273082?k=20&m=1074273082&s=612x612&w=0&h=SovjUEtBkN7NidGCPXY_Gq-RxuQB-xUhF3xOeRg6qG8=",
    status: "Attending Experis Academy",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    funfact: "Addicted to cheeze",
  };


  return (
    <div class="mt-auto py-3 text-center text-lg-start" className="profile">
        <form class="container-lg" className="form">
            <div>
            <img src={user.image} alt="could not be found" className="image" />
            <textarea class="form-control" id="name" className="name">{user.name}</textarea><br/>
            </div>
          <textarea class="form-control" id="status" className="status">{user.status}</textarea><br/>
          <textarea class="form-control" id="bio" className="bio" >{user.bio}</textarea><br/>
          <textarea class="form-control" id="funfact" className="funfact">{user.funfact}</textarea><br/>
          <div className="buttons">
          <button type="submit" class="btn btn-secondary">Save</button>
          <button class="btn btn-danger"><a class="nav-link" href="/">Log Out</a></button>
          </div>
        </form>
    </div>
  );
}
