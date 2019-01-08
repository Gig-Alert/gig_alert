import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Form, Col, Button } from "react-bootstrap";
import "./bands.css";

class Bands extends Component {
  state = {
    bands: "",
    email: "",
    date: "",
    type: "",
    county: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Stuff", this.state);
  };
  render() {
    return (
      <div>
        <Navbar />
        <Form className="formBand">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Band Name</Form.Label>
              <Form.Control
                type="text"
                name="bands"
                defaultValue={this.state.bands}
                placeholder="Band Name"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={this.state.email}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formInstrument">
              <Form.Label>Date Needed</Form.Label>
              <Form.Control
                type="date"
                name="date"
                defaultValue={this.state.date}
                placeholder="Date Needed"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formMusician">
              <Form.Label>Musician Needed</Form.Label>
              <Form.Control
                as="select"
                name="type"
                defaultValue={this.state.type}
                placeholder="type"
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                <option>Guitar</option>
                <option>Drummer</option>
                <option>Bass</option>
                <option>Vocals</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>County</Form.Label>
              <Form.Control
                as="select"
                name="county"
                defaultValue={this.state.county}
                placeholder="County"
                onChange={this.handleChange}
              >
                <option>Choose...</option>
                <option>Cuyahoga</option>
                <option>Summit</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button onClick={this.handleSubmit} variant="primary" type="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default Bands;
