import React from "react";
import "./concertCard.css";
import Moment from 'react-moment'

// look at pupster

const concertCard = props => (
  <ul className="card">
    {props.results.map(result => (
      <li key={result.id} className="list-group-item">
        <h2 className="card-header">{result.displayName}</h2>
        <h4 className="card-body"><a className="concertLink" href={result.uri} target="_blank" rel="noopener noreferrer">Get Tickets</a></h4>
        <h4 className="card-body">
          Start Time: 
          <Moment format="YYYY/MM/DD, hh:mm A">
          {result.start.datetime}
          </Moment>
          </h4>
      </li>
    ))}
  </ul>
);

export default concertCard;
