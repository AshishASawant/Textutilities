import React from "react";
import PropTypes from "prop-types";
import {Link}  from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-light navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
    </div>
      <div className="form-check form-switch">
         <input
             className="form-check-input"
            type="checkbox"
            role="switch"
            onClick={props.toogleswitch}
             id="flexSwitchCheckDefault"
           />
          <label className={`form-check-label text-${props.mode==="light"?"black":"white"}`} htmlFor="flexSwitchCheckDefault">
             Dark Mode
           </label>
         </div>
  </div>
</nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };
// Navbar.defaultProps={title:'Add title'}
