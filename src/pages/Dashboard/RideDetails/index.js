

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';
import { getSingleRide, joinRide } from '../../../store/actions/rides';

const dummy = 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png';
class RideDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.rideId;
    const { getSingleRide, history } = this.props;
    getSingleRide(id, history);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.rideId;
    const { joinRide, rideOffer, history } = this.props;
    if (rideOffer.rideOffer) {
      return joinRide(id, rideOffer.rideOffer.rideOwnerId, history);
    }
  }

  render() {
    const { loading } = this.props;
    const rideOffer = (this.props.rideOffer) && this.props.rideOffer.rideOffer;
    const driverInfo = (this.props.rideownerInfo) && this.props.rideownerInfo.user;

    return (
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
            { !loading
              ? (
                <div className="RideDetail__header">
                  <div className="RideInfo__header">
                    <div className="RideInfo__header__img text--center">
                      <img src={`${dummy}`} alt="offerer profile" />
                      <h4 className="text--primary">{rideOffer && rideOffer.rideTitle}</h4>
                      <h5 className="text--color--grey font--regular">{`${driverInfo && driverInfo.firstName} ${driverInfo && driverInfo.lastName}`}</h5>
                      <h4 className="DashboardColor--text--grey">
  Phone:
                        <span className="text--primary">
                          {
                    driverInfo && driverInfo.phone
                  }
                          {' '}

                        </span>
                      </h4>
                    </div>

                  </div>
                  <div className="RideInfo__content  margin--top--10 padding--40">
                    <div className="direction" style={{ flexWrap: 'wrap' }}>
                      <div className="text--color--grey margin--0">
                        <strong>Location:</strong>
                        {rideOffer && rideOffer.location}
                      </div>
                      <div>
                        <i className="fas fa-arrow-right text--primary" />
                      </div>
                      <div className="text--color--grey">
                        <strong>Destination:</strong>
                        {rideOffer && rideOffer.destination}
  ikeja

                      </div>
                    </div>

                    <div className="ride__seats">
                      <h6 className="DashboardColor--text--grey">
  Available Seats:
                        <span className="text--primary">{rideOffer && rideOffer.noOfSeats}</span>
                      </h6>
                    </div>


                    {(rideOffer.rideOwnerId
                !== (JSON.parse(localStorage.getItem('user')).userId))
                      ? (
                        <form className="RideForm js__RideOfferForm" onSubmit={this.handleOnSubmit}>
                          <div>
                            <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Join ride</button>
                          </div>
                          <div>
                            <Link to={`/dashboard/profile/${rideOffer && rideOffer.rideOwnerId}`} className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">View driver's profile</Link>
                          </div>
                        </form>
                      )
                      : (
                        <div style={{ display: 'flex' }}>
                          <Link to={`/dashboard/rides/request/${rideOffer.id}`}>
                            <button type="submit" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">View ride request</button>
                          </Link>
                        </div>
                      )
          }

                  </div>
                </div>
              )
              : (
                <div className="text--center" style={{ display: 'flex' }}>
                  <Loader
                    type="CradleLoader"
                    color="#00BFFF"
                    height="100"
                    width="100"
                  />
                </div>
              ) }
          </div>
          {' '}

        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ singleRide }, ownProps) => ({
  ...ownProps,
  ...singleRide
});
const mapDispatchToProps = dispatch => ({
  getSingleRide: (id, history) => dispatch(getSingleRide(id, history)),
  joinRide: (rideId, rideOwnerId, history) => dispatch(joinRide(rideId, rideOwnerId, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RideDetails));
