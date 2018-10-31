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
  LOGIN_ERROR

} = constants;
export const createAccount = (formData) => (dispatch) => {
  showLoading(dispatch, CREATE_ACCOUNT);
  axios.post('/auth/signup', formData)
    .then((res) => {
      dispatch({
        type: CREATE_ACCOUNT_SUCCESS,
        payload: res.data.data,
      });

     return swal("Success!", 'Account was created successfully', "success").then(() => window.location='/dashboard/summary');
      
    })
    .catch((err) => {
      showLoading(dispatch, CREATE_ACCOUNT);
      console.log('err :', err);
      const failed = (err.response.data.data === undefined) ? err.response.data.message : err.response.data.data.message;
      const error = (err.response === undefined) ? err.response.message : err.response.data.message;
      dispatch({
        type: CREATE_ACCOUNT_ERROR,
        payload: error || failed,
      });
      console.log('failed :', failed);
      console.log('error :', error);
      return swal("Failed!", failed || 'Account already exist', "warning");
    });
};

export const login = (formData) => (dispatch) => {
  showLoading(dispatch, LOGIN);
  axios.post('/auth/signin', formData)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      });
      localStorage.setItem('user', JSON.stringify({
        token: res.data.data.token,
        userId: res.data.data.userInfo.id
      }));
     return swal("Success!", 'Login successful', "success").then(() => window.location='/dashboard/summary');
      
    })
    .catch((err) => {
      showLoading(dispatch, LOGIN);
      console.log('err :', err);
      const failed = (err.response.data.data === undefined) ? err.response.data.message : err.response.data.data.message;
      const error = (err.response === undefined) ? err.response.message : err.response.data.message;
      dispatch({
        type: LOGIN_ERROR,
        payload: error || failed,
      });
      console.log('failed :', failed);
      console.log('error :', error);
      return swal("Failed!", failed || 'Account does not exist', "warning");
    });
};

// export const login;