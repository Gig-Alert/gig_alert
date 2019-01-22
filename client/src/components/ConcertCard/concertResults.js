import React from "react"
import "./concertCard.css"

const concertCard = props => (
    <ul className="card">
    {props.results.map(result => (
      <li key={result.id} className="list-group-item">
        <h2 className="card-header">{result.displayName}</h2> 
        <h4 className="card-body"><a href={result.uri} target="_blank" rel="noopener noreferrer">Get Tickets</a></h4>
        <h4 className="card-body">Start Time: {result.start.time}</h4>
      </li>
    ))}
  </ul>
)

export default concertCard