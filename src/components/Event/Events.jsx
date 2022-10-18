import React from "react";
import "../../styles/Events.scss";
import { useState, useEffect } from "react";
import { getEvents } from "./EventHandler";
import lock from '../../assets/lock-fill.svg';
import globe from '../../assets/globe.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';
import Createevent from "./CreateEvent";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);
  const loadEvents = async () => {
    const array = await getEvents();
    setEvents(array[1]);
  };

  function people(n){
    if (n===1){
        return n+" attendee";
    }else{
        return n+" attendees";
    }
  }
  function posts(n){
    if (n===1){
        return n+" post";
    }else{
        return n+" posts";
    }
  }

  
  function visibility(n){
    if (n===false){
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
    <div className="eventcontent">
    <div className="addgroup">
        <h3>Events</h3>
        <div className="addbuttoncustom">
    <Createevent />
    </div>
    </div>
    <div className="eventspage">

     {events.map((event) => {
      
        return(
            <div className="event" key={event.id}>
            <h3>{event.name}</h3>
            <div className="eventmembers">
            <img class="mt-1" src={visibility(event.allow_guests)} height="15px" alt="no logo"/>
            <p>{people(event.students.length)}</p>
            </div>
            <div>
            <p className="eventtime">{event.start_time.slice(0,10)} &nbsp; {event.start_time.slice(11,16)} - {event.end_time.slice(11,16)}</p>
            <p className="eventdescription">{event.description}</p>
            </div>
            <div className="posts">
            <img src={getEnvelope(event.posts.length)} class="mt-1" height="15px" alt="no logo"/>
            <p>{posts(event.posts.length)}</p>
            </div>
            <div className="events">
            <p></p>
            </div>
            <div>
            <button class="btn btn-secondary">Accept</button>
            </div>
            </div> 
        )
     })}
    </div>
    </div>
  );
}