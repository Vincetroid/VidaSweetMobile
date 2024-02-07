import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import functions from '@react-native-firebase/functions';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import addFontAwesomeIcons from './src/assets/icons/FontAwesomeIconsHandler';
import { AuthenticatedUser } from './src/components';
import { themeStyles } from './src/global-styles/Theme';
import { useFirebaseAuth } from './src/hooks';
import { GuestNavigator } from './src/navigators/GuestNavigator/GuestNavigator';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen';
import './i18n.config';
// Use a local emulator in development
if (__DEV__) {
  console.log('INSIDE DEV', __DEV__);
  // If you are running on a physical device, replace http://localhost with the local ip of your PC. (http://192.168.x.x)
  // functions().useEmulator('localhost', 5001);
  console.log(functions);
}

const App = () => {
  const auth = getAuth();
  const authenticatedUser = useFirebaseAuth(auth);
  const [loadingApp, setLoadingApp] = useState(true);
  // const authenticatedUser = true;

  useEffect(() => {
    addFontAwesomeIcons();

    setTimeout(() => {
      setLoadingApp(false);
    }, 1000);
  }, []);

  if (loadingApp) {
    return <SplashScreen />;
  }

  const ReactNavigationThemeJustDefaultBgColor = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: themeStyles.background,
    },
  };

  return (
    <NavigationContainer theme={ReactNavigationThemeJustDefaultBgColor}>
      {authenticatedUser ? <AuthenticatedUser /> : <GuestNavigator />}
      {/* Common modal screens just below */}
    </NavigationContainer>
  );
};

export default App;
