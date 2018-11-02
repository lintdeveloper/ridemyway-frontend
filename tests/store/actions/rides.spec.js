import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../../src/store/actions/rides';
import { getUser, failure } from '../../__mocks__/auth';
import { rideownerInfo, rides, singleRide,  } from '../../__mocks__/rides';
import token from '../../token';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  isAuthenticated: false,
  loading: false,
};
window.localStorage.setItem('user', JSON.stringify({ token }));
describe('Test rides actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('It should fetch all ride offers', (done) => {
    moxios.stubRequest('/rides', { status: 200, data: rides });
    const expectedActions1 = [
      { type: 'GET_RIDES' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getRides({ push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show not message', (done) => {
    moxios.stubRequest('/rides', { status: 404, data: failure.response.data });
    const expectedActions1 = [
      { type: 'GET_RIDES_ERROR' }

    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getRides({ push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show not message', (done) => {
    moxios.stubRequest('/rides', { status: 401, data: failure.response.data });
    const expectedActions1 = [
      { type: 'GET_RIDES_ERROR' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getRides({ push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
});


describe('Test single rides actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('It should fetch all ride offers', (done) => {
    moxios.stubRequest('/rides/1', { status: 200, data: rides });
    const expectedActions1 = [
      { type: 'GET_SINGLE_RIDE' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getRides({ push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show not message', (done) => {
    moxios.stubRequest('/rides/1', { status: 404, data: failure.response.data });
    const expectedActions1 = [
      { type: 'GET_RIDES_ERROR' }

    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getRides({ push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show not message', (done) => {
    moxios.stubRequest('/rides', { status: 401, data: failure.response.data });
    const expectedActions1 = [
      { type: 'GET_RIDES_ERROR' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getRides({ push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
});
