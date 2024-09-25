import React from 'react';
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@/global-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  Button,
  ProductCard,
  RowTitle,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { useAppSelector } from '@/hooks';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { Cart } from '../../components/Cart/Cart';
import { styles } from './ShoppingCartScreen.styles';

export const ShoppingCartScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { cartProductsCounter } = useAppSelector(state => state.cart);
  const { products } = useFetchProducts();

  const onPressContinue = () => {
    if (cartProductsCounter <= 0) {
      return Alert.alert(t('AddAtLeastOneProduct'));
    }
    navigation.navigate('DeliveryAddress');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {cartProductsCounter ? (
        <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
          <Cart />
          <Button title={t('Continue')} onPress={onPressContinue} />
        </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* <ScrollView contentContainerStyle={[gStyles.gralContainer]}> */}
          <View style={styles.emptyCardImage}>
            <FontAwesomeIcon
              icon="shopping-cart"
              size={80}
              color={themeStyles.text}
            />
          </View>
          <RowTitle title={t('EmptyCartTitle')} centered />
          <Text style={styles.emptyCartMsg}>{t('EmptyCartMessage')}</Text>
          <View style={[styles.container]}>
            {products.map(product => {
              return <ProductCard product={product} />;
            })}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
