import React from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontSizes } from '@/global-styles';
import {
  AddressScreen,
  // CakeryScreen,
  DeliveryAddressScreen,
  HomeNavigationOptions,
  HomeScreen,
  IceCreamScreen,
  PrePurchaseSummaryScreen,
  ScheduleScreen,
  SettingsScreen,
  ShoppingCartScreen,
} from '@/screens';
import {
  // faCakeCandles,
  faGear,
  faHome,
  faIceCream,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { CommonNavigationOptions } from './CommonNavigationOptions';

const Tab = createBottomTabNavigator();
const UserStack = createNativeStackNavigator();

export function UserNavigator() {
  const { t } = useTranslation();

  return (
    <UserStack.Navigator screenOptions={CommonNavigationOptions}>
      <UserStack.Screen
        name="MainRoot"
        component={TabsUserNavigator}
        options={HomeNavigationOptions}
      />
      <UserStack.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{
          title: t('Cart'),
        }}
      />
      <UserStack.Screen
        name="DeliveryAddress"
        component={DeliveryAddressScreen}
        options={{
          title: t('DeliveryAddress'),
        }}
      />
      <UserStack.Screen
        name="Address"
        component={AddressScreen}
        options={{
          title: t('AddAnAddress'),
        }}
      />
      <UserStack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          title: t('ScheduleDelivery'),
        }}
      />
      <UserStack.Screen
        name="PrePurchaseSummary"
        component={PrePurchaseSummaryScreen}
        options={{
          title: t('PrePurchaseSummary'),
          headerTitleStyle: {
            fontSize: FontSizes.x_big,
            fontFamily: 'Bartleen Script', // This font causes on Android to be a bit upper on header
          },
        }}
      />
    </UserStack.Navigator>
  );
}

const TabsUserNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
      {/* <Tab.Screen
        name="Cakery"
        component={CakeryScreen}
        options={{
          title: 'Repostería',
          headerShown: false,
          tabBarIcon: () => <FontAwesomeIcon icon={faCakeCandles} size={24} />,
        }}
      /> */}
      <UserStack.Screen
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
