import { View, Image, Text } from 'react-native';
import { ProductItem } from '@/interfaces';
import { formatCurrency } from '@/utils';
import { AddRemoveProduct, AddRemoveToFavorites } from '@/components';
import { styles } from './ProductRow.styles';
import { useAppSelector } from '@/hooks';

export const ProductRow = ({ product }: { product: ProductItem }) => {
  const { id, img, title, price, isFavorite = false } = product;
  const { cartProducts } = useAppSelector(state => state.cart);

  const getProductPrice = (id: string) => {
    if (cartProducts[id] && cartProducts[id].subtotal) {
      return formatCurrency(cartProducts[id].subtotal);
    }
    return 0;
  };

  return (
    <View style={styles.wrapper}>
      <AddRemoveToFavorites
        isFavorite={isFavorite}
        size={18}
        wrapperStyle={styles.heartWrapperStyle}
      />
      <View style={styles.leftZone}>
        <Image style={styles.img} source={img} resizeMode="contain" />
      </View>
      <View style={styles.centerZone}>
        <Text style={styles.productTitle}>{title}</Text>
        <AddRemoveProduct product={product} />
      </View>
      <View style={styles.rightZone}>
        <Text style={styles.productPrice}>{getProductPrice(product.id)}</Text>
      </View>
    </View>
  );
};
