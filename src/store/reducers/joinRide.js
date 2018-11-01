import constants from '../constants/index';

const {
  JOIN_RIDE,
  JOIN_RIDE_ERROR,
  JOIN_RIDE_SUCCESS
} = constants;


const intialState = {
  loading: true
};

const joinRide = (state = intialState, { type, payload }) => {
  switch (type) {
    case JOIN_RIDE:
      return {
        ...state,
        loading: true
      };
    case JOIN_RIDE_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case JOIN_RIDE_ERROR:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default joinRide;
