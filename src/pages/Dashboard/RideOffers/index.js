
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';


const RideOffer = props => (
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
            <Link to="#">RideOffer</Link>
          </li>
        </ul>
      </div>
      <div className="dashboard__content">
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
        <p className="js__errMsg text--center" />
        <div className="RideRequest" />
        <div className="SearchResult__pagination">
          <div className="SearchResult">
            <div className="SearchResult__heading">
              <h2 className="DashboardColor--text--grey text--center">Ride Offers</h2>
            </div>
            <div className="SearchResult__content">
              <div className="RideDetails light--shadow">
                <div className="RideDetail__header">
                  <div className="RideInfo__content text--center margin--top--10">
                    <div className="text--color--grey">
                      <i className="fas fa-map-marker-alt" />
                      {' '}
Computer village Ikeja

                    </div>
                    <div>
                      <i className="fas fa-arrow-down text--primary margin--10 bounce" />
                    </div>
                    <div className="text--color--grey">
                      <i className="fas fa-map-marker-alt text--primary" />
                      {' '}
Yaba
                    </div>
                    <div className="ride__price">
                      <h3 className="DashboardColor--text--grey">
Price:
                        <span className="text--primary">NGN 200</span>
                      </h3>
                    </div>
                    <div className="ride__seats">
                      <h6 className="DashboardColor--text--grey">
Available Seats:
                        <span className="text--primary">3</span>
                      </h6>
                    </div>
                    <form action="summary.html" className="RideForm">
                      <div>
                        <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Join</button>
                      </div>
                      <div>
                        <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="RideDetails light--shadow">
                <div className="RideDetail__header">
                  <div className="RideInfo__content text--center margin--top--10">
                    <div className="text--color--grey">
                      <i className="fas fa-map-marker-alt" />
                      {' '}
Computer village Ikeja

                    </div>
                    <div>
                      <i className="fas fa-arrow-down text--primary margin--10 bounce" />
                    </div>
                    <div className="text--color--grey">
                      <i className="fas fa-map-marker-alt text--primary" />
                      {' '}
Yaba
                    </div>
                    <div className="ride__price">
                      <h3 className="DashboardColor--text--grey">
Price:
                        <span className="text--primary">NGN 200</span>
                      </h3>
                    </div>
                    <div className="ride__seats">
                      <h6 className="DashboardColor--text--grey">
Available Seats:
                        <span className="text--primary">2</span>
                      </h6>
                    </div>
                    <form action="summary.html" className="RideForm">
                      <div>
                        <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Join</button>
                      </div>
                      <div>
                        <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="RideDetails light--shadow">
                <div className="RideDetail__header">
                  <div className="RideInfo__content text--center margin--top--10">
                    <div className="text--color--grey">
                      <i className="fas fa-map-marker-alt" />
                      {' '}
Computer village Ikeja

                    </div>
                    <div>
                      <i className="fas fa-arrow-down text--primary margin--10 bounce" />
                    </div>
                    <div className="text--color--grey">
                      <i className="fas fa-map-marker-alt text--primary" />
                      {' '}
Yaba
                    </div>
                    <div className="ride__price">
                      <h3 className="DashboardColor--text--grey">
Price:
                        <span className="text--primary">NGN 200</span>
                      </h3>
                    </div>
                    <div className="ride__seats">
                      <h6 className="DashboardColor--text--grey">
Available Seats:
                        <span className="text--primary">7</span>
                      </h6>
                    </div>
                    <form action="summary.html" className="RideForm">
                      <div>
                        <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Join</button>
                      </div>
                      <div>
                        <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default RideOffer;
