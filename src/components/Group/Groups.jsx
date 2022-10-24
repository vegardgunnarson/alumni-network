import React from "react";
import "../../styles/Groups.scss";
import { useState, useEffect } from "react";
import {  getAvailableGroupsOfStudent, getGroupsOfStudent } from "./GroupHandler";
import lock from '../../assets/lock-fill.svg';
import globe from '../../assets/globe.svg';
import event from '../../assets/calendar-event.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';
import Creategroup from "./CreateGroup";
import { selectUser } from "../../Features/userSlice";
import { useSelector } from "react-redux";
import axios, { createHeaders } from "../../api/index";
import { useNavigate} from 'react-router-dom';

export default function Groups() {
  const currentuser = useSelector(selectUser);
  const [groups, setGroups] = useState([]);
  const [availableGroups, setAvailableGroups] = useState([]);
  const [update, setUpdate] = useState(0);
  const navigate = useNavigate();
  

  useEffect(() => {
    loadGroups();
  },[update]);

  const reload = (input) => {
    setUpdate(update+input)
  };
  const loadGroups = async () => {
    const array = await getAvailableGroupsOfStudent(currentuser);
    const arraya = await getGroupsOfStudent(currentuser);
    if (array[1].length !== 0) {
      array[1].sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
  }    if (arraya[1].length !== 0) {
    arraya[1].sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
}
    setGroups(array[1]);
    setAvailableGroups(arraya[1]);
  };


  const joinGroup = async (gId) => {
    
    try {
      const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}/addGroupToStudent`, {
          method: 'PUT',
          headers: createHeaders(),
          body: gId
      });
      setUpdate(update+1);
      const data = await response.json();
      
      return data;

  } catch (error) {
      return error.message;
  }
} 
const leaveGroup = async (gId) => {
    
  try {
    const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}/removeGroupFromStudent`, {
        method: 'PUT',
        headers: createHeaders(),
        body: gId
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
  //&& handleDisplay(group,"addGroupPost","viewGroupPosts")}


  return (
    <div >
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
     {availableGroups.map((group) => {
        return(
            <div className="group" key={group.id}>
            <h3 onClick={() => navigate('/Timeline')}>{group.name}</h3>
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
            <div>
            <button class="btn btn-danger" onClick={() => leaveGroup(group.id)}>Leave</button>
            </div>
            </div>
        )
     })}
    </div></div>
  );
}
