import rideDetails from '../../../src/store/reducers/rideDetails';
import { getUser, failure, error } from '../../__mocks__/auth';

describe('Auth reducer test', () => {
  const initialState = {
    loading: true
  };
  it('should set initial state', () => {
    const state = rideDetails(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('<GET_SINGLE_RIDE />should set loading to true', () => {
    const action = { type: 'GET_SINGLE_RIDE' };
    const state = rideDetails(undefined, action);
    expect(state).toEqual({ loading: true });
  });

  it('<GET_SINGLE_RIDE_SUCCESS /> should add user data to state', () => {
    const action = {
      type: 'GET_SINGLE_RIDE_SUCCESS',
      payload: getUser.data.data
    };
    const state = rideDetails(undefined, action);
    expect(state).toEqual({
      isAuthenticated: true, loading: false, ...action.payload
    });
  });
  it('<GET_SINGLE_RIDE_ERROR /> should add user data to state', () => {
    const action = {
      type: 'JOIN_RIDE_ERROR',
      payload: getUser.data.data
    };
    const state = rideDetails(undefined, action);
    expect(state).toEqual({ loading: true });
  });
});

describe('Auth reducer test', () => {
  const initialState = {
    loading: true
  };
  it('should set initial state', () => {
    const state = rideDetails(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('<CREATE_RIDE />should set loading to true', () => {
    const action = { type: 'CREATE_RIDE' };
    const state = rideDetails(undefined, action);
    expect(state).toEqual({ loading: true });
  });

  it('<CREATE_RIDE_SUCCESS /> should add user data to state', () => {
    const action = {
      type: 'CREATE_RIDE_SUCCESS',
      payload: getUser.data.data
    };
    const state = rideDetails(undefined, action);
    expect(state).toEqual({ loading: true });
  });
  it('<CREATE_RIDE_ERROR /> should add user data to state', () => {
    const action = {
      type: 'CREATE_RIDE_ERROR',
      payload: getUser.data.data
    };
    const state = rideDetails(undefined, action);
    expect(state).toEqual({ loading: true });
  });
});
