import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { gStyles } from '@/global-styles';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { MenuElement, RowTitle } from '@/components';
import { MenuElementItem, ProductItem } from '@/types';
import { useTranslation } from 'react-i18next';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
];

export const HomeScreen = () => {
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

  const product1 = {
    img: require('@/assets/products/ice-cream-liter.jpeg'),
    title: 'Helado 1l',
    price: 150.0,
    isFavorite: false,
  } as ProductItem;
  const product2 = {
    img: require('@/assets/products/ice-cream-single.jpeg'),
    title: 'Helado sencillo',
    price: 60.5,
    isFavorite: true,
  } as ProductItem;

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <SliderBox images={images} />

        <RowTitle title={t('Menu')} centered />

        <View style={[gStyles.gralMargin, styles.container]}>
          <MenuElement element={menuItem1} />
          <MenuElement element={menuItem2} />
          <MenuElement element={menuItem3} />
          <MenuElement element={menuItem4} />
        </View>

        <RowTitle title={t('TopSellers')} />

        <View style={[gStyles.gralMargin, styles.container]}>
          <ProductCard product={product1} />
          <ProductCard product={product2} />
          <ProductCard product={product1} />
          <ProductCard product={product2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg2: {
    // backgroundColor: themeStyles.white,
    // backgroundColor: 'ghostwhite'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
