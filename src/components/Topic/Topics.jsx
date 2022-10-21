import React from "react";
import "../../styles/Groups.scss";
import { useState, useEffect } from "react";
import {  getAvailableTopicsOfStudent, getTopicsOfStudent } from "./TopicHandler";
import people from '../../assets/people-fill.svg';
import event from '../../assets/calendar-event.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';
import Createtopic from "./CreateTopic";
import { createHeaders } from "../../api/index";
import { selectUser } from "../../Features/userSlice";
import { useSelector } from "react-redux";

export default function Topics() {
  const currentuser = useSelector(selectUser);
  const [groups, setGroups] = useState([]);
  const [availableGroups, setAvailableGroups] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    loadGroups();
  },[update]);

  const reload = (input) => {
    setUpdate(update+input)
  };
  const loadGroups = async () => {
    const array = await getAvailableTopicsOfStudent(currentuser);
    const arraya = await getTopicsOfStudent(currentuser);
    setGroups(array[1]);
    setAvailableGroups(arraya[1]);
  };

  const joinTopic = async (n) => {
    
    try {
      console.log(n)
      console.log(currentuser.id)
      const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}/addTopicToStudent`, {
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
const leaveTopic = async (n) => {
    
  try {
    console.log(n)
    console.log(currentuser.id)
    const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}/removeTopicFromStudent`, {
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
  function getEnvelope(n){
    if (n===0){
        return envelopeempty;
    } else {
        return envelope;
    }
  }
  


  return (
    <div className="content">
    <div className="addgroup">
        <h3>Topics</h3>
        <div className="addbuttoncustom">
    <Createtopic setUpdate={reload}/>
    </div>
    </div>
    <div className="groups">
     {groups.map((group) => {
        return(
            <div className="group" key={group.id}>
            <h3>{group.name}</h3>
            <div className="members">
            <img class="mt-1" src={people} height="15px" alt="no logo"/>
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
            <button class="btn btn-secondary btn-sml" onClick={() => joinTopic(group.id)}>Join</button>
            </div>
        )
     })}
     {availableGroups.map((group) => {
        return(
            <div className="group" key={group.id}>
            <h3>{group.name}</h3>
            <div className="members">
            <img class="mt-1" src={people} height="15px" alt="no logo"/>
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
            <div>
            <button class="btn btn-danger" onClick={() => leaveTopic(group.id)}>Leave</button>
            </div>
            </div>
        )
     })}
    </div></div>
  );
}