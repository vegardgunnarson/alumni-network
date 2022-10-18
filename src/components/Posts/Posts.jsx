import React from "react";
import "../../styles/Posts.scss";
import { useState, useEffect } from "react";
import { getPosts } from "./PostHandler";
import lock from '../../assets/lock-fill.svg';
import globe from '../../assets/globe.svg';
import envelope from '../../assets/envelope.svg';
import envelopeempty from '../../assets/envelope-empty.svg';
import Createpost from "./CreatePost";
import Groups from "../Group/Groups";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    const array = await getPosts();
    setPosts(array[1]);
  };

 
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
    <div className="posts">
     {posts.map((post) => {
        return(
            <div className="post">
            <h3>{post.sender_student}</h3>
            <p>{post.timestamp}</p>
             <p>{post.target_student}</p>
             <p>{post.target_alumniEvent}</p>
             <p>{post.target_alumniGroup}</p>
             <p>{post.target_topic}</p>
             <p>{post.reply_post}</p>
             <p>{post.replies}</p>
             <p>{post._private}</p>
                
                
            <p>{post.content}</p>
            <div className="posts">
            </div>

            </div>
        )
     })}

    </div></div>
  );
}
