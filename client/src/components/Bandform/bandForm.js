import React from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import './bandForm.css'
//import background from "../Assets/img/instruments.jpg";

// const backgroundHead = {
//   backgroundImage: "url(" + background + ")"
// };
// Using the datalist element we can create autofill suggestions based on the props.breeds array
const BandForm = props => (
  <Card className="formMusicians">
    <Card.Header>Band Search by County</Card.Header>
    <Card.Body className="musicianBG">
      {/* <Card.Title>Band Search</Card.Title> */}
      <Card.Text />
      <Form.Row className="formBand">
        <Form.Group as={Col} controlId="formCounty">
          <Form.Label>County</Form.Label>
          <Form.Control
            as="select"
            name="county"
            value={props.county}
            placeholder="County"
            onChange={props.handleChange}
          >
            <option>Choose...</option>
            <option>Cuyahoga</option>
            <option>Summit</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Button onClick={props.handleSubmit} variant="primary" type="button">
        Submit
      </Button>
    </Card.Body>
  </Card>
);

export default BandForm;
