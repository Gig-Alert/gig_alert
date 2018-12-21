import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./pages/homes";
import Bands from "./pages/bands";
import Musicians from "./pages/musicians";
import Title from "./components/Title";

const App = () => {
  return (
    <Container>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/bands" component={Bands} />
          <Route exact path="/musicians" component={Musicians} />
        </div>
      </Router>

      <Title>Gig Alert</Title>
    </Container>
  );
};
export default App;
