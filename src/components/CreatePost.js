import React from "react";
import { useState } from "react";
import createHeaders from "../api/index";
import axios from "../api";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const url = "https://alumni-case-database.herokuapp.com/api/v1/";


export default function Createpost({setUpdate, type, id}) {


  const [createPost, setCreatePost] = useState({
    title: "hei",
    content: "gie"
  });
  const CreatePostInDB = async () => {
    const response = await axios.post(`${url}post/${id}/${type}`, createPost)
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
      content: ""
    });
    await CreatePostInDB();
    handleClose();
    setUpdate(1);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button onClick={handleShow} type="button" class="btn btn-light mt-4">
        Create post...
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new post</Modal.Title>
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
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Create post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );}