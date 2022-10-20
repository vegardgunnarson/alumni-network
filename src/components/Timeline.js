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
  const getPosts = async () => {
    try{
        const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/${display.id}/${whichPosts}`);
        if(!response.ok){
            throw new Error("No posts found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
const [posts, setPosts] = useState([]);

useEffect(() => {
    loadPosts();
  },[display]);
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
  }, [update]);
  const loadTopics = async () => {
    const array = await getTopicsOfStudent();
    setTopics(array[1]);
  };
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, [update]);
  const loadEvents = async () => {
    const array = await getEvents();
    setEvents(array[1]);
  };

  function handleLeaveGroup(id) {
    console.log("leaving group")
  }
  function handleLeaveTopic(id) {
    console.log("leaving group")

  }
  function handleLeaveEvent(id) {
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
          <h4 class="mt-1" onClick={() => handleDisplay(home,"addDMPost","viewAllPosts")}>{user.name}</h4>
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
            <div className="eventnameandx">
            <p className="eventname" onClick={() => handleDisplay(event,"addEventPost","viewEventPosts")}>{event.name}</p><p className="xevent" onClick={() => handleLeaveEvent(event.id)}>x</p></div><br/>
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
            <p onClick={() => handleDisplay(group,"addGroupPost","viewTopicPosts")}>{group.name}</p><p onClick={() => handleLeaveGroup(group.id)}>x</p>
            </div>
            )
        })}
        <div className="creategroupetimeline">
        <h5 className="topictitle">Topics</h5><Createtopic />
            </div>
        
            {topics.map((topic) => {
        return(
            <div className="topicsection" key={topic.id}>
            <p onClick={() => handleDisplay(topic,"addTopicPost","viewGroupPosts")}>{topic.name}</p><p onClick={() => handleLeaveTopic(topic.id)}>x</p>
            </div>
            )
        })}
        </div>
        <div className="timeline">
        {posts.map((post) => {
        return(
            <div className="timelineposts">
                <p>{post.content}</p>
            <p className="postsinfo">By {post.sender_student} &nbsp; {post.timestamp} &nbsp;{post.timestamp}</p>
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
