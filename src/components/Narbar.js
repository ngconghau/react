import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Narbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1>React</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </div>
      </nav>
    );
  }
}
