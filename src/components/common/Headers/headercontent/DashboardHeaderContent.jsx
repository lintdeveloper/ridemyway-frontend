import React from 'react';

const DashboardHeaderContent = () => (
  <div className="dashboard__header__bottom bg--color--primary">
    <div className="container-fluid">
      <ul className="nav navbar__right navbar__nav">
        <li>
          <a href="summary.html" className="active">
                  Summary
            <hr className="active--indicator" />
          </a>
        </li>
        <li>
          <a href="rideoffers.html" className="notification">
                  Ride Offers
            <hr className="active--indicator" />
          </a>
        </li>
        <li>
          <a href="riderequest.html">
                  Ride Requests
            <hr className="active--indicator" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default DashboardHeaderContent;
