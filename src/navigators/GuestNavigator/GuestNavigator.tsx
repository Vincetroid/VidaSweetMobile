import React from 'react';
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
        options={GuestNavigatorOptions}
      />
    </Stack.Navigator>
  );
};
