import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../../App';

// No funciona porque devuelve Invariant Violation: TurboModuleRegistry.getEnforcing(...): 'DeviceInfo' could not be found. Verify that a module by this name is registered in the native binary.

//    1 | import { StyleSheet } from 'react-native';
//      2 |
//    > 3 | export const gStyles = StyleSheet.create({
//        |                        ^
//      4 |   gralContainer: {
//      5 |     flex: 1,
//      6 |     alignItems: 'center',

// describe('App', () => {
//   // eslint-disable-next-line jest/no-disabled-tests
//   test.skip('Should render correctly', () => {
//     render(<App />);
//   });
// });
