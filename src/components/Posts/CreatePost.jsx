import React from "react";
import "../../styles/Events.scss";
import { useState } from "react";
import axios, { createHeaders } from "../../api/index";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "react-datepicker/dist/react-datepicker.css";

const apiUrl = 'https://alumni-case-database.herokuapp.com/api/v1/post'

export default function Createpost() {

    const [createPost, setCreatePost] = useState({
      timestamp: "",
      content: "",
      sender_student: "",
      target_student: "",
      target_alumniEvent: "",
      target_alumniGroup: "",
      target_topic: "",
      reply_post: "",
      replies:"",

      _private: false
    });
    

  const CreatePostInDB = async () => {


    /**const response = await fetch(`${apiUrl}?token=${keycloak.token}`, { */
    try {
          const response = await fetch(`${apiUrl}?token=abcdefghijklmnopqrstuvwxyz`, {
              method: 'POST',
              headers: createHeaders(),
              body: JSON.stringify({
                timestamp: createPost.timestamp,
                content: createPost.content,
                sender_student: createPost.sender_student,
                target_student: createPost.target_student,
                target_alumniEvent: createPost.target_alumniEvent,
                target_alumniGroup: createPost.target_alumniGroup,
                target_topic: createPost.target_topic,
                reply_post: createPost.reply_post,
                replies: createPost.replies,
                _private: createPost._private
              })
          });
    
          const data = await response.json();
          //return user object
          handleClose();
          return data;
    
      } catch (error) {
          return error.message;
      }
    } 

    const handleChange = (event) => {
      setCreatePost({ ...createPost, [event.target.name]:event.target.value});
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setCreatePost({
        timestamp: "",
        content: "",
        sender_student: "",
        target_student: "",
        target_alumniEvent: "",
        target_alumniGroup: "",
        target_topic: "",
        reply_post: "",
        replies:"",
        _private: false
      })
      console.log(createPost);
      CreatePostInDB();
      handleClose();
    };
    

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   
    <div>
        <button className="plusbutton" onClick={handleShow}>+</button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Post className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>timestamp</Form.Label>
              <Form.Control
                type="text"
                name="timestamp"
                value={createPost.timestamp}
                autoFocus
                onChange={handleChange}
              />
            </Form.Post>
            <Form.Post className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>sender_student</Form.Label>
              <Form.Control
                type="text"
                name="sender_student"
                value={createPost.sender_student}
                autoFocus
                onChange={handleChange}
              />
            </Form.Post><Form.Post className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>target_student</Form.Label>
              <Form.Control
                type="text"
                name="target_student"
                value={createPost.target_student}
                autoFocus
                onChange={handleChange}
              />
            </Form.Post><Form.Post className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>target_alumniEvent</Form.Label>
              <Form.Control
                type="text"
                name="target_alumniEvent"
                value={createPost.target_alumniEvent}
                autoFocus
                onChange={handleChange}
              />
            </Form.Post><Form.Post className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>target_alumniGroup</Form.Label>
              <Form.Control
                type="text"
                name="target_alumniGroup"
                value={createPost.target_alumniGroup}
                autoFocus
                onChange={handleChange}
              />
            </Form.Post><Form.Post className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>target_topic</Form.Label>
              <Form.Control
                type="text"
                name="target_topic"
                value={createPost.target_topic}
                autoFocus
                onChange={handleChange}
              />
               </Form.Post><Form.Post className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>reply_post</Form.Label>
              <Form.Control
                type="text"
                name="reply_post"
                value={createPost.reply_post}
                autoFocus
                onChange={handleChange}
              /> 
              </Form.Post><Form.Post className="mb-3" controlId="exampleForm.ControlInput8">
              <Form.Label>replies</Form.Label>
              <Form.Control
                type="text"
                name="replies"
                value={createPost.replies}
                autoFocus
                onChange={handleChange}
              />
            </Form.Post>
            <Form.Post
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control 
              as="textarea" 
              value={createPost.content} 
              onChange={handleChange}
              name="content" rows={3} />
            </Form.Post>
            <Form.Check 
             type="switch"
             name="private"
             id="checkbox"
             label="Private"
             onChange={(e) => {setCreatePost((state) => ({...state, _private: e.target.checked}))}} />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Create Post
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
}
