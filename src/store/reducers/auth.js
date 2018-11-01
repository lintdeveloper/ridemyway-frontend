import constants from '../constants/index';

const {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} = constants;


const intialState = {
  isAuthenticated: false,
  loading: false,
};

const user = (state = intialState, { type, payload }) => {
  switch (type) {
    case CREATE_ACCOUNT || LOGIN:
      return {
        ...state,
        loading: true
      };
    case CREATE_ACCOUNT_SUCCESS || LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case CREATE_ACCOUNT_ERROR || LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        message: payload
      };
    default:
      return state;
  }
};

export default user;
