// this is Bandform {component} in Larry's branch

import React from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
//import background from "../Assets/img/instruments.jpg";

// const backgroundHead = {
//   backgroundImage: "url(" + background + ")"
// };
// Using the datalist element we can create autofill suggestions based on the props.breeds array
const BandForm = props => (
  <Card className="formMusicians">
    <Card.Header>Bands</Card.Header>
    <Card.Body>
      <Card.Title>Band Search</Card.Title>
      <Card.Text />
      <Form.Row className="formBand">
        <Form.Group as={Col} controlId="formCounty">
          <Form.Label>County</Form.Label>
          <Form.Control
            as="select"
            name="county"
            //
            // was
            // value={props.county}
            // try below
            value={this.state.county}
            //
            placeholder="County"
            //
            // was
            // onChange={props.handleChange}
            // try below 
            onChange={this.handleChange}
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