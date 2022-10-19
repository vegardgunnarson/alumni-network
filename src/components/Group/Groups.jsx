import React from "react";
import "../../styles/Groups.scss";
import { useState, useEffect } from "react";
import {  getAvailableGroupsOfStudent } from "./GroupHandler";
import lock from '../../assets/lock-fill.svg';
import globe from '../../assets/globe.svg';
import event from '../../assets/calendar-event.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';
import Creategroup from "./CreateGroup";
import { currentuser } from "../UserHandler";
import axios, { createHeaders } from "../../api/index";

export default function Groups() {
  const [groups, setGroups] = useState([]);
  const [update, setUpdate] = useState(0);
  

  useEffect(() => {
    loadGroups();
  },[update]);

  const reload = (input) => {
    setUpdate(update+input)
  };
  const loadGroups = async () => {
    const array = await getAvailableGroupsOfStudent();
    setGroups(array[1]);
  };


  const joinGroup = async (n) => {
    
    try {
      console.log(n)
      console.log(currentuser.id)
      const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}/addGroupToStudent`, {
          method: 'PUT',
          headers: createHeaders(),
          body: n
      });
      setUpdate(update+1);
      const data = await response.json();
      //return user object
      
      return data;

  } catch (error) {
      return error.message;
  }
} 

  function members(n){
    if (n===1){
        return n+" member";
    }else{
        return n+" members";
    }
  }
  function posts(n){
    if (n===1){
        return n+" post";
    }else{
        return n+" posts";
    }
  }
  function events(n){
    if (n===1){
        return n+" event";
    }else{
        return n+" events";
    }
  }
  function visibility(n){
    if (n===true){
        return lock;
    }else{
        return globe;
    }
  }
  function getEnvelope(n){
    if (n===0){
        return envelopeempty;
    } else {
        return envelope;
    }
  }
  


  return (
    <div>
    <div className="addgroup">
        <h3>Groups</h3>
        <div className="addbuttoncustom">
    <Creategroup setUpdate={reload}/>
    </div>
    </div>
    <div className="groups">
     {groups.map((group) => {
        return(
            <div className="group" key={group.id}>
            <h3>{group.name}</h3>
            <div className="members">
            <img class="mt-1" src={visibility(group._private)} height="15px" alt="no logo"/>
            <p>{members(group.students.length)}</p>
            </div>
            <p>{group.description}</p>
            <div className="posts">
            <img src={getEnvelope(group.posts.length)} class="mt-1" height="15px" alt="no logo"/>
            <p>{posts(group.posts.length)}</p>
            </div>
            <div className="events">
            <img src={event} class="mt-1" height="15px" alt="no logo"/>
            <p>{events(group.alumniEvents.length)}</p>
            
            </div>
            <button class="btn btn-secondary btn-sml" onClick={() => joinGroup(group.id)}>Join</button>
            </div>
        )
     })}
    </div></div>
  );
}
