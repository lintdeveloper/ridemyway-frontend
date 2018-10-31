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
JOIN_RIDE_SUCCESS
} = constants;
let token = null;

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
  token = user.token;
}

const getRides = () => dispatch =>  {
  showLoading(dispatch, GET_RIDES);
  axios.get('/rides', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    dispatch({
      type: GET_RIDES_SUCCESS,
      payload: res.data.data,
    });

   return swal("Success!", res.data.data, "success");
  })
  .catch(err => {
    const failed = (err.response === undefined) ? err.response.message : err.response.data.message;
      dispatch({
        type: GET_RIDES_ERROR,
        payload: failed || 'Could not fetch all rides',
      });
      return swal("Failed!", failed || 'cloud not fetch rides please login', "warning").then(() => window.location= '/login');
  });
}

const getSingleRide = id => dispatch =>  {
  showLoading(dispatch, GET_SINGLE_RIDE);
  axios.get('/rides/'+id, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    axios.get('/profile/'+res.data.data.rideOffer.rideOwnerId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((result) => {
      dispatch({
        type: GET_SINGLE_RIDE_SUCCESS,
        payload: {
          rideOffer: res.data.data,
          rideownerInfo: result.data.data
        },
      });
  
     return swal("Success!", res.data.data.message, "success");
    })
    .catch(err => {
      console.log('err :', err);
      const failed = (err.response === undefined) ? err.response.message : err.response.data.message;
        dispatch({
          type: GET_SINGLE_RIDE_ERROR,
          payload: failed || 'Could not fetch all rides',
        });
        return swal("Failed!", failed || 'cloud not fetch rides please login', "warning").then(() => window.location= '/login');
    });
  })
  .catch(err => {
    console.log('err :', err);
    const failed = (err.response === undefined) ? err.response.message : err.response.data.message;
      dispatch({
        type: GET_SINGLE_RIDE_ERROR,
        payload: failed || 'Could not fetch all rides',
      });
      return swal("Failed!", failed || 'cloud not fetch rides please login', "warning").then(() => window.location= '/login');
  });
}

const joinRide = (id, rideOwnerId) => dispatch =>  {
  showLoading(dispatch, JOIN_RIDE);
  axios.post(`/rides/${id}/requests/`,{
    rideOwnerId
  }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    dispatch({
      type: JOIN_RIDE_SUCCESS,
      payload: res.data.data,
    });

   return swal("Success!", 'Your ride request has been sent', "success");
  })
  .catch(err => {
    console.log('err :', err);
      dispatch({
        type: JOIN_RIDE_ERROR,
        payload: 'couLd not join this ride at the moment',
      });
      return swal("Failed!", 'couLd not join this ride at the moment', "warning");
  });
}
export { getRides, getSingleRide, joinRide }