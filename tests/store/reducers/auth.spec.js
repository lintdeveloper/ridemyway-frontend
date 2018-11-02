import auth from '../../../src/store/reducers/auth';
import { getUser, failure, error } from '../../__mocks__/auth';

describe('Auth reducer test', () => {
  const initialState = {
    isAuthenticated: false,
    loading: false,
  };
  it('should set initial state', () => {
    const state = auth(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('<LOGIN />should set loading to true', () => {
    const action = { type: 'LOGIN' };
    const state = auth(undefined, action);
    expect(state).toEqual({ ...initialState }, { loading: true });
  });

  it('<LOGIN SUCCESS/> should add user data to state', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      payload: getUser.data.data
    };
    const state = auth(undefined, action);
    expect(state).toEqual({ isAuthenticated: false, loading: false });
  });
  it('<LOGIN_ERROR/> should add user data to state', () => {
    const action = {
      type: 'LOGIN_ERROR',
      payload: getUser.data.data
    };
    const state = auth(undefined, action);
    expect(state).toEqual({ isAuthenticated: false, loading: false });
  });
  it('<CREATE_ACCOUNT /> should set loading to true', () => {
    const action = { type: 'CREATE_ACCOUNT' };
    const state = auth(undefined, action);
    expect(state).toEqual({ isAuthenticated: false, loading: true });
  });
  it('<CREATE_ACCOUNT SUCCESS />should add user data to state', () => {
    const action = {
      type: 'CREATE_ACCOUNT_SUCCESS',
      payload: getUser.data.data
    };
    const state = auth(undefined, action);
    expect(state).toEqual({ isAuthenticated: true, loading: false, ...action.payload });
  });
  it('<CREATE_ACCOUNT ERROR /> should add user data to state', () => {
    const action = {
      type: 'CREATE_ACCOUNT_ERROR',
      payload: getUser.data.data.message
    };
    const state = auth(undefined, action);
    expect(state).toEqual({ isAuthenticated: false, loading: false, message: 'user info' });
  });
  it('<CREATE_ACCOUNT ERROR/>should add user data to state', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      payload: getUser.data.data
    };
    const state = auth(undefined, action);
    expect(state).toEqual({ isAuthenticated: false, loading: false });
  });
  it('<GET USER PROFILE /> should set loading to true', () => {
    const action = { type: 'GET_USER' };
    const state = auth(undefined, action);
    expect(state).toEqual({ isAuthenticated: false, loading: true });
  });
  it('<GET USER SUCCESS /> should add user data to state', () => {
    const action = {
      type: 'GET_USER_SUCCESS',
      payload: getUser.data.data
    };
    const state = auth(undefined, action);
    expect(state).toEqual({
      isAuthenticated: true,
      loading: false,
      message: 'user info',
      user: {
        address: '42 montgomery', city: 'yaba', createdAt: '2018-11-01T02:47:58.905Z', email: 'joeeasy@gmail.com         ', firstName: 'joe', id: 69, lastName: 'easy                      ', phone: '07059972180    ', profile: null, zipCode: '101212'
      }
    });
  });
  it('<GET USER ERROR /> should add user data to state', () => {
    const action = {
      type: 'GET_USER_ERROR',
      payload: getUser.data.data.message
    };
    const state = auth(undefined, action);
    expect(state).toEqual({ isAuthenticated: false, loading: false, message: 'user info' });
  });

  // it('should return an error message while fetching articles', () => {
  //   const action = {
  //     type: 'FETCH_ARTICLE_FAIL',
  //     error: 'will you keep quiet'
  //   };
  //   const state = article(undefined, action);
  //   expect(state).toEqual({
  //     ...mockData,
  //     articles: [],
  //     loading: false,
  //     error: action.error
  //   });
  // });

  // it('should return an error message while fetching articles', () => {
  //   const action = {
  //     type: 'SET_HERO_CONTENT',
  //     heroContent: {
  //       poster: 'banner',
  //       name: "AUTHOR'S HAVEN",
  //       description:
  //         'A community where readers and writers come together to share and discuss knowledge and ideas.',
  //       buttonIsVisible: true,
  //       className: 'hero'
  //     }
  //   };
  //   const state = article(undefined, action);
  //   expect(state).toEqual({
  //     ...mockData,
  //     heroContent: {
  //       ...action.heroContent
  //     }
  //   });
  // });
});
