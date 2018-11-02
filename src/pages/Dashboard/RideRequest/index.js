

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';
import { fetchRequest, respondToRide } from '../../../store/actions/rides';

const dummy = 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png';

class RideRequest extends Component {
  componentDidMount = () => {
    const { rideId }  = this.props.match.params;
   const { history, fetchRequest } = this.props;
   return fetchRequest(rideId, history);
  }
  handleRequest = (event) => {
    const { history, respondToRide, riderequests } = this.props;
    const { rideId } = this.props.match.params;
    const status = event.target.value;
    respondToRide(history, rideId, riderequests.forEach(riderequest => riderequest.id), status)
  }
  renderRideRequest = (riderequests) => riderequests.map(riderequest =>(
    <div className="RideDetails light--shadow">
      <div className="RideDetail__header">
        <div className="RideInfo__header">
          <div className="RideInfo__header__img text--center">
            <img src={riderequest.rideownerInfo.profile || dummy} alt="offerer profile" />
            <h4 className="text--primary">{riderequest.rideOffer.rideTitle}</h4>
            <h5 className="text--color--grey font--regular">{riderequest.rideownerInfo.firstName + ' ' + riderequest.rideownerInfo.lastName + ' wants to join you'}</h5>
          </div>
        </div>
        <div className="RideInfo__content text--center margin--top--10">
          <div className="text--color--grey">{riderequest.rideOffer.location}</div>
          <div>
            <i className="fas fa-arrow-down text--primary margin--10" />
          </div>
          <div className="text--color--grey">{riderequest.rideOffer.destination}</div>
          <form className="RideForm">
            <div>
              <button type="button" className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10" value="accepted" onClick={this.handleRequest}>Accept</button>
            </div>
            <div>
              <button type="button" className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10" value="rejected" onClick={this.handleRequest}>Decline</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ));
  render() {
    const { loading, riderequests } = this.props;
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
                <Link to="#">RideRequest</Link>
              </li>
            </ul>
          </div>
          <div className="SearchRide__heading">
            <h3 className="text--center margin--bottom--20 DashboardColor--text--grey">Ride requests</h3>
          </div>
          <div className="RideRequest">
            {!loading && (riderequests.length > 0)
            ? this.renderRideRequest(riderequests)
            : <div className="text--center" style={{ display: 'flex' }}>
              <Loader
                type="CradleLoader"
                color="#00BFFF"
                height="100"
                width="100"
              />
            </div>
          }
            </div>
        </div>
    
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequest: (userId, history) => {
      dispatch(fetchRequest(userId, history))
    },
    respondToRide: (history, rideId, requestId, status) =>  dispatch(respondToRide(history, rideId, requestId, status))
  }
}

const mapStateToProps = ({rides}) =>{
  return ({...rides})
}
export default connect(mapStateToProps, mapDispatchToProps)(RideRequest);
