import React from "react";
import "../styles/Timeline.scss";
import { useEffect, useState } from "react";
import {  getGroupsOfStudent } from "./Group/GroupHandler";
import {  getTopicsOfStudent} from "./Topic/TopicHandler";
import { getEvents } from "./Event/EventHandler";
import Creategroup from "./Group/CreateGroup";
import Createevent from "./Event/CreateEvent";
import Createtopic from "./Topic/CreateTopic";
import Createpost from "./CreatePost";
import { selectUser } from "../Features/userSlice";
import { useSelector } from "react-redux";
import { Calendar, globalizeLocalizer, } from "react-big-calendar";

import globalize from 'globalize'
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function Timeline() {
  const localizer = globalizeLocalizer(globalize);


    const currentuser = useSelector(selectUser);
    const home={
        name: "Dashboard",
        description: "Personal dashboard",
        id: currentuser.id
    }

    const [display, setDisplay] = useState(home);
    const [type, setType] = useState("addDMPost");
    const [whichPosts, setWhichPosts] = useState("viewAllPosts");
    const [update, setUpdate] = useState(0);



    function handleDisplay(newDisplay,type,posts){
        setDisplay(newDisplay);
        setType(type);
        setWhichPosts(posts);
    }
  
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    return fetch(`https://alumni-case-database.herokuapp.com/api/v1/student/${currentuser.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    loadPosts();
  }, [update, display]);

  const loadPosts = async () => {
    const array = await getPosts();
    if (array[1].length !== 0) {
        array[1].sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
    }
    setPosts(array[1]);
  };
  
  const getPosts = async () => {
    try{
        const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/post/${display.id}/${whichPosts}`);
        if(!response.ok){
            throw new Error("No posts found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}


function trimDate(d){
    const thisdate = new Date(d);
    return thisdate.toLocaleString('no-GB', {hour12: false});
}

 
  useEffect(() => {
    fetchData();
  }, [update]);

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    loadGroups();
  }, [update]);
  const loadGroups = async () => {
    const array = await getGroupsOfStudent(currentuser);
    if (array[1].length !== 0) {
        array[1].sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
    }
    setGroups(array[1]);
  };
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    loadTopics();
  }, [update]);
  const loadTopics = async () => {
    const array = await getTopicsOfStudent(currentuser);
    if (array[1].length !== 0) {
        array[1].sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
    }
    setTopics(array[1]);
  };
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, [update]);
  const loadEvents = async () => {
    const array = await getEvents();
    if (array[1].length !== 0) {
        array[1].sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
    }
    setEvents(array[1]);
  };

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
            onClick={() => handleDisplay(home,"addDMPost","viewAllPosts")}
          />
          <h4 class="mt-1" onClick={() => handleDisplay(home,"addDMPost","viewAllPosts")}>{user.name}</h4>
          <br />
          <p className="profilestatus">{user.status}</p>
          <a className="profilelink" href="/Profile">Show profile</a>
        </div>
        
        <div className="post">
            <h3>{display.name}</h3>
            <p className="groupdescription">{display.description}</p>
            <div>
            <Createpost setUpdate={reload} type={type} object={display} id={display.id} location={display.name} username={currentuser.name}/>
            </div>

        </div>
        <div className="dashevent">
        <div className="creategroupetimeline">
        <h5 className="eventtitle">Upcoming events</h5><Createevent />
        </div>
            {events.map((event) => {
        return(
            <div className="eventsection" key={event.id}>
            <p className="eventtime">{trimDate(event.start_time)} &nbsp;</p>
            <div className="eventnameandx">
            <p className="eventname" onClick={() => handleDisplay(event,"addEventPost","viewEventPosts")}>{event.name}</p></div><br/>
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
            <p onClick={() => handleDisplay(group,"addGroupPost","viewGroupPosts")}>{group.name}</p><p>{group.posts.length}</p>
            </div>
            )
        })}
        <div className="creategroupetimeline">
        <h5 className="topictitle">Topics</h5><Createtopic />
            </div>
        
            {topics.map((topic) => {
        return(
            <div className="topicsection" key={topic.id}>
            <p onClick={() => handleDisplay(topic,"addTopicPost","viewTopicPosts")}>{topic.name}</p><p>{topic.posts.length}</p>
            </div>
            )
        })}
        </div>

        <div className="timeline">
        {posts.map((post) => {
        return(
            <div className="timelineposts" key={post.id*2}>
                <p className="postsinfo">{post.post_location}</p>
                <div>{post.reply}</div>
                <div className="posttitle">{post.title}</div>
                <p>{post.content}</p>
                <p className="postsinfo">By {post.creator_student} {trimDate(post.timestamp)}</p>
            
            </div>
        )
     })}
        </div>
        <div className="underevent"></div>
      </div>
    </div>
  );
}
