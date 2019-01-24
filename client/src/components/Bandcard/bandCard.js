import React from "react";
import Moment from "react-moment";

const Bandcard = props => (
  <ul className="card card-header list-group results">
    Results

    {props.bands.map(band => (
      <li key={band._id} className="list-group-item">
        <h2 className="card-header">{band.bands}</h2>
        <h3>{band.email}</h3>
        <h3>
          <Moment format="YYYY/MM/DD">{band.date}</Moment>
        </h3>
        <h3>{band.type}</h3>
        <h3>{band.county}</h3>
      </li>
    ))}
  </ul>
);

export default Bandcard;
