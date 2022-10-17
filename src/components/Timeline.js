import React from "react";
import "../styles/Timeline.scss";
import { useEffect, useState } from "react";
import { getGroups } from "./Group/GroupHandler";
import { getTopics } from "./Topic/TopicHandler";
import { getEvents } from "./Event/EventHandler";
import Creategroup from "./Group/CreateGroup";
import Createevent from "./Event/CreateEvent";
import Createtopic from "./Topic/CreateTopic";

export default function Timeline() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://alumni-case-database.herokuapp.com/api/v1/student/5")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    loadGroups();
  }, []);
  const loadGroups = async () => {
    const array = await getGroups();
    setGroups(array[1]);
  };
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    loadTopics();
  }, []);
  const loadTopics = async () => {
    const array = await getTopics();
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
        <div className="profileview">
          <img
            src={user.picture}
            alt="could not be found"
            className="profileimage"
          />
          <h3 class="mt-1">{user.name}</h3>
          <br />
          <p className="profilestatus">{user.status}</p>
          <a className="profilelink" href="/Profile">Show profile</a>
        </div>
        <div className="post">

        </div>
        <div className="dashevent">
        <div className="creategroupetimeline">
        <h5 className="eventtitle">Upcoming events</h5><Createevent />
        </div>
            {events.map((event) => {
        return(
            <div className="eventsection">
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
            <div className="groupsection">
            <p>{group.name}</p><p>{group.posts.length}</p>
            </div>
            )
        })}
        <div className="creategroupetimeline">
        <h5 className="topictitle">Topics</h5><Createtopic />
            </div>
        
            {topics.map((topic) => {
        return(
            <div className="topicsection">
            <p>{topic.name}</p>
            </div>
            )
        })}
        </div>
        <div className="timeline">

        </div>
        <div className="underevent"></div>
      </div>
    </div>
  );
}
