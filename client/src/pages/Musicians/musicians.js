import React from "react";
import Navbar from "../../components/Navbar";
import { Card, Button, Form, Col } from "react-bootstrap";
import "./musicians.css";

const Musicians = () => {
  return (
    <div>
      <Navbar />
      <Card className="formMusicians">
        <Card.Header>Bands</Card.Header>
        <Card.Body>
          <Card.Title>Band Search</Card.Title>
          <Card.Text />
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
        </Card.Body>
      </Card>
      <Card className="results">
        <Card.Body>Results</Card.Body>
      </Card>
    </div>
  );
};
export default Musicians;
