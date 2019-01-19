import React from "react";
import "./concertCard.css";
// const moment = require("moment");
// moment().format();

// look at pupster

const concertCard = props => (
  <ul className="card">
    {props.results.map(result => (
      <li key={result.id} className="list-group-item">
        <h2 className="card-header">{result.displayName}</h2>
        <h4 className="card-body">
          Get Tickets:{" "}
          <a href={result.uri} target="_blank" rel="noopener noreferrer">
            {result.uri}
          </a>
        </h4>
        <h4 className="card-body">Start Time: {result.start.time}</h4>
      </li>
    ))}
  </ul>
);

export default concertCard;
