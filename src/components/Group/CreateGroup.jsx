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

    const [createGroupTitle, setCreateGroupTitle] = useState([]);
    const [createGroupDesc, setCreateGroupDesc] = useState([]);
    const [createGroupPrivate, setCreateGroupPrivate] = useState(false);

  const CreateGroupInDB = async () => {


    try {
          const response = await fetch(apiUrl, {
              method: 'POST',
              headers: createHeaders(),
              body: JSON.stringify({
                name: "Experisgruppen",
                description: "Manpower",
                get_private: false
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
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Check 
        type="switch"
        id="custom-switch"
        label="Private"
      />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={CreateGroupInDB}>
            Create group
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
}
