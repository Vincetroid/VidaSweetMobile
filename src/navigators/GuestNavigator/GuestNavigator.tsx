import React from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ForgotPasswordScreen,
  InitialScreen,
  SignInScreen,
  SignUpScreen,
} from '@/screens';
import { GuestNavigatorOptions } from './GuesNavigationOptions';

const Stack = createNativeStackNavigator();

export const GuestNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName="InitialScreen">
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ ...GuestNavigatorOptions, title: t('ForgotYourPassword') }}
      />
    </Stack.Navigator>
  );
};
