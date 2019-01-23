import React, { Component } from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import "./musicians.css";
// import background from "../Assets/img/instruments.jpg";
import Bandcard from "../components/Bandcard/bandCard";
import BandForm from "../components/Bandform/bandForm";

class Musicians extends Component {
  state = {
    county: null,
    bands: []
  };

  loadBands = returnedBandsArray => {
    //  API.getBands()
    //    .then(res => {
    this.setState({
      bands: returnedBandsArray,
      county: ""
    });
    //     })
    //    .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.county) {
      API.getBands(this.state.county)
        .then(res => {
          //console.log(res.data.data);
          //console.log(JSON.parse(res.toArray()));
          this.loadBands(res.data.data);
          //console.log(this.loadBands(res));
          //this.setState({ bands: [res.data.data], county: "" });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <BandForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Bandcard bands={this.state.bands} />
      </div>
    );
  }
}
export default Musicians;
