import { combineReducers } from 'redux';
import user from './auth';
import rides from './rides';
import singleRide from './rideDetails';
import joinRide from './joinRide';

const rootReducers = combineReducers({
  user,
  rides,
  singleRide,
  joinRide
});

export default rootReducers;
