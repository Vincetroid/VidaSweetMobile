import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialScreen, SignInScreen, SignUpScreen } from '@/screens';

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
    </Stack.Navigator>
  );
};
