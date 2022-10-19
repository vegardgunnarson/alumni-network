import React from "react";
import "../styles/Timeline.scss";
import { useEffect, useState } from "react";
import {  getGroupsOfStudent } from "./Group/GroupHandler";
import {  getTopicsOfStudent} from "./Topic/TopicHandler";
import { getEvents } from "./Event/EventHandler";
import { getPosts } from "./Posts/PostHandler";
import Creategroup from "./Group/CreateGroup";
import Createevent from "./Event/CreateEvent";
import Createtopic from "./Topic/CreateTopic";
import { currentuser } from '../components/UserHandler';


export default function Timeline() {
    const home={
        name: "Dashboard",
        description: "Personal dashboard"
    }

    const [display, setDisplay] = useState(home);

    function handleDisplay(newDisplay){
        setDisplay(newDisplay);
    }
  
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    return fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };


  useEffect(() => {
    fetchData();
  }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    const array = await getPosts();
    setPosts(array[1]);
  };
 


  useEffect(() => {
    fetchData();
  }, []);

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    loadGroups();
  }, []);
  const loadGroups = async () => {
    const array = await getGroupsOfStudent();
    setGroups(array[1]);
  };
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    loadTopics();
  }, []);
  const loadTopics = async () => {
    const array = await getTopicsOfStudent();
    setTopics(array[1]);
  };
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);
  const loadEvents = async () => {
    const array = await getEvents();
    setEvents(array[1]);
  };

  return (
    <div className="dashboard">
      <div className="topdashboard">
        <div className="profileview" >
          <img
            src={user.picture}
            alt="could not be found"
            className="profileimage"
            onClick={() => handleDisplay(home)}
          />
          <h3 class="mt-1" onClick={() => handleDisplay(home)}>{user.name}</h3>
          <br />
          <p className="profilestatus">{user.status}</p>
          <a className="profilelink" href="/Profile">Show profile</a>
        </div>
        
        <div className="post">
            <h3>{display.name}</h3>
            <p className="groupdescription">{display.description}</p>
            <div>
            <button type="button" class="btn btn-light mt-4">Create post... </button>
            </div>

        </div>
        <div className="dashevent">
        <div className="creategroupetimeline">
        <h5 className="eventtitle">Upcoming events</h5><Createevent />
        </div>
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
      <div className="bottomdashboard">
        <div className="sidenav">
            <div className="creategroupetimeline">
            <h5 className="grouptitle">Groups</h5><Creategroup />
            </div>

            {groups.map((group) => {
        return(
            <div className="groupsection" key={group.id}>
            <p onClick={() => handleDisplay(group)}>{group.name}</p><p>{group.posts.length}</p>
            </div>
            )
        })}
        <div className="creategroupetimeline">
        <h5 className="topictitle">Topics</h5><Createtopic />
            </div>
        
            {topics.map((topic) => {
        return(
            <div className="topicsection" key={topic.id}>
            <p onClick={() => handleDisplay(topic)}>{topic.name}</p>
            </div>
            )
        })}
        </div>
        <div className="timeline">
        {posts.map((post) => {
        return(
            <div className="timelineposts">
                <p>{post.content}</p>
            <p className="postsinfo">By {post.sender_student} &nbsp; {post.timestamp.slice(0,10)} &nbsp;{post.timestamp.slice(11,16)}</p>
             <p>{post.target_alumniEvent}{post.target_topic}{post.target_alumniGroup}</p>
            </div>
        )
     })}
            

        </div>
        <div className="underevent"></div>
      </div>
    </div>
  );
}
