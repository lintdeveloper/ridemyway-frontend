import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeaderContent = () => (
  <div className="dashboard__header__bottom bg--color--primary">
    <div className="container-fluid">
      <ul className="nav navbar__right navbar__nav">
        <li>
          <Link to="/dashboard/summary" className="active">
                  Summary
            <hr className="active--indicator" />
          </Link>
        </li>
        <li>
          <Link to="/dashboard/rides" className="notification">
                  Ride Offers
            <hr className="active--indicator" />
          </Link>
        </li>
        <li>
          <Link to="riderequest.html">
                  Ride Requests
            <hr className="active--indicator" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default DashboardHeaderContent;
