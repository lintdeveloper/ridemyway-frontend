import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../../src/store/actions/auth';
import { getUser, error } from '../../__mocks__/auth';
import token from '../../token';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const initialState = {
  isAuthenticated: false,
  loading: false,
};

describe('Get user action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('It should fetch a user profile', (done) => {
    moxios.stubRequest('/profile/69', { status: 200, res: getUser.data });
    const expectedActions1 = [
      { type: 'GET_USER' }

    ];
    const store = mockStore(initialState);
    store.dispatch(actions.fetchUser(69, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should fetch a user profile', (done) => {
    moxios.stubRequest('/profile/-----', { status: 404, res: error.response });
    const expectedActions1 = [
      { type: 'GET_USER_ERROR' }

    ];
    const store = mockStore(initialState);
    store.dispatch(actions.fetchUser(69, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should fetch a user profile', (done) => {
    moxios.stubRequest('/profile/-----', { status: 401, res: error.response });
    const expectedActions1 = [
      { type: 'GET_USER_ERROR' }

    ];
    const store = mockStore(initialState);
    store.dispatch(actions.fetchUser(69, { push: jest.fn() })).then(() => {
      expect(store.getActions()).toEqual(expectedActions1);
      done();
    });
    done();
  });
  it('It should login a user ', async (done) => {
    moxios.stubRequest('/auth/signin', { status: 200, res: getUser.data });
    const expectedActions2 = [
      { type: 'LOGIN' }
    ];
    const store = mockStore(initialState);
    await store.dispatch(actions.login({ email: 'joeeasy@gmail.com', password: '000000' }, window.history))
      .then(expect(store.getActions()).toEqual(expectedActions2));
    done();
  });
  it('It should signup a user ', async (done) => {
    moxios.stubRequest('/auth/signup', { status: 200, res: getUser.data });
    const expectedActions3 = [
      { type: 'CREATE_ACCOUNT' }
    ];
    const store = mockStore(initialState);
    await store.dispatch(actions.createAccount({ email: 'joeeasy@gmail.com', password: '000000' }, window.history))
      .then(expect(store.getActions()).toEqual(expectedActions3));
    done();
  });

  it('It should not signup a user ', async (done) => {
    moxios.stubRequest('/auth/signup', { status: 400, response: error.response });
    const expectedActions3 = [
      { type: 'CREATE_ACCOUNT' }
    ];
    const store = mockStore(initialState);

    await store.dispatch(actions.createAccount({ email: 'joeeasy@gmail.com', password: '000000' }, window.history))
      .then(expect(store.getActions()).toEqual(expectedActions3));
    done();
  });
  it('It should not login a user ', (done) => {
    moxios.stubRequest('/auth/singin', { status: 400, response: error.response });
    const expectedActions4 = [
      { type: 'LOGIN' }
    ];
    const store = mockStore(initialState);

    store.dispatch(actions.login({ email: 'joeeasy@gmail.com', password: '' }, window.history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions4);
        done();
      });
    done();
  });
});
