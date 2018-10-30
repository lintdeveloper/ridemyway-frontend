import React from 'react';
import { Link } from 'react-router-dom';


const DashboardNavbarComponent = () => (
  <nav className="navbar  container-fluid" role="navigation">
    <div className="navbar__header dashboard__navbar__header">
      <span className="js__navbar__toggler DashboardColor--primary">&#9776; </span>
      <a href="/" className="navbar__brand">
        <div className="dashboard--logo--wrapper bg--color--primary">
          <img src="assets/img/Group 2.1.png" alt="Ride my way logo" />
        </div>
      </a>
    </div>

    <div className="collapse navbar__collapse dashboard__collapse">
      <a href="/" className="closebtn js__navbar__toggler">&times;</a>
      <ul className="nav navbar__right navbar__nav">
        <li>
          <a href="/">
            <span className="text--color--grey">Hello,</span>
            <span className="text--primary">Joe</span>
          </a>
        </li>
        <li>
          <a href="/" className="notification">
            <span className="notify notify--dot--small" />
            <i className="fas fa-bell text--primary" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default DashboardNavbarComponent;
