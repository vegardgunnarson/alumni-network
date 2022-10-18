import React from "react";
import "../../styles/Groups.scss";
import { useState, useEffect } from "react";
import {  getAvailableTopicsOfStudent } from './TopicHandler';
import event from '../../assets/calendar-event.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';
import Createtopic from "./CreateTopic";
import people from '../../assets/people-fill.svg';

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    loadTopics();
  }, []);
  const loadTopics = async () => {
    const array = await getAvailableTopicsOfStudent();
    setTopics(array[1]);
  };
  

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
    <div>
    <div className="addgroup">
        <h3>Topics</h3>
        <div className="addbuttoncustom">
    <Createtopic />
    </div>
    </div>
    <div className="groups">
     {topics.map((topic) => {
        return(
            <div className="group" key={topic.id}>
            <h3>{topic.name}</h3>
            <div className="members">
            <img class="mt-1" src={people} height="15px" alt="no logo"/>
            <p>{members(topic.students.length)}</p>
            </div>
            <p>{topic.description}</p>
            <div className="posts">
            <img src={getEnvelope(topic.posts.length)} class="mt-1" height="15px" alt="no logo"/>
            <p>{posts(topic.posts.length)}</p>
            </div>
            <div className="events">
            <img src={event} class="mt-1" height="15px" alt="no logo"/>
            <p>{events(topic.alumniEvents.length)}</p>
            
            </div>
            <button class="btn btn-secondary btn-sml">Join</button>
            </div>
        )
     })}

    </div></div>
  );
}
