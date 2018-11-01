import constants from '../constants/index';

const {
  GET_RIDES,
  GET_RIDES_SUCCESS,
  GET_RIDES_ERROR,
  GET_SINGLE_RIDE,
  GET_SINGLE_RIDE_ERROR,
  GET_SINGLE_RIDE_SUCCESS,
} = constants;


const intialState = {
  rideOffers: [],
  loading: true
};

const rides = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_RIDES || GET_SINGLE_RIDE:
      return {
        ...state,
        loading: true
      };
    case GET_RIDES_SUCCESS || GET_SINGLE_RIDE_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case GET_RIDES_ERROR || GET_SINGLE_RIDE_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default rides;
