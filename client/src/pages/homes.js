import React from "react";
import Navbar from "../components/Navbar";
import { Container, Nav, Card, Row } from "react-bootstrap";
import bandImage from "../Assets/img/studio-band.jpg";
import soloImage from "../Assets/img/solo.jpeg";
import "./homes.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Card className="about">
            <Card.Header>
              About Our App
            </Card.Header>
            <Card.Body>
             <h1 className="aboutHead">Gig Alert</h1> 
             <br></br>
             <p className="aboutP">Gig Alert is a way for local artists and musicians to connect with one another!</p>
             <p className="aboutP">Are you in a band, but one of your members can't make a show you've booked? Or are you new in town and just looking for new people to jam with? You can fill out our band form, which will then get posted to our database for local musicians to see.</p>
             <p className="aboutP">If they fit your criteria, they can send you an email and you can get together to make music!</p>
             <p className="aboutP">In addition to finding new people to play with and finding a last minute replacement musician for your band, you can also search for upcoming concerts! Currently, we 
               support Cleveland, Columbus, Cincinnati, Chicago, Detroit, and Pittsburgh events.  
             </p>

            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="buffer-left">
            <Card.Header>Bands</Card.Header>
            <Card.Body className="homebody">
              <img alt="band" src={bandImage} />
              <Nav.Item>
                <Nav.Link className="special-link" href="/bands">
                  Go to Band Page
                </Nav.Link>
              </Nav.Item>
            </Card.Body>
          </Card>
          <Card className="buffer-right">
            <Card.Header>Solo Artists</Card.Header>
            <Card.Body className="homebody">
              <img alt="solo" src={soloImage} />
              <Nav.Item>
                <Nav.Link className="special-link" href="/musicians">
                  Go to Musicians Page
                </Nav.Link>
              </Nav.Item>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
