import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/pages/homes";
import Bands from "./components/pages/bands";
import Musicians from "./components/pages/musicians";
import Search from "./components/pages/search";
import Title from "./components/Title";

const App = () => {
  return (
    <Container>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/bands" component={Bands} />
          <Route exact path="/musicians" component={Musicians} />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>

      <Title>Gig Alert</Title>
    </Container>
  );
};
export default App;
