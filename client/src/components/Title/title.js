import React from "react";
import "./title.css";

const Title = props => (
  <h1 className="title animated swing infinite slower">{props.name}</h1>
);

export default Title;
