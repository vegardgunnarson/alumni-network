
import { Calendar, globalizeLocalizer, } from "react-big-calendar";
import "../../styles/Timeline.scss";
import globalize from 'globalize';
import {useNavigate} from 'react-router-dom'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../../styles/Calendar.scss";

import react, {useState, useEffect} from "react"

import { getEvents } from "../Event/EventHandler";





const localizer = globalizeLocalizer(globalize);

function ReactCalendar () {
  const navigate = useNavigate();
    
const [events, setEvents] = useState([new Date()]);
useEffect(() => {
    loadEvents();
  }, []);
  const loadEvents = async () => {
    const array = await getEvents();
    setEvents(array[1]);
  };

    return (
    <div className="container">
        <div className="reactCalendar">
            <h3 class="calenderh3">Calendar</h3> 
            <p className="calenderp" onClick={() => navigate('/timeline')}>Back</p>
            
          <Calendar 
            localizer={localizer} 
            events={events}
            startAccessor={(event) => { return new Date(event.start_time) }}
            endAccessor={(event) => { return new Date(event.end_time) }}
            titleAccessor="name"
           
            style={{height:800, margin: "50px"}} 
          />
        </div>
    
    </div>
    
    );
    
}


export default ReactCalendar


