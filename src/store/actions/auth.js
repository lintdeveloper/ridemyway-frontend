import axios from 'axios';
import swal from 'sweetalert';
import constants from '../constants';
import showLoading from './helper';

const {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS

} = constants;
let token = null;
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
  token = user.token;
}


export const createAccount = (formData, history) => (dispatch) => {
  showLoading(dispatch, CREATE_ACCOUNT);
  return axios.post('/auth/signup', formData)
    .then((res) => {
      dispatch({
        type: CREATE_ACCOUNT_SUCCESS,
        payload: res.data.data,
      });
      localStorage.setItem('user', JSON.stringify({
        token: res.data.data.token,
        userId: res.data.data.result.id
      }));
      return swal('Success!', 'Account was created successfully', 'success').then(() => history.push('/dashboard/summary'));
    })
    .catch((err) => {
      // showLoading(dispatch, CREATE_ACCOUNT);
      if (err.response) {
        if (err.status === 400) {
          dispatch({
            type: CREATE_ACCOUNT_ERROR,
            payload: err.response.data.message,
          });
          return swal('Failed!', err.response.data || err.response.data, 'warning');
        }
        // dispatch({
        //   type: CREATE_ACCOUNT_ERROR,
        //   payload: err.response.data
        // });
        // console.log('err.response :', err.response);
        // return swal('Failed!', err.response.data || err.response.data, 'warning');
      }
    });
};

export const login = (formData, history) => (dispatch) => {
  showLoading(dispatch, LOGIN);
  return axios.post('/auth/signin', formData)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      });
      localStorage.setItem('user', JSON.stringify({
        token: res.data.data.token,
        userId: res.data.data.userInfo.id
      }));
      return swal('Success!', 'Login successful', 'success').then(() => history.push('/dashboard/summary'));
    })
    .catch((err) => {
      showLoading(dispatch, LOGIN);
      if (err.response) {
        dispatch({
          type: LOGIN_ERROR,
          payload: err.response.data.data || err.response.data.data.message,
        });
        return swal('Failed!', err.response.data.data || err.response.data.data.message, 'warning');
      }
    });
};


export const fetchUser = (userId, history) => (dispatch) => {
  showLoading(dispatch, GET_USER);
  // console.log('I got here : =============');
  return axios.get(`/profile/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    dispatch({
      type: GET_USER_SUCCESS,
      payload: {
        userInfo: res.data.data.user,
      },
    });
  })
    .catch((err) => {
      if (err.response) {
        if (err.response.status === 404) {
          dispatch({
            type: GET_USER_ERROR,
            payload: err.response.data.data.message,
          });
          return swal('Failed!', err.response.data.data.message, 'warning');
        }
        if (err.response.status === 401) {
          console.log('+++++++++++++++++++++++')
          dispatch({
            type: GET_USER_ERROR,
            payload: [],
          });
          return swal('Failed!', err.response.data.data.message, 'warning').then(() => history.push('/login'));
        }
      }
    });
};
