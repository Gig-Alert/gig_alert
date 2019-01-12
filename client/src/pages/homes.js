import React from "react";
import Navbar from "../components/Navbar";
import { Jumbotron, Container, Nav } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron fluid>
        <Container>
          <h1>Are you a</h1>
          <Nav variant="tabs" defaultActiveKey="/bands">
            <Nav.Item>
              <Nav.Link href="/bands">Band</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/musicians">Musician</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
