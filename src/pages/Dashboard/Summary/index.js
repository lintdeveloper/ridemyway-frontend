import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';


const Summary = props => (
  <div className="wrapper dashboard--bg--grey">
    <DashboardHeader />
    <div className="container-fluid">
      <div className="subheader">
        <h3 className="DashboardColor--text--grey">Dashboard</h3>
        <ul className="nav navbar__nav">
          <li>
            <Link to="/dashboard/summary">
              <i className="fas fa-home" />
            </Link>
          </li>
          <li>-</li>
          <li>
            <Link to="/dashboard/summary">Summary</Link>
          </li>
        </ul>
      </div>
      <div className="dashboard__content">

        <div className="metric light--shadow">
          <div className="divider--three">
            <div className="card__user">
              <img src="assets/img/ME.jpeg" className="card__user__pics" alt="User character" />
            </div>
          </div>
          <div className="divider--three vertical--center">
            <div className="card__user__widget">
              <h3 className="DashboardColor--text--grey">Hi Joeeasy!</h3>
              <form action="findride.html">
                <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary">Discover ride offers</button>
              </form>
            </div>
          </div>
          <div className="divider--three vertical--center">
            <div className="CreateRide">
              <Link to="createoffer.html">
                <i className="fab fa-slideshare fa-3x DashboardColor--text--primary" />
                <h4 className="DashboardColor--text--grey margin-left--10">Offer A Ride</h4>
              </Link>
            </div>
          </div>

          <div className="divider--three vertical--center">
            <div className="CreateRide">
              <Link to="#" id="js__RideRecieved">
                <i className="fa-3x DashboardColor--text--primary">27</i>
                <h4 className="DashboardColor--text--grey">Rides received</h4>
              </Link>
            </div>
          </div>
          <div className="divider--three vertical--center">
            <div className="CreateRide">
              <Link to="#" id="js__RideOffered">
                <i className="fa-3x DashboardColor--text--primary">17</i>
                <h4 className="DashboardColor--text--grey">Rides offered</h4>
              </Link>
            </div>
          </div>
          <div className="divider--three vertical--center">
            <div className="CreateRide">
              <Link to="riderhistory.html">
                <i className="fas fa-history fa-3x DashboardColor--text--primary" />
                <h4 className="DashboardColor--text--grey margin-left--10">Ride History</h4>
              </Link>
            </div>
          </div>

        </div>

        <div className="RideInfo">
          <div className="RideOffers light--shadow">
            <div className="RideOffers__title text--center">
              <h3 className="DashboardColor--text--grey">Ride Requests</h3>
            </div>
            <div className="RideOffers__content js__RideRequests" />
          </div>
          <div className="RideHistory light--shadow">
            <div className="RideHistory__title text--center">
              <h3 className="DashboardColor--text--grey">Ride History</h3>
            </div>
            <div className="RideHistory__content js__RideHistory" />
            <div className="RideHistory__footer text--center">
              <Link to="riderhistory.html">
View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Summary;
