import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserNavigator } from './src/navigators/UserNavigator/UserNavigator';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <UserNavigator />
    </NavigationContainer>
  );
};

export default App;
