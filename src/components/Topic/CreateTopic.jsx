import React from "react";
import "../../styles/Groups.scss";
import { useState } from "react";
import axios, { createHeaders } from "../../api/index";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { currentuser } from "../UserHandler";
const apiUrl = 'https://alumni-case-database.herokuapp.com/api/v1/topics';


export default function Createtopic() {

  
  const [createTopic, setCreateTopic] = useState({
    title: "",
    description: ""
  });
  
const CreateTopicInDB = async () => {


  /**const response = await fetch(`${apiUrl}?token=${keycloak.token}`, { */
  try {
        const response = await fetch(`${apiUrl}/${currentuser.id}/addAlumniTopic`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
              name: createTopic.title,
              description: createTopic.description
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
    setCreateTopic({ ...createTopic, [event.target.name]:event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCreateTopic({
    title: "",
    description: "",
    _private: false
    })
    console.log(createTopic);
    CreateTopicInDB();
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
        <Modal.Title>Create new topic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={createTopic.title}
              autoFocus
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" value={createTopic.description} onChange={handleChange} name="description" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="secondary" onClick={handleSubmit}>
          Create topic
        </Button>
      </Modal.Footer>
      </Modal>
  </div>
);
}
