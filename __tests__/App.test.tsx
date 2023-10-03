import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//TODO: Solve
// Invariant Violation: TurboModuleRegistry.getEnforcing(...): 'PlatformConstants' could not be found. Verify that a module by this name is registered in the native binary.
// Some guidance but to start: https://react-native-async-storage.github.io/async-storage/docs/help/troubleshooting/#ios-cocoapods-issues
it('renders correctly', () => {
  renderer.create(<App />);
});
