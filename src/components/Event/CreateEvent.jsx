import React from "react";
import "../../styles/Events.scss";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { currentuser } from "../UserHandler";
import { createHeaders } from "../../api";

export default function Createevent({setUpdate}) {

  const [createEvent, setCreateEvent] = useState({
    title: "",
    description: "",
    start: "",
    end: ""
  });
  

const CreateEventInDB = async () => {
/*              start_time: startDate,
              end_time: endDate*/
  try {
        const response = await fetch(`https://alumni-case-database.herokuapp.com/api/v1/alumniEvent/${currentuser.id}/addAlumniEvent`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
              name: createEvent.title,
              description: createEvent.description,
              start_time: startDate,
              end_time: endDate
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
    setCreateEvent({ ...createEvent, [event.target.name]:event.target.value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCreateEvent({
    title: "",
    description: ""

    })

    await CreateEventInDB();
    handleClose();
    setUpdate(1);
  };

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
  
    <div>
        <button className="plusbutton" onClick={handleShow}>+</button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                autoFocus
                name= "title"
                value={createEvent.title}
              />
            </Form.Group>
            <Form.Label>Start time</Form.Label>
            <Form.Group className="mb-3">
            <DatePicker className="datepicker" name="start" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" />
            <Form.Label>End time</Form.Label>
            <DatePicker className="datepicker" name="end" selected={endDate} onChange={(date) => setEndDate(date)} showTimeSelect dateFormat="Pp" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} value={createEvent.description}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Create event
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
}
