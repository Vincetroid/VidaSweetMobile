import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { gStyles } from '@/global-styles';
import { MenuElementItem } from '@/interfaces';
import { MenuElement } from '@/components/MenuElement';
import { styles } from './Menu.styles';

export const Menu = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const menuItem1 = {
    img: require('@/assets/products/ice-cream-single3.jpeg'),
    title: t('IceCreams'),
  } as MenuElementItem;
  const menuItem2 = {
    img: require('@/assets/products/cake-menu1.jpeg'),
    title: t('Cakes'),
  } as MenuElementItem;
  const menuItem3 = {
    img: require('@/assets/products/cupcakes-menu.jpeg'),
    title: t('Cupcakes'),
  } as MenuElementItem;
  const menuItem4 = {
    img: require('@/assets/products/cookies-menu1.jpeg'),
    title: t('Cookies'),
  } as MenuElementItem;

  return (
    <View style={[gStyles.gralMargin, styles.container]}>
      <MenuElement element={menuItem1} />
      <MenuElement element={menuItem2} />
      <MenuElement element={menuItem3} />
      <MenuElement element={menuItem4} />
    </View>
  );
};
