import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserNavigator } from './src/navigators/UserNavigator/UserNavigator';
import { GuestNavigator } from './src/navigators/GuestNavigator/GuestNavigator';
import { Splash } from './src/components/Splash';

const App = () => {
  const [loadingApp, setLoadingApp] = useState(true);
  const authenticatedUser = false;

  // useEffect(() => {
  //   if (loadingApp) {

  //   }

  // }, []);

  if (loadingApp) {
    return <Splash />;
  }

  // return (
  //   <NavigationContainer>
  //     {authenticatedUser ? <UserNavigator /> : <GuestNavigator />}
  //   </NavigationContainer>
  // );
};

export default App;
