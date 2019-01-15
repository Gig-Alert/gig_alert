import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Card, Button, Form, Col } from "react-bootstrap";
import API from "../utils/API";
import "./musicians.css";
import axios from "axios";

class Musicians extends Component {
  state = {
    county: ""
  };
  componentDidMount() {
    this.loadBands();
  }

  loadBands = () => {
    API.getBands()
      .then(res => this.setState({ county: "" }))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { county } = this.state;
    if (!county) return;

    axios
      .get("/api/bands", this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Card className="formMusicians">
          <Card.Header>Bands</Card.Header>
          <Card.Body>
            <Card.Title>Band Search</Card.Title>
            <Card.Text />
            <Form.Row>
              <Form.Group as={Col} controlId="formCounty">
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
          </Card.Body>
        </Card>
        <Card className="results">
          <Card.Body>Results</Card.Body>
        </Card>
      </div>
    );
  }
}
export default Musicians;
