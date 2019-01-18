import React from "react"
import "./concertCard.css"

// look at pupster

const concertCard = props => (
    <ul className="Card">
    {props.results.map(result => (
      <li key={result.id} className="list-group-item">
        <h2>{result.displayName}</h2> 
        <h4>Link:</h4><a href={result.uri} target="_blank">{result.uri}</a>
      </li>
    ))}
  </ul>
)

export default concertCard