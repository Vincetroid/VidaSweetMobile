import { View, Image, Text } from 'react-native';
import { ProductItem } from '@/types';
import { formatCurrency } from '@/utils';
import { AddRemoveProduct, AddRemoveToFavorites } from '@/components';
import { styles } from './ProductRow.styles';
import { useAppSelector } from '@/hooks';

export const ProductRow = ({ product }: { product: ProductItem }) => {
  const { id, img, title, price, isFavorite = false } = product;
  const { cartProducts } = useAppSelector(state => state.cart);

  const getProductPrice = (id: string, price: number) => {
    // const productsFiltered = cartProducts.filter(product => product.id === id);
    // const sum = productsFiltered.reduce((acc, cur) => acc + cur.price, 0);
    // return formatCurrency(sum);
    return 8;
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
        <Text style={styles.productPrice}>{getProductPrice(id, price)}</Text>
      </View>
    </View>
  );
};
