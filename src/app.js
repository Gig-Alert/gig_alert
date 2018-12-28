import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/homes";
import Bands from "./pages/bands";
import Musicians from "./pages/musicians";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <div>
        <Title name="Gig Alert" />
        <Navbar />
        <Route path="/homes" component={Home} />
        <Route path="/bands" component={Bands} />
        <Route path="/musicians" component={Musicians} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
};
export default App;
