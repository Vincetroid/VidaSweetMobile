import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GuestScreen } from '../../screens/GuestScreen';
import { SignInScreen, SignUpScreen } from '@/screens';

const Stack = createNativeStackNavigator();

export const GuestNavigator = () => {
  console.log('GuestNav');
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="Guest" component={GuestScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: 'Regístrate' }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: 'Sign In' }}
      />
    </Stack.Navigator>
  );
};
