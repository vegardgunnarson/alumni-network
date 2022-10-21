
import { Calendar, globalizeLocalizer, } from "react-big-calendar";

import globalize from 'globalize'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import react, {useState, useEffect} from "react"

import { getEvents } from "../Event/EventHandler";





const localizer = globalizeLocalizer(globalize);

function ReactCalendar () {
    
const [events, setEvents] = useState([new Date()]);
useEffect(() => {
    loadEvents();
  }, []);
  const loadEvents = async () => {
    const array = await getEvents();
    setEvents(array[1]);
  };

    return (
    <div>
        <div className='reactCalendar'>
            <h1>calendar</h1> 
            
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


