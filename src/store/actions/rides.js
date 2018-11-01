import axios from 'axios';
import swal from 'sweetalert';
import constants from '../constants';
import showLoading from './helper';

const {
  GET_RIDES,
  GET_RIDES_SUCCESS,
  GET_RIDES_ERROR,
  GET_SINGLE_RIDE,
  GET_SINGLE_RIDE_ERROR,
  GET_SINGLE_RIDE_SUCCESS,
  JOIN_RIDE,
  JOIN_RIDE_ERROR,
  JOIN_RIDE_SUCCESS,
  CREATE_RIDE,
  CREATE_RIDE_ERROR,
  CREATE_RIDE_SUCCESS
} = constants;
let token = null;
let currentUserId = null;
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
  token = user.token;
  currentUserId = user.userId;
}

const getRides = history => (dispatch) => {
  showLoading(dispatch, GET_RIDES);
  axios.get('/rides', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    dispatch({
      type: GET_RIDES_SUCCESS,
      payload: res.data.data,
    });

    return swal('Success!', res.data.data, 'success');
  })
    .catch((err) => {
      if (err.response) {
        if (err.response.status === 404) {
          dispatch({
            type: GET_RIDES_ERROR,
            payload: err.response.data.data.message,
          });
          return swal('Failed!', err.response.data.data.message, 'warning');
        }
        if (err.response.status === 401) {
          dispatch({
            type: GET_RIDES_ERROR,
            payload: [],
          });
          return swal('Failed!', err.response.data.data.message, 'warning').then(() => history.push('/login'));
        }
      }
    });
};

const getSingleRide = (id, history) => (dispatch) => {
  showLoading(dispatch, GET_SINGLE_RIDE);
  axios.get(`/rides/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    axios.get(`/profile/${res.data.data.rideOffer.rideOwnerId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => dispatch({
      type: GET_SINGLE_RIDE_SUCCESS,
      payload: {
        rideOffer: res.data.data,
        rideownerInfo: result.data.data
      },
    }))
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            dispatch({
              type: GET_SINGLE_RIDE_ERROR,
              payload: err.response.data.data.message,
            });
            return swal('Failed!', err.response.data.data.message, 'warning');
          }
          if (err.response.status === 401) {
            dispatch({
              type: GET_SINGLE_RIDE_ERROR,
              payload: [],
            });
            return swal('Failed!', err.response.data.data.message, 'warning').then(() => history.push('/login'));
          }
        }
      });
  })
    .catch((err) => {
      if (err.response) {
        if (err.response.status === 404) {
          dispatch({
            type: GET_SINGLE_RIDE_ERROR,
            payload: err.response.data.data.message,
          });
          return swal('Failed!', err.response.data.data.message, 'warning');
        }
        if (err.response.status === 401) {
          dispatch({
            type: GET_SINGLE_RIDE_ERROR,
            payload: [],
          });
          return swal('Failed!', err.response.data.data.message, 'warning').then(() => history.push('/login'));
        }
      }
    });
};

const joinRide = (id, rideOwnerId, history) => (dispatch) => {
  showLoading(dispatch, JOIN_RIDE);
  if (currentUserId === rideOwnerId) {
    return swal('Failed!', 'You cannot join your own ride', 'warning');
  }
  return axios.post(`/rides/${id}/requests/`, {
    rideOwnerId
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    dispatch({
      type: JOIN_RIDE_SUCCESS,
      payload: res.data.data,
    });

    return swal('Success!', res.data.data.message, 'success').then(() => history.push('/dashboard/summary'));
  })
    .catch((err) => {
      if (err.response) {
        if (err.response.status === 400) {
          dispatch({
            type: JOIN_RIDE_ERROR,
            payload: err.response.data.message,
          });
          return swal(err.response.data.data.message);
        }
        if (err.response.status === 401) {
          dispatch({
            type: JOIN_RIDE_ERROR,
            payload: err.response.data.message,
          });
          return swal(err.response.data.data.message);
        }
      }
    });
};

const createRide = (FormData, history) => (dispatch) => {
  const rideOwnerIdInput = document.querySelector("input[type='hidden']").value = currentUserId;
  showLoading(dispatch, CREATE_RIDE);
  axios.post('/users/rides/', FormData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    dispatch({
      type: CREATE_RIDE_SUCCESS,
      payload: res.data.data,
    });

    return swal('Success!', res.data.data.message, 'success').then(() => history.push('/dashboard/rides'));
  })
    .catch((err) => {
      if (err.response) {
        if (err.response.data.status === 'fail' && err.response.status === 403) {
          dispatch({
            type: CREATE_RIDE_ERROR,
            payload: err.response.data.data
          });
          return swal('Failed!', err.response.data.data, 'warning');
        }
        if (err.response.data.status === 'error' && err.response.status === 400) {
          dispatch({
            type: CREATE_RIDE_ERROR,
            payload: err.response.data
          });
          return swal('Failed!', err.response.data.message, 'warning');
        }
        if (err.response.data.status === 'error' && err.response.status === 401) {
          dispatch({
            type: CREATE_RIDE_ERROR,
            payload: err.response.data
          });
          return swal('Failed!', err.response.data.message, 'warning').then(() => history.push('/login'));
        }
      }
    });
};
export {
  getRides, getSingleRide, joinRide, createRide
};
