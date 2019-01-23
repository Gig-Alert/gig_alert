import React from "react";
import Navbar from "../components/Navbar";
import { Jumbotron, Container, Nav, Card, Row } from "react-bootstrap";
import bandImage from "../Assets/img/studio-band.jpg";
import soloImage from "../Assets/img/solo.jpeg";
import "./homes.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Jumbotron fluid> */}
      <Container>
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
        <h1>Maybe here we can describe the app... how it should work anyway</h1>
        {/* <h1>Are you a</h1>
          <Nav variant="tabs" defaultActiveKey="/bands">
            <Nav.Item>
              <Nav.Link href="/bands">Band</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/musicians">Musician</Nav.Link>
            </Nav.Item>
          </Nav> */}
      </Container>
      {/* </Jumbotron> */}
    </div>
  );
};

export default Home;
