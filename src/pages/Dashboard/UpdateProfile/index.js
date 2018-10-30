

import React from 'react';
import { Link } from 'react-router-dom';
import dummy from 'images/ME.jpeg';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';


const UpdateProfile = props => (
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
            <Link to="/dashboard/summary">UpdateProfile</Link>
          </li>
        </ul>
      </div>
      <div className="RideDetails light--shadow">
        <div className="RideDetail__header">
          <div className="RideInfo__header">
            <div className="RideInfo__header__img text--center">
              <h1 className="DashboardColor--text--grey">Update Profile</h1>
            </div>
          </div>
          <div className="RideInfo__content  margin--top--10 padding--40">
            <form>
              <div className="input--group dashboard--input">
                <input type="text" className="form--control" placeholder="First Name" value="kko" name="firstName" />
                <input type="text" className="form--control" placeholder="Last Name" value="sgg" name="lastName" />
              </div>

              <div className="input--group dashboard--input">
                <input type="text" className="form--control" placeholder="Email" name="email" value="joe045@gmail.com          " />
                <input type="text" className="form--control" placeholder="Phone number" value="dsa            " name="phone" />
              </div>

              <div className="input--group dashboard--input">
                <input type="text" className="form--control" placeholder="Address" value="42, montgomery rd" name="address" />
                <input type="text" className="form--control" placeholder="City" value="yaba" name="city" />
              </div>
              <div className="input--group dashboard--input">
                <input type="text" className="form--control" placeholder="Zipcode" value="3101" name="zipCode" />
                <input type="file" className="form--control" placeholder="Upload profille image" name="imageUpload" accept="image/*" />
              </div>

              <div className="contact__submit margin--top--10">
                <button type="submit" className="btn btn--block bg--color--grey text--color--white light--shadow">
                  <span>Update profile</span>
                </button>

              </div>

            </form>
          </div>
        </div>
      </div>
      {' '}

    </div>

  </div>
);

export default UpdateProfile;
