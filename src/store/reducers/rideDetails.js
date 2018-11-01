import constants from '../constants/index';

const {
  GET_SINGLE_RIDE,
  GET_SINGLE_RIDE_ERROR,
  GET_SINGLE_RIDE_SUCCESS,
  CREATE_RIDE,
  CREATE_RIDE_ERROR,
  CREATE_RIDE_SUCCESS
} = constants;


const intialState = {
  rideDetails: {},
  loading: true
};

const singleRide = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_RIDE || CREATE_RIDE:
      return {
        ...state,
        loading: true
      };
    case GET_SINGLE_RIDE_SUCCESS || CREATE_RIDE_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case GET_SINGLE_RIDE_ERROR || CREATE_RIDE_ERROR:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default singleRide;
