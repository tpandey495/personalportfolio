import React from "react";
import {  Row ,Col} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'styles/Contact.css';
import { useForm } from '@formspree/react';

function ResumeNew() {
const [state, handleSubmit] = useForm("xyyaozve");


if (state.succeeded) 
  return <div style={{marginTop:"100px",marginBottom:"50px",color:"white"}}>Thanks for Contacting.Get back to you ASAP</div>;


return (
  <>
  <Form className="contact" onSubmit={handleSubmit}>
  <Row>
   <Col>
  <Form.Group className=" mb-3">
    <Form.Label>Name </Form.Label>
    <Form.Control className="input" type="text" placeholder="Name" id="name" name="name"/>
  </Form.Group>
  </Col>

   <Col>
  <Form.Group className="mb-5">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email"  id="email" name="email"/>
  </Form.Group>
  </Col>
  </Row>

  <Form.Group className=" mb-5" >
    <Form.Label>Subject</Form.Label>
    <Form.Control className="form-group1" type="" placeholder="Subject" id="sub" name="subject"/>
  </Form.Group>

  <Form.Group className="mb-5">
    <Form.Label>Message</Form.Label>
    <Form.Control className="form-group2" type="" placeholder="Message" id="message" name="Message"/>
  </Form.Group>

  <Button className="mb-5" variant="primary" type="submit" disabled={state.submitting} >
    Submit
  </Button>
</Form>
   
   </>

  );
} 

export default ResumeNew;
