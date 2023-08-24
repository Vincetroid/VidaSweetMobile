import { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ProductItem } from '@/types';
import { formatCurrency } from '@/utils';
import { useTranslation } from 'react-i18next';
import { AddRemoveToFavorites } from '../AddRemoveToFavorites';
import { styles } from './ProductCard.styles';

export const ProductCard = ({ product }: { product: ProductItem }) => {
  const { t } = useTranslation();
  const { img, title, price, isFavorite = false } = product;

  const cardGap = 30;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  return (
    <View
      style={{
        width: cardWidth,
        marginBottom: cardGap,
      }}>
      <AddRemoveToFavorites
        isFavorite={isFavorite}
        size={18}
        wrapperStyle={styles.heartWrapper}
      />
      <Image style={styles.img} source={img} resizeMode="contain" />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{formatCurrency(price)}</Text>
      <TouchableOpacity style={styles.addBtn}>
        <FontAwesomeIcon icon="cart-shopping" size={24} style={styles.icon} />
        <Text style={styles.addText}>{t('Add')}</Text>
      </TouchableOpacity>
    </View>
  );
};
