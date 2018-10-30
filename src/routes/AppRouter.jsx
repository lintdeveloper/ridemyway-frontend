import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeComponent } from '../pages/home/HomeComponenet';
import AboutPageCOmponent from '../pages/about/AboutComponent';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Summary from '../pages/Dashboard/Summary';
import RideOffer from '../pages/Dashboard/RideOffers';
import RideDetails from '../pages/Dashboard/RideDetails';
import CreateRideOffer from '../pages/Dashboard/CreateRide';
import RideRequest from '../pages/Dashboard/RideRequest';
import Profile from '../pages/Dashboard/Profile';
import UpdateProfile from '../pages/Dashboard/UpdateProfile';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <div className="wrapper">
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/about" component={AboutPageCOmponent} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard/summary" component={Summary} />
      <Route exact path="/dashboard/rides" component={RideOffer} />
      <Route exact path="/dashboard/rides/:rideId" component={RideDetails} />
      <Route exact path="/dashboard/createride" component={CreateRideOffer} />
      <Route exact path="/dashboard/rides/:rideId/requests" component={RideRequest} />
      <Route exact path="/dashboard/profile/:userId/" component={Profile} />
      <Route exact path="/dashboard/profile/:userId/update" component={UpdateProfile} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default AppRouter;
