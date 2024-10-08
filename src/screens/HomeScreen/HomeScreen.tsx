import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SliderBox } from 'react-native-image-slider-box';
import { FontSizes } from '@/global-styles';
import {
  FullScreenLoader,
  Menu,
  OrderInProgressIndicator,
  ProductCard,
  RowTitle,
} from '@/components';
import { useFetchProducts } from '@/hooks/useFetchProducts';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/vida-sweet.appspot.com/o/cookies.jpeg?alt=media&token=3b9e5380-6ad7-42a2-b48f-923ed599ed21',
  'https://firebasestorage.googleapis.com/v0/b/vida-sweet.appspot.com/o/fresa.jpg?alt=media&token=ff5a9ab4-b7fc-4958-a019-d8ecfb64212d',
  'https://firebasestorage.googleapis.com/v0/b/vida-sweet.appspot.com/o/limon.jpeg?alt=media&token=82277e18-ac14-4488-821e-b34f4254b51d',
  'https://firebasestorage.googleapis.com/v0/b/vida-sweet.appspot.com/o/mamey.jpeg?alt=media&token=dbdc8e46-30bd-4871-8c85-c396140c2654',
];

export const HomeScreen = () => {
  const { t } = useTranslation();
  const { loader, products } = useFetchProducts();

  return (
    <SafeAreaView testID="home-screen">
      <OrderInProgressIndicator showOrderInProgress />
      {loader ? <FullScreenLoader /> : null}
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <SliderBox images={images} />

        <RowTitle title={t('Menu')} centered />

        <RowTitle title={t('TopSellers')} />

        <View style={[styles.container]}>
          {products.map(product => {
            return <ProductCard product={product} />;
          })}
        </View>

        <Menu />

        {/* <RowTitle title={t('¿No encontraste lo que buscabas?')} centered /> */}
        <RowTitle
          title={t('¿No encontraste lo que buscabas?')}
          styleTextTitle={styles.label}
          styleSecondaryTextTitle={{
            fontFamily: 'Lato Regular',
            fontSize: FontSizes.x_medium,
            alignSelf: 'center',
          }}
          centered
        />
        <RowTitle
          // title={t('¡Intenta con un pedido personalizado!')}
          title={t('Para pedidos especiales y personalizados, da click aquí:')}
          styleTextTitle={styles.label}
          styleSecondaryTextTitle={{
            fontFamily: 'Lato Regular',
            fontSize: FontSizes.medium,
          }}
          // centered
        />
        {/* <RowTitle
          title={t('')}
          styleTextTitle={styles.label}
          styleSecondaryTextTitle={{
            fontFamily: 'Lato Regular',
            fontSize: FontSizes.medium,
            alignSelf: 'center',
          }}
          centered
        /> */}
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
  label: {
    fontFamily: 'Lato Light',
    paddingLeft: 16,
    fontSize: FontSizes.xx_medium,
  },
});
