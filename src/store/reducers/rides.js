import constants from '../constants/index';

const {
  GET_RIDES,
  GET_RIDES_SUCCESS,
  GET_RIDES_ERROR,
  GET_SINGLE_RIDE,
  GET_SINGLE_RIDE_ERROR,
  GET_SINGLE_RIDE_SUCCESS,
  GET_REQUEST,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_ERROR,
} = constants;


const intialState = {
  rideOffers: [],
  loading: true
};

const rides = (state = intialState, { type, payload }) => {
  console.log('type :', type);
  switch (type) {
    case GET_RIDES || GET_SINGLE_RIDE || GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_RIDES_SUCCESS || GET_SINGLE_RIDE_SUCCESS || GET_REQUEST_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case GET_RIDES_ERROR || GET_SINGLE_RIDE_ERROR || GET_REQUEST_ERROR:
      return {
        ...state,
        loading: false
      };
    case GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_REQUEST_SUCCESS:
      console.log('payload :', payload);
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case GET_REQUEST_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default rides;
