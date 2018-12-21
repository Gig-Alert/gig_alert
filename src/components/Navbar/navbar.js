import React from "react";
import "./navbar.css";

const Navbar = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <button>
        onClick={() => props.handlePageChange("Home")}
        className=
        {props.currentPage === "Home" ? "nav-link active" : "nav-link"}
      </button>
      {props.label}
    </li>
    <a>Band Stuff</a>
  </ul>
);

export default Navbar;
