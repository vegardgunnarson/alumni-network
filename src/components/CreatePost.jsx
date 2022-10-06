import React from "react";



import "../styles/Timeline.scss";

import Posts from "./Posts/Posts";



export const CreatePost = () => {

    /*
    const [title, setTitle] = useState('');
    const [showTitle, setShowTitle] = useState(false);
    const [bodytekst, setBodyTekst] = useState ('');
    const [showBodyTekst, setShowBodyTekst] = useState(false);
    
    function handleSubmit(e) {
      e.preventDefault();
      setShowTitle(true);
    }

    function handlePreview(e) {
        e.preventDefault();
        setShowBodyTekst(true);
      }
*/
    return( 
        <div className="container px-3 mx-auto">
          <Posts/>
        </div>


    /*
       <div className="CreatePost">
        <h1>
  Hello, <em>world</em>!
</h1>
      <form>
        <label>Title:</label>
        <input name="Title" value={title} 
          onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>

        <label>your post:</label>
        <input name="Title" value={bodytekst} 
          onChange={(e) => setBodyTekst(e.target.value)} />
        <button onClick={handlePreview} type="submit">
          preview
        </button>
      </form>
      {/* Checks the condition if showName is 
      true, which will be true only if 
      we click on the submit button */
    
    /*}
      {showTitle === true && 
      <p>You have submitted. Title: {title}</p>}
        {showBodyTekst === true && 
      <p>Your preview: {bodytekst}</p>}
     </div>
      */
    )
           
    }
   