

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';
import { createRide } from '../../../store/actions/rides'


class CreateRideOffer extends Component {
  
  handleOnSubmit = (event) => {
    event.preventDefault();
    const { userId } = JSON.parse(localStorage.getItem('user'))
    const { createRide, history } = this.props;
    const rideOwnerIdInput = document.querySelector("input[type='hidden']");
    rideOwnerIdInput.value = userId;
    const formData = {}
    const FD = new FormData(event.target);
    for(var pair of FD.entries()) {
      formData[pair[0]] = pair[1];
    } 
    return createRide(formData, history);
  }
  render() {
    return (
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
                <Link to="#">CreateRideOffer</Link>
              </li>
            </ul>
          </div>
          <div className="RideDetails light--shadow">
            <div className="RideDetail__header">
              <div className="RideInfo__header">
                <div className="RideInfo__header__img text--center">
                  <h3 className="text--primary"> Create a ride offer</h3>
                  <h5 className="text--color--grey font--regular">Where are you heading to?</h5>
                </div>
              </div>
              <div className="RideInfo__content text--center margin--top--10">
                <form onSubmit={this.handleOnSubmit}>
                  <p className="js__errMsg" />
                  <div className="input--group dashboard--input">
                    <input type="text" className="form--control" placeholder="From(Your current location)" name="location" />
                    <input type="text" className="form--control" placeholder="To(Where you are going)" name="destination" />
                  </div>
    
                  <div className="input--group dashboard--input">
                    <input type="text" className="form--control bd--none" name="rideTitle" placeholder="Ride title" />
                  </div>
    
                  <div className="input--group dashboard--input">
                    <input type="date" className="form--control" placeholder="Date" name="departureTime" />
                    <input type="number" className="form--control" placeholder="Availiable seats" name="noOfSeats" />
                  </div>
                  <input type="hidden" name="rideOwnerId" />
    
                  <div className="contact__submit margin--top--10">
                    <button type="submit" className="btn btn--block bg--color--grey text--color--white light--shadow">
                      <span>Create offer</span>
                    </button>
    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    );
  }
}

const mapStateToProps = ({rideDetails}, ownProps) => ({
  ...ownProps,
  ...rideDetails
})
const mapDispatchToProps = (dispatch) => ({
  createRide: (formData, history) => dispatch(createRide(formData, history))
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateRideOffer));

