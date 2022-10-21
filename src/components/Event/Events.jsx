import React from "react";
import "../../styles/Events.scss";
import { useState, useEffect } from "react";
import { getEvents } from "./EventHandler";
import lock from '../../assets/lock-fill.svg';
import globe from '../../assets/globe.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';
import Createevent from "./CreateEvent";
import { createHeaders } from "../../api";
import { selectUser } from "../../Features/userSlice";
import { useSelector } from "react-redux";

export default function Events() {
  const currentuser = useSelector(selectUser);
  const [events, setEvents] = useState([]);
  const [update, setUpdate] = useState(0);

  function trimDate(d){
    const thisdate = new Date(d);
    return thisdate.toLocaleString('no-GB', {hour12: false});
}


  useEffect(() => {
    loadEvents();
  }, [update]);
  const loadEvents = async () => {
    const array = await getEvents();
    setEvents(array[1]);
  };
  const reload = (input) => {
    setUpdate(update+input)
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

  const joinEvent = async (n) => {
    
    try {
      console.log(n)
      console.log(currentuser.id)
      const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}/addEventToStudent`, {
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

    
  return (
    <div className="eventcontent">
    <div className="addgroup">
        <h3>Events</h3>
        <div className="addbuttoncustom">
    <Createevent setUpdate={reload}/>
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
            <p className="eventtime">{trimDate(event.start_time)} &nbsp; - {trimDate(event.end_time)}</p>
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
            <button class="btn btn-secondary"  onClick={() => joinEvent(event.id)}>Accept</button>
            </div>
            </div> 
        )
     })}
    </div>
    </div>
  );
}