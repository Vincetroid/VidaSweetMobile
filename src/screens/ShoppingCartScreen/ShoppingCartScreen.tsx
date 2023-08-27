import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { gStyles } from '@/global-styles';
import { Menu, ProductRow, RowTitle } from '@/components';
import { ProductItem } from '@/types';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from './ShoppingCartScreen.styles';

export const ShoppingCartScreen = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();

  const productsLength = true;

  const product1 = {
    id: '49302897-4fd7-42cb-914c-629f358672b3',
    img: require('@/assets/products/ice-cream-liter.jpeg'),
    title: 'Helado 1l',
    price: 150.0,
    isFavorite: false,
  } as ProductItem;
  const product2 = {
    id: 'd90e703e-7cb9-4a28-86c5-c2921d170a55',
    img: require('@/assets/products/ice-cream-single.jpeg'),
    title: 'Helado sencillo',
    price: 60.5,
    isFavorite: true,
  } as ProductItem;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {productsLength ? (
        <ScrollView contentContainerStyle={[gStyles.gralMargin]}>
          <ProductRow product={product1} />
          <ProductRow product={product2} />
        </ScrollView>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* <ScrollView contentContainerStyle={[gStyles.gralContainer]}> */}
          <View style={styles.emptyCardImage}>
            <FontAwesomeIcon icon="shopping-cart" size={160} />
          </View>
          <RowTitle title={t('EmptyCartTitle')} centered />
          <Text style={styles.emptyCartMsg}>{t('EmptyCartMessage')}</Text>
          <Menu />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
