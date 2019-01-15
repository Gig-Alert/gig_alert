import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Homes/homes";
import Bands from "./pages/Bands/bands";
import Musicians from "./pages/Musicians/musicians";
import Title from "./components/Title";
// import Login from "./pages/login";
import Signup from "./pages/SignUp/signup";
import Concerts from "./pages/Concerts/concerts"

const App = () => {
  return (
    <Router>
      <div>
        <Title name="Gig Alert" />
        <Route exact path="/" component={Home} />
        {/* <Route path="/homes" component={Home} /> */}
        <Route path="/bands" component={Bands} />
        <Route path="/musicians" component={Musicians} />
        <Route path="/signup" component={Signup} />
        <Route path="/concerts" component={Concerts} />
      </div>
    </Router>
  );
};
export default App;
