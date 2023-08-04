import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CakeryScreen,
  HomeScreen,
  IceCreamScreen,
  SettingsScreen,
} from '@/screens';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const UserNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="IceCream"
        component={IceCreamScreen}
        options={{
          title: 'Heladería',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon="ice-cream" size={24} />,
        }}
      />
      <Tab.Screen
        name="Cakery"
        component={CakeryScreen}
        options={{
          title: 'Repostería',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon="cake-candles" size={24} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Opciones',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon="gear" size={24} />,
        }}
      />
    </Tab.Navigator>
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    // </Stack.Navigator>
  );
};
