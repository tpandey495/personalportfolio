import React from "react";
import {  Row ,Col} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css';
import {useState} from 'react';

function ResumeNew() {
const [status, setStatus] = useState("Submit");

const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email,sub, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      sub:sub.value,
      message: message.value,
    };
    let response = await fetch("https://tarunpandey.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
};

return (
  <>
  <Form className="contact" onSubmit={handleSubmit}>
  <Row>
   <Col>
  <Form.Group className=" mb-3">
    <Form.Label>Name </Form.Label>
    <Form.Control className="input" type="text" placeholder="Name" id="name" />
  </Form.Group>
  </Col>

   <Col>
  <Form.Group className="mb-5">
    <Form.Label>Email</Form.Label>
    <Form.Control type="" placeholder="Email"  id="email"/>
  </Form.Group>
  </Col>
  </Row>

  <Form.Group className=" mb-5" >
    <Form.Label>Subject</Form.Label>
    <Form.Control className="form-group1" type="" placeholder="Subject" id="sub"/>
  </Form.Group>

  <Form.Group className="mb-5">
    <Form.Label>Message</Form.Label>
    <Form.Control className="form-group2" type="" placeholder="Message" id="message"/>
  </Form.Group>

  <Button className="mb-5" variant="primary" type="submit" >
    Submit
  </Button>
</Form>
   
   </>

  );
} 

export default ResumeNew;
