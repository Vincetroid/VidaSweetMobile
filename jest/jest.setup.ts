jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

jest.mock('@stripe/stripe-react-native', () => ({
  StripeProvider: jest.fn(({ children }) => children),
  CardField: jest.fn(() => null),
  presentPaymentSheet: jest.fn(),
  initPaymentSheet: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.NativeModules.SettingsManager = {
    settings: {
      AppleLocale: 'es-MX',
      AppleLanguages: ['es-MX', 'en-US'],
    },
  };
  return RN;
});

jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    auth: jest.fn(),
    onAuthStateChanged: jest.fn(),
  });
});
