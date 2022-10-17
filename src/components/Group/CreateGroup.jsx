import React from "react";
import keycloak from "../../keycloak/keycloak";
import { useEffect, useState } from 'react';
import axios, { createHeaders } from "../../api/index";
import "../../styles/Groups.scss";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const apiUrl = 'https://alumni-case-database.herokuapp.com/api/v1/alumnigroup'

export default function Creategroup() {

  const [privateMode, setPrivate] = useState(false);
    const handlePrivate = () => {
      setPrivate(current => !current);
    }
    const [createGroup, setCreateGroup] = useState({
      title: "",
      description: "",
      get_private: privateMode
    });
    

  const CreateGroupInDB = async () => {


    /**const response = await fetch(`${apiUrl}?token=${keycloak.token}`, { */
    try {
          const response = await fetch(`${apiUrl}?token=abcdefghijklmnopqrstuvwxyz`, {
              method: 'POST',
              headers: createHeaders(),
              body: JSON.stringify({
                name: createGroup.title,
                description: createGroup.description,
                get_private: privateMode
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
      setCreateGroup({ ...createGroup, [event.target.name]:event.target.value});
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setCreateGroup({
      title: "",
      description: "",
      get_private:privateMode
      })
      console.log(createGroup);
      CreateGroupInDB();
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
          <Modal.Title>Create new group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={createGroup.title}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" value={createGroup.description} onChange={handleChange} name="description" rows={3} />
            </Form.Group>
            <Form.Check 
        type="switch"
        name="private"
        id="checkbox"
        label="Private"
        value={privateMode}
        onChange={handlePrivate}
        
      />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Create group
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
}