import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Form, Col, Button } from "react-bootstrap";
import "./bands.css";
import axios from "axios";


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

    const { bands, email, date, type, county } = this.state;
    if (!bands || !email || !date || !type || !county) return;

    axios
      .post("/api/bands", this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });

    this.setState({
      bands: "",
      email: "",
      date: "",
      type: "",
      county: ""})
  };

  render() {
    return (
      <div>
    <Navbar />
      {/* // <div className="container"> */}
        
        <Form className="formBand">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Band Name</Form.Label>
              <Form.Control
                type="text"
                name="bands"
                value={this.state.bands}
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
                value={this.state.email}
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
                value={this.state.date}
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
                value={this.state.type}
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
                value={this.state.county}
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
