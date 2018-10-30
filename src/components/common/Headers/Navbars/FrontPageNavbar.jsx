import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/logo.png';

const FrontPageNavbarComponent = () => (
  <nav className="navbar " role="navigation">
    <div className="navbar__header">
      <span className="js__navbar__toggler">&#9776; </span>
      <Link to="/" className="navbar__brand">
        <img src={logo} alt="Ride my way logo" srcSet="" />
      </Link>
    </div>
    <div className="collapse navbar__collapse">
      <Link to="/" className="closebtn js__navbar__toggler">&times;</Link>
      <ul className="nav navbar__right navbar__nav">
        <li>
          <a href="/#howitworks">How it works</a>
        </li>
        <li>
          <a href="/#benefits">Benefits</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="btn btn--secondary btn--round sticky--sign--up" href="createaccount.html">Sign Up</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default FrontPageNavbarComponent;
