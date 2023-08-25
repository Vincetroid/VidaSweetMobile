import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux-content';
import { UserNavigator } from './src/navigators/UserNavigator/UserNavigator';
import { GuestNavigator } from './src/navigators/GuestNavigator/GuestNavigator';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen';
import addFontAwesomeIcons from './src/assets/icons/FontAwesomeIconsHandler';
import './i18n.config';
import { ChatWrapper } from './src/components/ChatWrapper/ChatWrapper';
import { themeStyles } from './src/global-styles/Theme';

const App = () => {
  const [loadingApp, setLoadingApp] = useState(true);
  const authenticatedUser = true;

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
      {authenticatedUser ? (
        <Provider store={store}>
          <ChatWrapper>
            <UserNavigator />
          </ChatWrapper>
        </Provider>
      ) : (
        <GuestNavigator />
      )}
      {/* Common modal screens just below */}
    </NavigationContainer>
  );
};

export default App;
