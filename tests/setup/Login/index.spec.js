import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Login from '../../../src/pages/Login'

const initialState = {
  user: {
    isAuthenticated: false,
    loading: false
  }
}

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;


describe('SignIn page test', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });
  it('Login page to', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

