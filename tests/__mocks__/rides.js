const rides = {
  data: {
    rideOffers: [
      {
        id: 9,
        rideTitle: 'heading towards surulere',
        location: 'Yaba',
        destination: 'surulere',
        departureTime: '2018-10-12T00:00:00.000Z',
        noOfSeats: 2,
        createdAt: '2018-11-01T06:31:12.247Z',
        startsAt: null,
        expiresAt: null,
        rideOwnerId: 69
      },
      {
        id: 10,
        rideTitle: 'Heading to lagos Island',
        location: 'Yaba',
        destination: 'lagos Island',
        departureTime: '2018-11-14T00:00:00.000Z',
        noOfSeats: 2,
        createdAt: '2018-11-02T10:58:25.624Z',
        startsAt: null,
        expiresAt: null,
        rideOwnerId: 69
      },
      {
        id: 11,
        rideTitle: 'Going to E-center',
        location: 'Sabo',
        destination: 'E-center yaba',
        departureTime: '2018-11-05T00:00:00.000Z',
        noOfSeats: 1,
        createdAt: '2018-11-02T10:59:30.022Z',
        startsAt: null,
        expiresAt: null,
        rideOwnerId: 69
      }
    ],
    message: 'All ride offers',
  }
};
const singleRide = {
  data: {
    message: 'Found One ride offer',
    rideOffer: {
      id: 9,
      rideTitle: 'heading towards surulere',
      location: 'Yaba',
      destination: 'surulere',
      departureTime: '2018-10-12T00:00:00.000Z',
      noOfSeats: 2,
      createdAt: '2018-11-01T06:31:12.247Z',
      startsAt: null,
      expiresAt: null,
      rideOwnerId: 69
    }
  }
};
const rideownerInfo = {
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
};

export { singleRide, rideownerInfo, rides };
