import joinRide from '../../../src/store/reducers/joinRide';
import { getUser, failure, error } from '../../__mocks__/auth';

describe('Auth reducer test', () => {
  const initialState = {
    loading: true,
  };
  it('should set initial state', () => {
    const state = joinRide(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('<JOIN_RIDE />should set loading to true', () => {
    const action = { type: 'JOIN_RIDE' };
    const state = joinRide(undefined, action);
    expect(state).toEqual({ loading: true });
  });

  it('<JOIN RIDE SUCCESS/> should add user data to state', () => {
    const action = {
      type: 'JOIN_RIDE_SUCCESS',
      payload: getUser.data.data
    };
    const state = joinRide(undefined, action);
    expect(state).toEqual({ isAuthenticated: true, loading: false, ...action.payload });
  });
  it('<JOIN RIDE EROR/> should add user data to state', () => {
    const action = {
      type: 'JOIN_RIDE_ERROR',
      payload: getUser.data.data
    };
    const state = joinRide(undefined, action);
    expect(state).toEqual({ loading: false });
  });
});
