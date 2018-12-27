import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Container from "./components/Container";
import Home from "./pages/homes";
import Bands from "./pages/bands";
import Musicians from "./pages/musicians";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/homes" component={Home} />
        <Route path="/bands" component={Bands} />
        <Route path="/musicians" component={Musicians} />
        <Title name="Gig Alert" />
        <Navbar />
      </div>
    </Router>
  );
};
export default App;
