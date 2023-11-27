// import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
//Still facing https://github.com/facebook/react-native/issues/26579 whe DeviceInfo
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.useFakeTimers();

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-navigation/native-stack');

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

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
  return jest.requireActual(
    'react-native/Libraries/Utilities/__mocks__/BackHandler.js',
  );
});

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios', // or 'ios'
  select: () => null,
}));

// jest.mock('react-native/Libraries/Utilities/DeviceInfo');

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
