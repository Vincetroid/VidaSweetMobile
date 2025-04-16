import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { themeStyles } from '@/global-styles';
import addFontAwesomeIcons from './src/assets/icons/FontAwesomeIconsHandler';
import { AuthenticatedUser } from './src/components';
// import { themeStyles } from './src/global-styles/Theme';
import { GuestNavigator } from './src/navigators/GuestNavigator/GuestNavigator';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen';
import './i18n.config';
LogBox.ignoreAllLogs();
console.warn = () => {};

const App = () => {
  const [loadingApp, setLoadingApp] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(theUser) {
    setUser(theUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  async function requestUserPermission() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.log('Enableddd: ', enabled);
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getMessagingToken = async () => {
    const messagingToken = await messaging().getToken();
    console.log('messagingToken');
    console.log(messagingToken);
    return messagingToken;
  };

  useEffect(() => {
    requestUserPermission();
    getMessagingToken();
    addFontAwesomeIcons();

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    setTimeout(() => {
      setLoadingApp(false);
    }, 1000);

    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  if (loadingApp) {
    return <SplashScreen />;
  }

  const ReactNavigationThemeJustDefaultBgColor = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: themeStyles.background },
  };

  return (
    <NavigationContainer theme={ReactNavigationThemeJustDefaultBgColor}>
      {user ? <AuthenticatedUser /> : <GuestNavigator />}
      {/* Common modal screens just below */}
    </NavigationContainer>
  );
};

export default App;
