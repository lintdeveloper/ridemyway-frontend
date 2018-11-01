
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import DashboardHeader from '../../../components/common/Headers/DashboardHeader';
import { getRides } from '../../../store/actions/rides'

class RideOffer extends Component {
  componentDidMount() {
    const { getRides, history } =  this.props;
    getRides(history);    
  }

  renderRideOffers = (offers) => offers.map(offer => (
    <div className="RideDetails light--shadow">
      <div className="RideDetail__header">
        <div className="RideInfo__content text--center margin--top--10">
          <div className="text--color--grey">
            <i className="fas fa-map-marker-alt" />
            {' '}
            {offer.location}

          </div>
          <div>
            <i className="fas fa-arrow-down text--primary margin--10 bounce" />
          </div>
          <div className="text--color--grey">
            <i className="fas fa-map-marker-alt text--primary" />
            {offer.destination}
            </div>
            <div className="ride__seats">
            <h6 className="DashboardColor--text--grey">
Available Seats:
              <span className="text--primary">{offer.noOfSeats}</span>
            </h6>
          </div>
          <form className="RideForm">
            <div>
              <Link to={"/dashboard/rides/" + offer.id} ><button className="DashboardBtn btn--round DashboardColor--bg--primary margin--top--10">Join</button></Link>
            </div>
            <div>
              <Link to="/dashboard/summary/"><button className="DashboardBtn btn--round DashboardColor--bg--grey margin--top--10">Cancel</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>

  ))
  
  render() {
   const { rideOffers, loading } = this.props;
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
                <Link to="#">RideOffer</Link>
              </li>
            </ul>
          </div>
          <div className="dashboard__content">
            <p className="js__errMsg text--center" />
            <div className="RideRequest" />
            <div className="SearchResult__pagination">
              <div className="SearchResult">
                <div className="SearchResult__heading">
                  <h2 className="DashboardColor--text--grey text--center">Ride Offers</h2>
                </div>
                <div className="SearchResult__content">
                {
                  (!loading) 
                  ? (rideOffers.length > 0) ? this.renderRideOffers(rideOffers)
                  : <div className="RideDetails light--shadow">
                  <div className="RideDetail__header">
                    <div className="RideInfo__content text--center margin--top--10">
                    <h3>No ride offer found</h3>
                    </div>
                    </div>
                    </div>
                  : <Loader
                      type="CradleLoader"
                      color="#00BFFF"
                      height="100"	
                      width="100"
                    />
                }
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );

  }
}

const mapStateToProps = ({ rides }, ownProps) => ({
  ...ownProps,
  ...rides
})
const mapDispatchToProps = (dispatch) => {
  return ({
    getRides: (history) => dispatch(getRides(history))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(RideOffer);
