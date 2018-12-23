import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./pages/homes";
import Bands from "./pages/bands";
import Musicians from "./pages/musicians";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Container>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="Bands" component={Bands} />
          <Route exact path="/musicians" component={Musicians} />
        </div>
      </Router>

      <Title>Gig Alert</Title>
    </Container>
  );
};
export default App;
