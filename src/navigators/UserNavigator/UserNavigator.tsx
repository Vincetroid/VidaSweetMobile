import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CakeryScreen,
  DeliveryAddressScreen,
  HomeNavigationOptions,
  HomeScreen,
  IceCreamScreen,
  SettingsScreen,
  ShoppingCartScreen,
} from '@/screens';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Colors, FontSizes } from '@/global-styles';
import { ShoppingCartButton } from '@/components';
import { CommonNavigationOptions } from './CommonNavigationOptions';
import {
  faCakeCandles,
  faGear,
  faHome,
  faIceCream,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
  const { t } = useTranslation();

  return (
    <MainStack.Navigator screenOptions={CommonNavigationOptions}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={HomeNavigationOptions}
      />
      <MainStack.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{
          title: t('Cart'),
        }}
      />
      <MainStack.Screen
        name="DeliveryAddress"
        component={DeliveryAddressScreen}
        options={{
          title: t('DeliveryAddress'),
        }}
      />
    </MainStack.Navigator>
  );
}

export const UserNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainRoot"
        component={MainStackNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon={faHome} size={24} />,
        }}
      />
      <Tab.Screen
        name="IceCream"
        component={IceCreamScreen}
        options={{
          title: 'Heladería',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon={faIceCream} size={24} />,
        }}
      />
      <Tab.Screen
        name="Cakery"
        component={CakeryScreen}
        options={{
          title: 'Repostería',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon={faCakeCandles} size={24} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Opciones',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon={faGear} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
