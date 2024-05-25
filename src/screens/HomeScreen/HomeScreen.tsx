import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SliderBox } from 'react-native-image-slider-box';
import { FullScreenLoader, Menu, ProductCard, RowTitle } from '@/components';
import { useFetchProducts } from '@/hooks/useFetchProducts';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
];

export const HomeScreen = () => {
  const { t } = useTranslation();
  const { loader, setLoader, products, setProducts, pullProducts } =
    useFetchProducts();

  return (
    <SafeAreaView testID="home-screen">
      {loader ? <FullScreenLoader /> : null}
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <SliderBox images={images} />

        <RowTitle title={t('Menu')} centered />

        <Menu />

        <RowTitle title={t('TopSellers')} />

        <View style={[styles.container]}>
          {products.map(product => {
            return <ProductCard product={product} />;
          })}
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
    margin: 16,
  },
});
