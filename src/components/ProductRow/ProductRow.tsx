import React from 'react';
import { Image, Text, View } from 'react-native';
import { ProductItem } from '@/interfaces';
import { AddRemoveProduct } from '@/components/AddRemoveProduct';
import { AddRemoveToFavorites } from '@/components/AddRemoveToFavorites';
import { useAppSelector } from '@/hooks';
import { useFetchProductImages } from '@/hooks/useFetchProductImages';
import { formatCurrency, getProductTitleByLanguage } from '@/utils';
import { styles } from './ProductRow.styles';

interface ProductRowProps {
  product: ProductItem;
  disabled: boolean | undefined;
}

export const ProductRow = ({ product, disabled = false }: ProductRowProps) => {
  const { img, title, titleEng, isFavorite = false } = product;
  const { cartProducts } = useAppSelector(state => state.cart);

  const { currentImage } = useFetchProductImages(img);

  const getProductPrice = (docId: string) => {
    if (cartProducts[docId] && cartProducts[docId].subtotal) {
      return formatCurrency(cartProducts[docId].subtotal);
    }
    return 0;
  };

  const getProductQuantity = (docId: string) => {
    if (cartProducts[docId] && cartProducts[docId].quantity) {
      return cartProducts[docId].quantity;
    }
    return 0;
  };

  return (
    <View style={styles.wrapper}>
      {!disabled ? (
        <AddRemoveToFavorites
          isFavorite={isFavorite}
          size={18}
          wrapperStyle={styles.heartWrapperStyle}
        />
      ) : null}
      <View style={styles.leftZone}>
        <Image
          style={styles.img}
          source={{
            uri: currentImage,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.centerZone}>
        <Text style={styles.productTitle}>
          {getProductTitleByLanguage(title, titleEng)}
        </Text>
        {!disabled ? <AddRemoveProduct product={product} /> : null}
      </View>
      {!disabled ? (
        <View style={styles.rightZone}>
          <Text style={styles.productPrice}>
            {getProductPrice(product.docId)}
          </Text>
        </View>
      ) : (
        <View style={styles.rightZoneQuantity}>
          <Text style={styles.productQuantity}>
            {getProductQuantity(product.docId)}
          </Text>
        </View>
      )}
    </View>
  );
};
