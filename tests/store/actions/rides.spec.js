import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../../src/store/actions/rides';
import { getUser, failure, error } from '../../__mocks__/auth';
import { rideownerInfo, rides, singleRide, } from '../../__mocks__/rides';
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
  it('It should not found message', (done) => {
    moxios.stubRequest('/rides', { status: 404, response: failure.response.data });
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
  it('It should show unauthorize message', (done) => {
    moxios.stubRequest('/rides', { status: 401, response: failure.response.data });
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
    moxios.stubRequest('/rides/9', { status: 200, data: singleRide });
    const expectedActions1 = [
      { type: 'GET_SINGLE_RIDE' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getSingleRide(9, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show not found message', (done) => {
    moxios.stubRequest('/rides/9', { status: 404, response: failure.response.data });
    const expectedActions1 = [
      { type: 'GET_SINGLE_RIDE_ERROR' }

    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getSingleRide(9, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show authorize message', (done) => {
    moxios.stubRequest('/rides/9', { status: 401, response: failure.response.data.data });
    const expectedActions1 = [
      { type: 'GET_SINGLE_RIDE_ERROR' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getSingleRide(9, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
});


describe('create ride offer actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('it should create ride offers', (done) => {
    moxios.stubRequest('/rides', { status: 200, data: singleRide });
    const expectedActions1 = [
      { type: 'CREATE_RIDE' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createRide(singleRide.data.rideOffer, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should response when the status code is 403', (done) => {
    moxios.stubRequest('/rides', { status: 403, response: error.response.data });
    const expectedActions1 = [
      { type: 'CREATE_RIDE_ERROR' }

    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createRide(singleRide.data.rideOffer, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show authorize message', (done) => {
    moxios.stubRequest('/rides', { status: 400, response: failure.response.data.data });
    const expectedActions1 = [
      { type: 'CREATE_RIDE_ERROR' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createRide(singleRide.data.rideOffer, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show authorize message', (done) => {
    moxios.stubRequest('/rides', { status: 401, response: failure.response.data.data });
    const expectedActions1 = [
      { type: 'CREATE_RIDE_ERROR' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createRide(singleRide.data.rideOffer, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
});

describe('Test fetch request actions`', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('It should create a ride offers', (done) => {
    moxios.stubRequest('/users/rides', { status: 200, data: singleRide });
    const input = window.document.createElement('INPUT');
    input.setAttribute('type', 'hidden');
    input.value = 12;
    const expectedActions1 = [
      { type: 'CREATE_RIDE' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createRide(singleRide.data.rideOffer, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should response when the status code is 403', (done) => {
    moxios.stubRequest('/rides', { status: 403, response: error.response.data });
    const expectedActions1 = [
      { type: 'CREATE_RIDE_ERROR' }

    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createRide(singleRide.data.rideOffer, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show authorize message', (done) => {
    moxios.stubRequest('/rides', { status: 400, response: failure.response.data.data });
    const expectedActions1 = [
      { type: 'CREATE_RIDE_ERROR' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createRide(singleRide.data.rideOffer, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should show authorize message', (done) => {
    moxios.stubRequest('/rides', { status: 401, response: failure.response.data.data });
    const expectedActions1 = [
      { type: 'CREATE_RIDE_ERROR' }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.createRide(singleRide.data.rideOffer, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
});
