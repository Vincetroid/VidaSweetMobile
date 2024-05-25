import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-simple-toast';
import { getProductImage } from '@/fb/storageQueries';
import { Colors } from '@/global-styles';
import { ProductItem } from '@/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addProduct } from '@/redux-content';
import { useAppDispatch } from '@/hooks';
import { formatCurrency } from '@/utils';
import { AddRemoveToFavorites } from '../AddRemoveToFavorites';
import { styles } from './ProductCard.styles';

export const ProductCard = ({ product }: { product: ProductItem }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { img, title, price, isFavorite = false } = product;
  const [currentImage, setCurrentImage] = useState<string>('');

  const cardGap = 30;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  const onAddProduct = () => {
    dispatch(addProduct(product));

    Toast.showWithGravityAndOffset(
      t('ProductAddedToCart'),
      Toast.LONG,
      Toast.BOTTOM,
      0,
      -150,
      {
        backgroundColor: Colors.grayLightBg,
        textColor: Colors.boldPink,
      },
    );
  };

  // ESTA LOGICA VA AL HOOK useFetchProductImages
  const init = async () => {
    const productImage = await getProductImage(img.toString());
    setCurrentImage(productImage);
  };

  useEffect(() => {
    init();
  }, []);

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
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: currentImage,
          }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{formatCurrency(price)}</Text>
      <TouchableOpacity style={styles.addBtn} onPress={onAddProduct}>
        <FontAwesomeIcon icon="cart-shopping" size={24} style={styles.icon} />
        <Text style={styles.addText}>{t('Add')}</Text>
      </TouchableOpacity>
    </View>
  );
};
