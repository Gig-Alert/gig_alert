import React, { Component } from "react";
import Navbar from "../components/Navbar";
// import { Card, Button, Form, Col } from "react-bootstrap";
import API from "../utils/API";
import "./musicians.css";
// import axios from "axios";
// import background from "../Assets/img/instruments.jpg";
import Bandcard from "../components/Bandcard/bandCard";
import BandForm from "../components/Bandform/bandForm";

class Musicians extends Component {
  state = {
    county: "",
    bands: []
  };

  // componentDidMount() {
  //   this.loadBands();
  // }

  loadBands = () => {
    API.getBands()
      .then(res => {
        this.setState({
          bands: res.data.data,
          county: ""
        });
        console.log(this.state.county);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // const { county, value } = e.target;
    // this.setState({
    //   [county]: value
    // });
    console.log(e.target.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.county) {
      API.getBands(this.state.county)
        .then(res => {
          this.loadBands(this.state.county);
          console.log(this.state.bands);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* <Card className="formMusicians" style={backgroundHead}>
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
        </Card> */}
        <BandForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Bandcard bands={this.state.bands} />
      </div>
    );
  }
}
export default Musicians;
