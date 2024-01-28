import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import addFontAwesomeIcons from './src/assets/icons/FontAwesomeIconsHandler';
import { AuthenticatedUser } from './src/components';
import { themeStyles } from './src/global-styles/Theme';
import { useFirebaseAuth } from './src/hooks';
import { GuestNavigator } from './src/navigators/GuestNavigator/GuestNavigator';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen';
import './i18n.config';

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
