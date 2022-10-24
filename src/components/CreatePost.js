import React from "react";
import { useState } from "react";
import axios from "../api";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Timeline.scss";

const url = "https://alumni-case-database.herokuapp.com/api/v1/";


export default function Createpost({setUpdate, type, id, location, username}) {
  const [names, setNames] = useState([]);
  const [DM, setDM] = useState(false);
  const [reciever, setReciever] = useState([]);
  const [recieverName, setRecieverName] = useState([]);

  function handleReciever(uid, name){
    setReciever(uid);
    setRecieverName(name);
    setNames([]);
  }


  const getAllStudents = async () => {
    const response = await axios.get(`${url}student`)
    setNames(response.data)
    if(response.status !== 200){
      console.log(response)
    }
    return response.data
  };

  const handleDM =  async () => {
    if (type === "addDMPost"){
      setDM(true);
      await getAllStudents();
    }
  }
  
  const [createPost, setCreatePost] = useState({
    title: "",
    content: ""
  
  });
  const CreatePostInDB = async () => {
    if (type === "addDMPost"){
      console.log("ID: "+id);
      console.log("Reciever: "+reciever);
      id = reciever;
      console.log("ID: "+id);
    }
    console.log("ID: "+id);
    const response = await axios.post(`${url}post/${id}/${type}`, {
      ...createPost,
    creator_student: username,
    timestamp: Date.now(),
    post_location: location
     })

    if(response.status !== 201){
      console.log(response)
    }
    return response.data
  };
  

  const handleChange = (event) => {
    setCreatePost({ ...createPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCreatePost({
      title: "",
      content: "",
      creator_student: "",
      post_location: "",
      timestamp: ""
      })
    await CreatePostInDB();
    handleClose();
    setUpdate(1);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    
    setShow(false);
    setNames([]);
    setReciever([]);
    setRecieverName([]);
  }
  const handleShow = () => setShow(true);

  return (
    <div>
      <button onClick={handleShow} type="button" class="btn btn-light mt-4">
      { (type==="addDMPost") ? <div>New DM... </div> : <div >Create new post in {location}...</div>}
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          { (type==="addDMPost") ?<Modal.Title >DM {recieverName}</Modal.Title> : <Modal.Title >Create new post in {location}</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={createPost.title}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={createPost.content}
                onChange={handleChange}
                name="content"
                rows={3}
              />
            </Form.Group >
            <Form.Group >
              { (type==="addDMPost") ? (
            <Button variant="secondary" onClick={handleDM} >Set reciever</Button>) : (<p></p>)}
          <div className="namelist">
          {names.map((name) => {
        return(
          <div className="names">
              <p key={name.id} onClick={() => handleReciever(name.id, name.name)}>{name.name}</p>
            </div>
        )})}
          </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
          { (type==="addDMPost") ? <div> Send </div> : <div >Create post </div>}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );}