
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPostAction } from "../store/NotUsed/actions/PostActions";



import "../styles/Timeline.scss";





export const CreatePost = (props) => {

    
    const [title, setTitle] = useState('');
    const [showTitle, setShowTitle] = useState(false);
    const [description, setdescription] = useState ('');
    const [showDescription, setShowDescription ]= useState (false);
    

    const dispatch = useDispatch();

    function onCreatePost(e){
      e.preventDefault();
        const postData= {
          title,
          description,
        };

    dispatch(createPostAction(postData, props.history));
  

    }

    function handleSubmit(e) {
      e.preventDefault();
      setShowTitle(true);
    }

    function handlePreview(e) {
        e.preventDefault();
        setShowDescription(true);
      }

    return(      
     


      <div className="flex align-items-center justify-between my-4">
        <div>
          <h2>Create Post
          </h2>
          <div>
            
          </div>
        </div>

      <form onSubmit={onCreatePost}>
        <label>Title:</label>
        <input type="text" className="border border-gray-500" name="Title" value={title} 
          onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>

        <label>Description</label>
          <div>
            <textarea className="border border-gray-500" name="Title" />
          </div>
          <input
          type="submit"
          className="px 2 py-1 bg-red-500 text-white"
          value={description}
          onChange={(e) => 
            setdescription(e.target.value) } 
            />
 
        <button onClick={onCreatePost} type="submit">
          create
        </button>

        <button onClick={handlePreview} type="submit">
          preview
        </button>
      </form>
      {/* Checks the condition if showName is 
      true, which will be true only if 
      we click on the submit button */
    
    }
      {showTitle === true && 
      <p>You have submitted. Title: {title}</p>}
        {showDescription === true && 
      <p>Your preview: {description}</p>}
     </div>
      
    )
           
    }
   