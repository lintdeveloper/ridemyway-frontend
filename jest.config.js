module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '!src/components/**/*.{js,jsx}',
    '!src/pages/**/*.{js,jsx}',
    '!src/server/**/*.{js,jsx}',
    'src/store/actions/**/*.{js,jsx}',
    '!src/store/reducers/index.js',
    'src/store/reducers/auth.js',
    'src/store/reducers/rides.js',
    'src/store/reducers/rideDetails.js',
    'src/store/reducers/joinRide.js',
    '!src/store/index.js'
  ],
  testMatch: [
    '<rootDir>/tests/**/?(*.)(spec|test).js?(x)',
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '/index.js/',
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '^Pages(.*)$': '<rootDir>/src/pages$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^images(.*)$': '<rootDir>/public/assets/img$1',
  },
  setupTestFrameworkScriptFile: '<rootDir>tests/setup/setupEnzyme.js',
};
