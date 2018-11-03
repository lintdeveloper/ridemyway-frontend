const getUser = {
  data: {
    data: {
      message: 'user info',
      user: {
        id: 69,
        email: 'joeeasy@gmail.com         ',
        phone: '07059972180    ',
        firstName: 'joe',
        lastName: 'easy                      ',
        address: '42 montgomery',
        city: 'yaba',
        profile: null,
        createdAt: '2018-11-01T02:47:58.905Z',
        zipCode: '101212'
      }
    }
  }
};
const error = {
  response: {
    data: {
      data: 'Username or password is not correct'
    }
  }
};

const failure = {
  response: {
    data: {
      data: {
        message: 'Username or password is not correct'
      }
    }
  }
};

export { getUser, error, failure };
