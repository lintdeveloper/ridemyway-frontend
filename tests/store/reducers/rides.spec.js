import rides from '../../../src/store/reducers/rides';
import { getUser, failure, error } from '../../__mocks__/auth';

describe('Get rides reducer test', () => {
  const initialState = {
    rideOffers: [],
    loading: true
  };
  it('should set initial state', () => {
    const state = rides(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('< GET_RIDES/>should set loading to true', () => {
    const action = { type: 'GET_RIDES' };
    const state = rides(undefined, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('<GET_RIDES_SUCCESS /> should add user data to state', () => {
    const action = {
      type: 'GET_RIDES_SUCCESS',
      payload: getUser.data.data
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...initialState, ...action.payload, loading: false, isAuthenticated: true
    });
  });
  it('<GET_RIDES_ERROR /> should add user data to state', () => {
    const action = {
      type: 'GET_RIDES_ERROR',
      payload: getUser.data.data
    };
    const state = rides(undefined, action);
    expect(state).toEqual({ ...initialState, loading: false });
  });
});

describe('Get single ride reducer test', () => {
  const initialState = {
    rideOffers: [],
    loading: true
  };
  it('should set initial state', () => {
    const state = rides(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('< GET_SINGLE_RIDE/>should set loading to true', () => {
    const action = { type: 'GET_SINGLE_RIDE' };
    const state = rides(undefined, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('<GET_SINGLE_RIDE_SUCCESS /> should add user data to state', () => {
    const action = {
      type: 'GET_SINGLE_RIDE_SUCCESS',
      payload: getUser.data.data
    };
    const state = rides(undefined, action);
    expect(state).toEqual({ loading: true, rideOffers: [] });
  });
  it('<GET_SINGLE_RIDE_ERROR /> should add user data to state', () => {
    const action = {
      type: 'GET_SINGLE_RIDE_ERROR',
      payload: getUser.data.data
    };
    const state = rides(undefined, action);
    expect(state).toEqual({ loading: true, rideOffers: [] });
  });
});

describe('Get request reducer test', () => {
  const initialState = {
    rideOffers: [],
    loading: true
  };
  it('should set initial state', () => {
    const state = rides(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('< GET_REQUEST/>should set loading to true', () => {
    const action = { type: 'GET_REQUEST' };
    const state = rides(undefined, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('<GET_REQUEST_SUCCESS /> should add user data to state', () => {
    const action = {
      type: 'GET_REQUEST_SUCCESS',
      payload: getUser.data.data
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...initialState, ...action.payload, loading: false, isAuthenticated: true
    });
  });
  it('<GET_REQUEST_ERROR /> should add user data to state', () => {
    const action = {
      type: 'GET_REQUEST_ERROR',
      payload: getUser.data.data
    };
    const state = rides(undefined, action);
    expect(state).toEqual({ ...initialState, loading: false });
  });
});
describe('Get request action reducer test', () => {
  const initialState = {
    rideOffers: [],
    loading: true
  };
  it('should set initial state', () => {
    const state = rides(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('< REQUEST_ACTION/>should set loading to true', () => {
    const action = { type: 'REQUEST_ACTION' };
    const state = rides(undefined, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('<REQUEST_ACTION_SUCCESS /> should add user data to state', () => {
    const action = {
      type: 'REQUEST_ACTION_SUCCESS',
      payload: getUser.data.data
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...initialState, ...action.payload, loading: false, isAuthenticated: true
    });
  });
  it('<REQUEST_ACTION_ERROR /> should add user data to state', () => {
    const action = {
      type: 'REQUEST_ACTION_ERROR',
      payload: getUser.data.data
    };
    const state = rides(undefined, action);
    expect(state).toEqual({ ...initialState, loading: false });
  });
});
