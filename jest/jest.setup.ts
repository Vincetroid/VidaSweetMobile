// import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

// jest.useFakeTimers();

// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
// jest.mock('@react-navigation/native-stack');

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

jest.mock('react-native/Libraries/BatchedBridge/NativeModules', () => ({
  SettingsManager: {
    settings: {
      AppleLocal: '',
      AppleLanguages: [''],
    },
  },
}));

// jest.mock('react-native-text-input-mask', () => ({
//   mask: jest.fn(),
//   TextInputMask: 'TextInputMask',
// }));

// jest.mock('react-native-snackbar', () => 'Snackbar');

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

// jest.mock('react-native-text-input-mask', () => 'TextInputMask');

// jest.mock('react-native-snackbar', () => 'Snackbar');

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-native-device-info', () => mockRNDeviceInfo);

// jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
//   return jest.requireActual(
//     'react-native/Libraries/Utilities/__mocks__/BackHandler.js',
//   );
// });

// jest.mock('react-native/Libraries/Utilities/Platform', () => ({
//   OS: 'android', // or 'ios'
//   select: () => null,
// }));

// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// jest.mock('react-native-snackbar', () => ({
//   default: jest.fn(),
// }));

// jest.mock('@react-native-community/geolocation', () => ({
//   setRNConfiguration: jest.fn(),
//   getCurrentPosition: jest.fn(),
//   watchPosition: jest.fn(),
//   clearWatch: jest.fn(),
//   requestAuthorization: jest.fn(),
// }));
