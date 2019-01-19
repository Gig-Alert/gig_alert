import React from "react";

const Bandcard = props => (
  <ul className="list-group results">
    <h2>Results</h2>

    {props.bands.map(band => (
      <li key={band._id} className="list-group-item">
        <h2 className="card-header">{band.name}</h2>
        <h3>{band.county}</h3>
        <h4>{band.email}</h4>
      </li>
    ))}
  </ul>
);

export default Bandcard;
