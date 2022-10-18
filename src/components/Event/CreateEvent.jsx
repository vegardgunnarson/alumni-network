import React from "react";
import "../../styles/Events.scss";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Createevent() {

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
                autoFocus
                id="hei"
              />
            </Form.Group>
            <Form.Label>Start time</Form.Label>
            <Form.Group className="mb-3">
            <DatePicker className="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" />
            <Form.Label>End time</Form.Label>
            <DatePicker className="datepicker" selected={endDate} onChange={(date) => setEndDate(date)} showTimeSelect dateFormat="Pp" />
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
          <Button variant="secondary" onClick={handleClose}>
            Create event
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
}
