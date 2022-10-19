import React from "react";
import "../../styles/Posts.scss";
import { useState, useEffect } from "react";
import { getPosts } from "./PostHandler";
import lock from '../../assets/lock-fill.svg';
import globe from '../../assets/globe.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';
import Createpost from "./CreatePost";
import TimeAgo from "../../Features/posts/TimeAgo";
import PostAuthor from "../../Features/posts/PostAuthor";

import { getAvailablePostsOfGroup } from "./PostHandler";
import { getTopicsOfStudent } from "../Topic/TopicHandler";
import { getAvailablePostsOfTopic } from "./PostHandler";
import { getAvailablePostsOfEvent } from "./PostHandler";

export default function Posts() {

  const [display, setDisplay] = useState();

  function handleDisplay(newDisplay){
    setDisplay(newDisplay);
}
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    const array = await getPosts();
    setPosts(array[1]);
  };
/*
  const [getPostsOfgroup, setPostsofgroup] = useState([]);

  useEffect(() => {
    loadPostsOfgroup();
  }, []);
  const loadPostsOfgroup  = async () => {
    const array = await getAvailablePostsOfGroup();
    setPostsofgroup(array[1]);
  };

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    loadTopics();
  }, []);
  const loadTopics = async () => {
    const array = await getTopicsOfStudent();
    setTopics(array[1]);
  };

  const [PostsOfTopics, setPostsOfTopics] = useState([]);

  useEffect(() => {
    loadPostsOfTopics();
  }, []);
  const loadPostsOfTopics = async () => {
    const array = await getAvailablePostsOfTopic();
    setPostsOfTopics(array[1]);
  };

  const [PostsofEvent, setPostsofEvent] = useState([]);

  useEffect(() => {
    loadPostsofEvent();
  }, []);
  const loadPostsofEvent = async () => {
    const array = await getAvailablePostsOfEvent();
    setPostsofEvent(array[1]);
  };*/

  function members(n){
    if (n===1){
        return n+" member";
    }else{
        return n+" members";
    }
  }
  function events(n){
    if (n===1){
        return n+" event";
    }else{
        return n+" events";
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
    <div>
    <div className="addgroup">
        <h3>Posts</h3>
        <div className="addbuttoncustom">
    <Createpost />
    </div>
    </div>
    <div className="groups">
    {posts.map((post) => {
        return(
            <div className="group">
            <h3>sender_student: {post.sender_student}</h3>
          
            
          
            <p>content: {post.content}</p>
            
            
             
             <h4>target_student: {post.target_student}</h4>
             <p>target_alumniEvent: {post.target_alumniEvent}</p>
             <p>target_alumniGroup: {post.target_alumniGroup}</p>
             <p>target_topic: {post.target_topic}</p>
             <p>reply_post: {post.reply_post}</p>
             <p>replies: {post.replies}</p>
             <p>private: {post._private}</p>

            
                
            
             <TimeAgo timestamp={post.timestamp} />
             <PostAuthor userId={post.userId} />
            <div className="posts">
            </div>

            </div>
        )
      })}

    </div></div>
  );
}

 /*  })}
      {topics.map((topic) => {
            return(
            <div className="topicsection" key={topic.id}>
            <p onClick={() => handleDisplay(topic)}>{topic.name}</p>
            </div>
            )
            })}
      {getPostsOfgroup.map((group) => {
            return(
            <div className="topicsection" key={group.id}>
            <p onClick={() => handleDisplay(group)}>{group.name}</p>
            </div>
            )
            })}
      {PostsOfTopics.map((topic) => {
            return(
            <div className="topicsection" key={topic.id}>
            <p onClick={() => handleDisplay(topic)}>{topic.name}</p>
            </div>
            )
            })}
      {PostsofEvent.map((event) => {
            return(
            <div className="topicsection" key={event.id}>
            <p onClick={() => handleDisplay(event)}>{event.name}</p>
            </div>
            )
            })}
      */