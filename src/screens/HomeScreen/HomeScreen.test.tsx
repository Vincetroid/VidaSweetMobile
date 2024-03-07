import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from './HomeScreen';

describe('HomeScreen', () => {
  test('should render correctly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen');
  });
});
