// The page for Bands in Town API concert Information... or SongKick

// I guess the idea would be to have someone search for concerts by city and state
// returns an object w/ venue name and whatever else you can find thats somewhat relevant
// restrict to only future concerts

// imports
import React, { Component } from "react"
import Navbar from "../../components/Navbar"
import Wrapper from "../../components/Wrapper/wrapper"
import axios from "axios"
import "./concerts.css"
import { Card, Button, Form, Col } from "react-bootstrap";

// get route after the person has given search criteria



// post route to populate the page with info on each concert



// set up the component... you might need to fuck with state
// let search = value of dropdown box
class Concerts extends Component {
    
    componentDidMount(){
        axios.get("https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}")
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <Navbar />
        <Wrapper>
        <Card className="formConcerts">
        <Card.Header>Concerts</Card.Header>
        <Card.Body>
          <Card.Title>Search for an Event</Card.Title>
          <Card.Text />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
                {/* We'll use metro_area_id */}
              <Form.Label>City</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Cleveland</option>
                <option>Columbus</option>
                <option>Cincinnati</option>
                <option>Chicago</option>
                <option>Detroit</option>
                <option>Pittsburgh</option>
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
        {/* populate with results like in cardGame HW */}
      </Card>
      </Wrapper>
            </div>
        )
    }
}


// export default
export default Concerts