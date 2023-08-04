import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  return (
    <header>
      <h1>#Todo</h1>
      <div className="Nav">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h3>All</h3>
        </Link>
        <Link to="/active" style={{ textDecoration: "none", color: "black" }}>
          <h3>Active</h3>
        </Link>
        <Link
          to="/completed"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h3>Completed</h3>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
