import constants from '../constants/index';

const {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR
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
    case GET_USER:
      return {
        ...state,
        loading: true
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case GET_USER_ERROR:
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
