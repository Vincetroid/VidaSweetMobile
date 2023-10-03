import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import addFontAwesomeIcons from './src/assets/icons/FontAwesomeIconsHandler';
import { ChatWrapper } from './src/components/ChatWrapper/ChatWrapper';
import { themeStyles } from './src/global-styles/Theme';
import { GuestNavigator } from './src/navigators/GuestNavigator/GuestNavigator';
import { UserNavigator } from './src/navigators/UserNavigator/UserNavigator';
import { store } from './src/redux-content/store';
import { SplashScreen } from './src/screens/SplashScreen/SplashScreen';
import './i18n.config';

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
