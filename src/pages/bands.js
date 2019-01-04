import React from "react";
import Navbar from "../components/Navbar";
import { Form, Col, Button } from "react-bootstrap";
import "./bands.css";

const Bands = () => {
  return (
    <div>
      <Navbar />
      <Form className="formBand">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Band Name</Form.Label>
            <Form.Control type="name" placeholder="Band Name" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formInstrument">
          <Form.Label>Date Needed</Form.Label>
          <Form.Control placeholder="Date Needed" />
        </Form.Group>

        <Form.Group as={Col} controlId="formMusician">
          <Form.Label>Musician Needed</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
            <option>Guitar</option>
            <option>Drummer</option>
            <option>Bass</option>
            <option>Vocals</option>
          </Form.Control>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>County</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>Cuyahoga</option>
              <option>Summit</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>Ohio</option>
              <option>Michigan</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Bands;
