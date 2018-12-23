import React, { Component } from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";

class Container extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <div>
          <Navbar
            className="navbar navbar-expand-lg navbar-dark bg-primary"
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
            label="Gig Alert"
          />

          <Jumbotron />
        </div>
      </div>
    );
  }
}

export default Container;
