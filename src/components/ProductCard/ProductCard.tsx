import { gStyles, themeStyles } from '@/global-styles';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ProductItem } from '@/types';
import { formatCurrency } from '@/utils';

export const ProductCard = ({ product }: { product: ProductItem }) => {
  const { img, title, price } = product;
  return (
    <View style={[gStyles.gralMargin, gStyles.gralContainer, styles.wrapper]}>
      <TouchableOpacity style={styles.heartWrapper}>
        <FontAwesomeIcon icon="heart" size={24} />
      </TouchableOpacity>
      <Image style={styles.img} source={img} resizeMode="contain" />
      <Text>{title}</Text>
      <Text>{formatCurrency(price)}</Text>
      <TouchableOpacity style={styles.addBtn}>
        <FontAwesomeIcon icon="cart-shopping" size={24} />
        <Text style={styles.addText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'green',
    width: '40%',
  },
  heartWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 3,
    right: 3,
  },
  addBtn: {
    marginTop: 10,
    backgroundColor: themeStyles.tertiary,
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    marginLeft: 10,
  },
  img: {
    width: 150,
    height: 'auto',
    aspectRatio: 1,
  },
});
