import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import keycloak from "../keycloak/keycloak";

import "../styles/Profile.scss";
import { selectUser, updateUser } from "../Features/userSlice";
import axios from "axios";
import { getUserFromDb } from "../api/user";
const apiUrl = process.env.REACT_APP_API_URL;

export default function Profile() {
  const thisUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const [updateuser, setUpdateuser] = useState({
    status: thisUser.status,
    bio: thisUser.bio,
    fun_fact: thisUser.fun_fact,
  });

  const [pictureUrl, setPictureUrl] = useState(thisUser.picture);

  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {}, [thisUser]);

  const fetchUser = async () => {
    dispatch(updateUser(await getUserFromDb()));
  };
  const handleChange = (event) => {
    setUpdateuser({ ...updateuser, [event.target.name]: event.target.value });
  };

  const handlesubmit = async () => {
    dispatch(updateUser(await updateUserInDb()));
    console.log(thisUser);
  };

  const changePicture = async () => {
    setPictureUrl(prompt("Enter image link"));
  };

  const updateUserInDb = async () => {
    const newUser = {
      id: thisUser.id,
      name: thisUser.name,
      picture: pictureUrl,
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
      studentRSVPs: thisUser.studentRSVP,
    };

    await axios.put(`${apiUrl}student/${thisUser.id}`, newUser);
    return newUser;
  };

  return (
    <div class="mt-auto py-3 text-center text-lg-start" className="profile">
      <div className="nameAndPicture">
        <img
          src={thisUser.picture}
          alt="could not be found"
          onClick={() => changePicture()}
          className="image"
        />
        <div class="form-control" id="name" className="name">
          {thisUser.name}
        </div>
      </div>
      <input
        name="status"
        placeholder="Status"
        onChange={handleChange}
        value={updateuser.status}
        id="status"
        className="status"
      ></input>
      <input
        name="bio"
        placeholder="Bio"
        id="bio"
        onChange={handleChange}
        className="bio"
        value={updateuser.bio}
      ></input>
      <br />
      <input
        name="funfact"
        placeholder="Funfact"
        onChange={handleChange}
        id="funfact"
        value={updateuser.fun_fact}
        className="funfact"
      ></input>
      <br />
      <div class="nav-item" className="buttons">
        <button
          type="submit"
          class="btn btn-secondary m-4"
          onClick={handlesubmit}
        >
          Save
        </button>
        <button class="btn btn-danger m-4" onClick={() => keycloak.logout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
