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
import Createpost from "./CreatePost";


export default function Timeline() {
    const home={
        name: "Dashboard",
        description: "Personal dashboard",
        id: 0
    }


    const [display, setDisplay] = useState(home);
    const [type, setType] = useState([]);
    const [update, setUpdate] = useState(0);



    function handleDisplay(newDisplay,type){
        setDisplay(newDisplay);
        setType(type);
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
  }, [update]);
  const loadPosts = async () => {
    const array = await getPosts();
    setPosts(array[1]);
  };
 
  useEffect(() => {
    fetchData();
  }, [update]);

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    loadGroups();
  }, [update]);
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

  function handleLeaveGroup(id) {
    console.log("leaving group")

  }
  const reload = (input) => {
    setUpdate(update+input)
  };

  return (
    <div className="dashboard">
      <div className="topdashboard">
        <div className="profileview" >
          <img
            src={user.picture}
            alt="could not be found"
            className="profileimage"
            onClick={() => handleDisplay(home,"addDMPost")}
          />
          <h4 class="mt-1" onClick={() => handleDisplay(home,"addDMPost")}>{user.name}</h4>
          <br />
          <p className="profilestatus">{user.status}</p>
          <a className="profilelink" href="/Profile">Show profile</a>
        </div>
        
        <div className="post">
            <h3>{display.name}</h3>
            <p className="groupdescription">{display.description}</p>
            <div>
            <Createpost setUpdate={reload} type={type} id={currentuser.id}/>
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
            <p onClick={() => handleDisplay(group,"addGroupPost")}>{group.name}</p><p onClick={() => handleLeaveGroup(group.id)}>x</p>
            </div>
            )
        })}
        <div className="creategroupetimeline">
        <h5 className="topictitle">Topics</h5><Createtopic />
            </div>
        
            {topics.map((topic) => {
        return(
            <div className="topicsection" key={topic.id}>
            <p onClick={() => handleDisplay(topic,"addTopicPost")}>{topic.name}</p>
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
