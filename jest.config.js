module.exports = {
  preset: 'react-native',
  testEnvironment: 'node', //AQUI ERA LA SOLUCION
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation|@firebase/firestore)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
    '@firebase/util': require.resolve('@firebase/util'),
  },
  setupFiles: ['<rootDir>/jest/jest.setup.ts'],

  testPathIgnorePatterns: ['/node_modules/', 'lib'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  snapshotResolver: '<rootDir>/jest/snapshotResolver.ts',
  globalSetup: '<rootDir>/jest/global.setup.ts',
};
