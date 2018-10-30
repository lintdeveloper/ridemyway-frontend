

import React from 'react';
import { Link } from 'react-router-dom';
import dummy from 'images/ME.jpeg';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';


const Profile = props => (
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
            <Link to="/dashboard/summary">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="RideDetails light--shadow">
        <div className="RideDetail__header">
          <div className="RideInfo__header">
            <div className="RideInfo__header__img text--center">
              <img src="assets/img/ME.jpeg" alt="offerer profile" />
              <h4 className="text--primary">Jehonadab Okpukoro</h4>
            </div>
          </div>
          <div className="RideInfo__content  margin--top--10 padding--40">


            <div className="ride__price">
              <h4 className="DashboardColor--text--grey margin--bottom--10">
Email:
                <span className="text--primary">jehonadabokpus@gmai.com</span>
              </h4>
            </div>
            <div className="ride__duration ">

              <h4 className="DashboardColor--text--grey margin--bottom--20">
Phone:
                <span className="text--primary">+2347059972180</span>
              </h4>
              <h2 className="light--grey margin--bottom--10">Address Information </h2>
              <h4 className="DashboardColor--text--grey margin--bottom--10">
Address
                <span className="text--primary">42 montgomery sabo</span>
              </h4>
              <h4 className="DashboardColor--text--grey margin--bottom--10">
City
                <span className="text--primary">Yaba</span>
              </h4>
              <h4 className="DashboardColor--text--grey margin--bottom--10">
Postal Code
                <span className="text--primary">101212</span>
              </h4>
            </div>
            <div className="ride__seats">
              <h6 className="DashboardColor--text--grey">
Available Seats:
                <span className="text--primary">3</span>
              </h6>
            </div>


            <div className="view__rideoffers">
              <a className="btn btn--block DashboardColor--bg--primary btn--round margin--top--10 text--center" href="editprofile.html">Edit Profile</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
);

export default Profile;
