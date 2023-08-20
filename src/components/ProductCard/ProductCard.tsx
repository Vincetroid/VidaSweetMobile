import { useState } from 'react';
import { Colors, themeStyles } from '@/global-styles';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ProductItem } from '@/types';
import { formatCurrency } from '@/utils';
import { useTranslation } from 'react-i18next';

export const ProductCard = ({ product }: { product: ProductItem }) => {
  const { t } = useTranslation();
  const { img, title, price, isFavorite = false } = product;

  const [favorite, setfavorite] = useState(isFavorite);

  const onPressHeart = () => {
    setfavorite(!favorite);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.heartWrapper} onPress={onPressHeart}>
        {favorite ? (
          <FontAwesomeIcon
            icon={faHeart}
            size={24}
            style={styles.heartIconSelected}
          />
        ) : (
          <FontAwesomeIcon
            // icon="fa-regular fa-heart"
            icon={faHeart}
            size={24}
            style={styles.heartIconNotSelected}
          />
        )}
      </TouchableOpacity>
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

const cardGap = 30;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

const styles = StyleSheet.create({
  wrapper: {
    width: cardWidth,
    marginBottom: cardGap,
  },
  heartWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 3,
    right: 3,
  },
  addBtn: {
    marginTop: 10,
    backgroundColor: themeStyles.secondary,
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  addText: {
    marginLeft: 10,
    color: themeStyles.primary,
  },
  productTitle: {
    textAlign: 'center',
    fontFamily: 'Lato Bold',
    fontSize: 16,
    marginVertical: 2,
  },
  productPrice: {
    textAlign: 'center',
    fontFamily: 'Lato Light',
    fontSize: 14,
    marginVertical: 2,
  },
  icon: {
    color: themeStyles.primary,
  },
  img: {
    width: 150,
    height: 'auto',
    aspectRatio: 1,
  },
  heartIconSelected: {
    color: themeStyles.secondary,
  },
  heartIconNotSelected: {
    color: Colors.grayLight,
  },
});
