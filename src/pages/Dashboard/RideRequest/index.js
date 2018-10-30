

import React from 'react';
import { Link } from 'react-router-dom';
import dummy from 'images/ME.jpeg';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';


const RideRequest = props => (
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
            <Link to="#">RideRequest</Link>
          </li>
        </ul>
      </div>
      <div className="RideRequest__heading">
        <div className="SearchRide light--shadow">
          <div className="SearchRide__heading">
            <h3 className="text--center margin--bottom--20 DashboardColor--text--grey">Search ride requests</h3>
          </div>
          <div className="SearchRide__content">
            <form action="#">
              <div className="form--group full--width">
                <input type="text" className="dashboard--input form--control" placeholder="Place" />
              </div>
              <div className="form--group">
                <button className="searchbtn btn btn--round DashboardColor--bg--primary" type="submit">
Find
                  <i className="fas fa-chevron-right slide padding--left--5" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div className="RideRequest">
        <div className="RideDetails light--shadow">
          <div className="RideDetail__header">
            <div className="RideInfo__header">
              <div className="RideInfo__header__img text--center">
                <img src="assets/img/ME.jpeg" alt="offerer profile" />
                <h4 className="text--primary">Heading towards mile 2</h4>
                <h5 className="text--color--grey font--regular">Jehonadab Okpukoro wants to join you</h5>
              </div>
            </div>
            <div className="RideInfo__content text--center margin--top--10">
              <div className="text--color--grey">Computer village Ikeja</div>
              <div>
                <i className="fas fa-arrow-down text--primary margin--10" />
              </div>
              <div className="text--color--grey">Yaba</div>
              <form action="/summary.html" className="RideForm">
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Accept</button>
                </div>
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Decline</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="RideDetails light--shadow">
          <div className="RideDetail__header">
            <div className="RideInfo__header">
              <div className="RideInfo__header__img text--center">
                <img src="assets/img/ME.jpeg" alt="offerer profile" />
                <h4 className="text--primary">Heading towards mile 2</h4>
                <h5 className="text--color--grey font--regular">Jehonadab Okpukoro wants to join you</h5>
              </div>
            </div>
            <div className="RideInfo__content text--center margin--top--10">
              <div className="text--color--grey">Computer village Ikeja</div>
              <div>
                <i className="fas fa-arrow-down text--primary margin--10" />
              </div>
              <div className="text--color--grey">Yaba</div>
              <form action="/summary.html" className="RideForm">
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Accept</button>
                </div>
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Decline</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="RideDetails light--shadow">
          <div className="RideDetail__header">
            <div className="RideInfo__header">
              <div className="RideInfo__header__img text--center">
                <img src="assets/img/ME.jpeg" alt="offerer profile" />
                <h4 className="text--primary">Heading towards mile 2</h4>
                <h5 className="text--color--grey font--regular">Jehonadab Okpukoro wants to join you</h5>
              </div>
            </div>
            <div className="RideInfo__content text--center margin--top--10">
              <div className="text--color--grey">Computer village Ikeja</div>
              <div>
                <i className="fas fa-arrow-down text--primary margin--10" />
              </div>
              <div className="text--color--grey">Yaba</div>
              <form action="/summary.html" className="RideForm">
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Accept</button>
                </div>
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Decline</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="RideDetails light--shadow">
          <div className="RideDetail__header">
            <div className="RideInfo__header">
              <div className="RideInfo__header__img text--center">
                <img src="assets/img/ME.jpeg" alt="offerer profile" />
                <h4 className="text--primary">Heading towards mile 2</h4>
                <h5 className="text--color--grey font--regular">Jehonadab Okpukoro wants to join you</h5>
              </div>
            </div>
            <div className="RideInfo__content text--center margin--top--10">
              <div className="text--color--grey">Computer village Ikeja</div>
              <div>
                <i className="fas fa-arrow-down text--primary margin--10" />
              </div>
              <div className="text--color--grey">Yaba</div>
              <form action="/summary.html" className="RideForm">
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Accept</button>
                </div>
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Decline</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="RideDetails light--shadow">
          <div className="RideDetail__header">
            <div className="RideInfo__header">
              <div className="RideInfo__header__img text--center">
                <img src="assets/img/ME.jpeg" alt="offerer profile" />
                <h4 className="text--primary">Heading towards mile 2</h4>
                <h5 className="text--color--grey font--regular">Jehonadab Okpukoro wants to join you</h5>
              </div>
            </div>
            <div className="RideInfo__content text--center margin--top--10">
              <div className="text--color--grey">Computer village Ikeja</div>
              <div>
                <i className="fas fa-arrow-down text--primary margin--10" />
              </div>
              <div className="text--color--grey">Yaba</div>
              <form action="/summary.html" className="RideForm">
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Accept</button>
                </div>
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Decline</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="RideDetails light--shadow">
          <div className="RideDetail__header">
            <div className="RideInfo__header">
              <div className="RideInfo__header__img text--center">
                <img src="assets/img/ME.jpeg" alt="offerer profile" />
                <h4 className="text--primary">Heading towards mile 2</h4>
                <h5 className="text--color--grey font--regular">Jehonadab Okpukoro wants to join you</h5>
              </div>
            </div>
            <div className="RideInfo__content text--center margin--top--10">
              <div className="text--color--grey">Computer village Ikeja</div>
              <div>
                <i className="fas fa-arrow-down text--primary margin--10" />
              </div>
              <div className="text--color--grey">Yaba</div>
              <form action="/summary.html" className="RideForm">
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Accept</button>
                </div>
                <div>
                  <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Decline</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default RideRequest;
