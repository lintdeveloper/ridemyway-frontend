import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'images//Group 2.1.png';


const DashboardNavbarComponent = () => (
  <nav className="navbar  container-fluid" role="navigation">
    <div className="navbar__header dashboard__navbar__header">
      <span className="js__navbar__toggler DashboardColor--primary" style={{ fontSize: '30px', cursor: 'pointer' }}>&#9776; </span>
      <Link to="index.html" className="navbar__brand">
        <div className="dashboard--logo--wrapper bg--color--primary">
          <img src={logo} alt="Ride my way logo" />
        </div>
      </Link>
    </div>

    <div className="collapse navbar__collapse dashboard__collapse">
      <Link to=":javascriptvoid(0)" className="closebtn js__navbar__toggler">&times;</Link>
      <ul className="nav navbar__right navbar__nav">
        <li>
          <div className="DropDown">
            <Link to="#" className="DropDown__btn">
              <span className="text--color--grey">Hello,</span>
              <span className="text--primary js__ProfileFirstName">Joe</span>
            </Link>
            <div className="DropDown__content">
              <Link to="profile.html" className="DashboardColor--text--grey js__ProfileLink">
                <i className="fas fa-user text--primary" />
                {' '}
Profile

              </Link>
              <Link to="signin.html" className="DashboardColor--text--grey js__logout">
                <i className="fas fa-sign-out-alt text--primary" />
logout

              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="DropDown">
            <Link to="#" className="DropDown__btn notification">
              <span className="notify notify--dot--small" />
              <i className="fas fa-bell text--primary" />
            </Link>
            <div className="DropDown__content notification__content">
              <Link to="riderequest.html" className="DashboardColor--text--grey">
                      2 new ride requests

              </Link>
              <Link to="riderequest.html" className="DashboardColor--text--grey">
                      joeeasy wants to join you

              </Link>
            </div>
          </div>

        </li>
      </ul>
    </div>
  </nav>
);

export default DashboardNavbarComponent;
