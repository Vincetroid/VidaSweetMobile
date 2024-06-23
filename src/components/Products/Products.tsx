import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { FontSizes } from '@/global-styles';
import { ProductItem } from '@/interfaces';
import { FullScreenLoader, ProductCard, RowTitle } from '@/components';

interface ProductsProps {
  loader: boolean;
  products: ProductItem[];
}

export const Products = ({ loader, products }: ProductsProps) => {
  const { t } = useTranslation();

  return (
    <SafeAreaView testID="home-screen">
      {loader ? <FullScreenLoader /> : null}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.productsLabel}>
          <RowTitle
            title={t('Products')}
            styleTextTitle={styles.productsTitle}
            centered
          />
        </View>

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
  productsLabel: {
    marginHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 16,
  },
  productsTitle: {
    paddingLeft: 0,
    marginTop: 2,
    fontSize: FontSizes.xx_medium,
    marginBottom: 10,
  },
  productsSecondaryTitle: {
    fontSize: FontSizes.x_medium,
  },
});
