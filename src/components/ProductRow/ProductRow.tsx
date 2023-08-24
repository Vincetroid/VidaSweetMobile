import { View, Image, Text } from 'react-native';
import { ProductItem } from '@/types';
import { formatCurrency } from '@/utils';
import { useTranslation } from 'react-i18next';
import { AddRemoveProduct } from '@/components';
import { styles } from './ProductRow.styles';
import { AddRemoveToFavorites } from '../AddRemoveToFavorites/AddRemoveToFavorites';

export const ProductRow = ({ product }: { product: ProductItem }) => {
  const { t } = useTranslation();
  const { img, title, price, isFavorite = false } = product;

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
        <AddRemoveProduct />
      </View>
      <View style={styles.rightZone}>
        <Text style={styles.productPrice}>{formatCurrency(price)}</Text>
      </View>
    </View>
  );
};

const cardGap = 30;
// const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
