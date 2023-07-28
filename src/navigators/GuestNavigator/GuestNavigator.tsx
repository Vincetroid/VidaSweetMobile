import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GuestScreen } from '../../screens/GuestScreen';

const Stack = createNativeStackNavigator();

export const GuestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Guest" component={GuestScreen} />
    </Stack.Navigator>
  );
};
