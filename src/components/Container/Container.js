import React, { Component } from "react";
import Navbar from "../Navbar";

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
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
            label="Gig Alert"
          />
        </div>
      </div>
    );
  }
}

export default Container;
