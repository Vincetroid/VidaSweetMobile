import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserNavigator } from './src/navigators/UserNavigator/UserNavigator';
import { GuestNavigator } from './src/navigators/GuestNavigator/GuestNavigator';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen';

const App = () => {
  const [loadingApp, setLoadingApp] = useState(true);
  const authenticatedUser = true;

  useEffect(() => {
    setTimeout(() => {
      setLoadingApp(false);
    }, 3000);
  }, []);

  if (loadingApp) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {authenticatedUser ? <UserNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
};

export default App;
