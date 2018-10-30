

import React from 'react';
import { Link } from 'react-router-dom';
import dummy from 'images/ME.jpeg';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';


const RideDetails = props => (
  <div className="wrapper dashboard--bg--grey">
    <DashboardHeader />
    <div className="container-fluid">
      <div className="subheader">
        <h3 className="DashboardColor--text--grey">Dashboard</h3>
        <ul className="nav navbar__nav">
          <li>
            <Link to="#">
              <i className="fas fa-home" />
            </Link>
          </li>
          <li>-</li>
          <li>
            <Link to="#">RideDetails</Link>
          </li>
        </ul>
      </div>
      <div className="RideDetails light--shadow">
        <p className="js__errMsg" />
        <div className="RideDetail__header">
          <div className="RideInfo__header">
            <div className="RideInfo__header__img text--center">
              <img src={`${dummy}`} alt="offerer profile" />
              <h4 className="text--primary">heading home</h4>
              <h5 className="text--color--grey font--regular">joe                      easy</h5>
              <h4 className="DashboardColor--text--grey">
Phone:
                <span className="text--primary">joe            </span>
              </h4>
            </div>

          </div>
          <div className="RideInfo__content  margin--top--10 padding--40">
            <div className="direction">
              <div className="text--color--grey margin--0">
                <strong>Location:</strong>
                {' '}
yaba

              </div>
              <div>
                <i className="fas fa-arrow-right text--primary" />
              </div>
              <div className="text--color--grey">
                <strong>Destination:</strong>
                {' '}
ikeja

              </div>
            </div>

            <div className="ride__seats">
              <h6 className="DashboardColor--text--grey">
Available Seats:
                <span className="text--primary">4</span>
              </h6>
            </div>


            <form action="/summary.html" className="RideForm js__RideOfferForm">
              <div>
                <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Join ride</button>
              </div>
              <div>
                <a href="profile.html?1" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">View driver's profile</a>
              </div>
            </form>

          </div>
        </div>
      </div>
      {' '}

    </div>

  </div>
);

export default RideDetails;
