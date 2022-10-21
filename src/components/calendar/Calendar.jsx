
import { Calendar, momentLocalizer, dateFnsLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from "date-fns/format";
import parse from "date-fns/parse";
import react, {useState, useEffect} from "react"
import startOfDay from 'date-fns/startOfDay';
import startOfWeek from 'date-fns/startOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import getWeek from 'date-fns/getWeek';
import getDay from "date-fns/getDay";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

import lock from '../../assets/lock-fill.svg';
import globe from '../../assets/globe.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';

import { getEvents } from "../Event/EventHandler";
import Createevent from "../Event/CreateEvent";


const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = momentLocalizer(moment);

const myEventList = [
    {start_time: new Date(), end_time:new Date(), name:"special event" }
];

/*
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022,10,5),
        end: new Date(2022,10,9)
    },
    {
        title: "vacation",
        start: new Date(2022,9,10),
        end: new Date(2022,9,14)
    },
    {
        title: "Conference",
        start: new Date(2022,9,2),
        end: new Date(2022,9,8)
    },
]

 */





function ReactCalendar () {
    const[date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date)
    }
    
    

    

    const [newEvent, setNewEvent] = useState({title:"", start:"", end: ""})
    const [allEvents, setAllEvents] = useState()

    function handleAddEvent() {
        setAllEvents({...allEvents, newEvent})
    }

    return (
    <div>
        <div className='reactCalendar'>
            <h1>calendar</h1> 
            
          <Calendar 
            localizer={localizer} 
            events={myEventList}
            startAccessor="start_time"
            endAccessor="end_time"
            style={{height:500, margin: "50px"}} 
          />
        </div>
        
       

   
    </div>
    
    );
    
}


export default ReactCalendar

/*
const [events, setEvents] = useState([]);
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
    
    useEffect(() => {
      loadEvents();
    }, []);
    
    const loadEvents = async () => {
      const array = await getEvents();
      setEvents(array[1]);
    };
    /*
    /*
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
     /*


/*
<div className="eventcontent">
<div className="addgroup">
    <h3>Events</h3>
    <div className="addbuttoncustom">
<Createevent />
</div>
</div>
<div className="eventspage">
*/

/*
const ReactCalendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        loadEvents();
      }, []);
      const loadEvents = async () => {
        const array = await getEvents();
        setEvents(array[1]);
      };
      

    const[date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date)
    }
    return (
    <div>
        <div>
            <Calendar onChange={onChange} value={date} />
            {console.log(date)}
            {date.toString()}

        </div>
        <div>
            {events.map((event) => {
            return(
                    <div className="eventsection" key={event.id}>
                    <p className="eventtime">{event.start_time.slice(0,10)} &nbsp; {event.start_time.slice(11,16)}</p>
                    <p className="eventname">{event.name}</p><br/>
                    <p className="eventdesc">{event.description}</p>
                    </div>
                )
            })}
        </div>
        
            
    </div>
    
    );
};

export default ReactCalendar
*/