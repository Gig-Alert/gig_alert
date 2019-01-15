import React from "react";
import GigNav from "../components/Navbar";
import { Jumbotron, Container, Nav } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <GigNav />
      <Jumbotron fluid>
        <Container>
          <h1>Are you a</h1>
          <Nav className="homeNav" variant="tabs" defaultActiveKey="/bands">
            <Nav.Item>
              <Nav.Link href="/bands">Band</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/musicians">Musician</Nav.Link>
            </Nav.Item>
            {/* link to new Concert information page */}
          </Nav>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
