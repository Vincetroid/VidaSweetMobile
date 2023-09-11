import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Colors, FontSizes, gStyles } from '@/global-styles';
import {
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
  Divider,
  Menu,
  ProductCard,
  ProductRow,
  RowTitle,
  Button,
} from '@/components';
import { ProductItem } from '@/interfaces';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from './ShoppingCartScreen.styles';
import { useAppSelector } from '@/hooks';
import { MercadoPagoIcon } from '@/assets/icons';

export const ShoppingCartScreen = () => {
  const ICON_SIZE = 28;
  const { t } = useTranslation();
  const { cartProductsCounter } = useAppSelector(state => state.cart);

  const navigation = useNavigation();

  const productsLength = true;

  const product1 = {
    id: '49302897-4fd7-42cb-914c-629f358672b3',
    img: require('@/assets/products/ice-cream-liter.jpeg'),
    title: 'Helado 1l',
    price: 150.0,
    isFavorite: false,
  } as ProductItem;
  const product2 = {
    id: 'd90e703e-7cb9-4a28-86c5-c2921d170a55',
    img: require('@/assets/products/ice-cream-single.jpeg'),
    title: 'Helado sencillo',
    price: 60.5,
    isFavorite: true,
  } as ProductItem;

  const onPressContinue = () => {
    console.log('onPressContinue');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {productsLength ? (
        <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
          <>
            <ProductRow product={product1} />
            <ProductRow product={product2} />
            <RowTitle
              title={t('CartSummary')}
              styleTextTitle={{
                // fontFamily: 'Lato Regular',
                paddingLeft: 0,
                fontSize: FontSizes.x_big,
                marginTop: 10,
              }}
              styleSecondaryTextTitle={{
                fontSize: FontSizes.x_medium,
              }}
              secondaryText={t('NArticles', { quantity: cartProductsCounter })}
            />
            <RowTitle
              title={t('Subtotal')}
              styleTextTitle={{
                fontFamily: 'Lato Light',
                paddingLeft: 16,
                fontSize: FontSizes.xx_medium,
                marginTop: 20,
              }}
              styleSecondaryTextTitle={{
                fontFamily: 'Lato Regular',
                fontSize: FontSizes.x_medium,
                alignSelf: 'flex-end',
              }}
              secondaryText="$1,553.00 MXN"
            />
            <View style={{ paddingLeft: 16 }}>
              <Divider
                customStyle={{ marginTop: 16, backgroundColor: Colors.gold }}
              />
            </View>
            <RowTitle
              title={t('Total')}
              styleTextTitle={{
                fontFamily: 'Lato Light',
                paddingLeft: 16,
                fontSize: FontSizes.xx_medium,
                marginTop: 20,
              }}
              styleSecondaryTextTitle={{
                fontFamily: 'Lato Regular',
                fontSize: FontSizes.x_medium,
                alignSelf: 'flex-end',
              }}
              secondaryText="$1,553.00 MXN"
            />
            <RowTitle
              title={t('SecurePaymentsWithText', { vendor: 'Mercado Pago' })}
              centered
              styleTextTitle={{
                fontFamily: 'Lato Light',
                fontSize: FontSizes.x_medium,
                marginTop: 20,
              }}
            />
            <MercadoPagoIcon
              width={ICON_SIZE}
              height={ICON_SIZE}
              style={styles.icon}
            />

            <RowTitle
              title={t('YouForgotSomethingMsg')}
              styleTextTitle={{
                paddingLeft: 0,
                fontSize: FontSizes.xx_medium,
                marginTop: 20,
              }}
              styleSecondaryTextTitle={{
                fontSize: FontSizes.x_medium,
              }}
            />
            <View
              style={[
                gStyles.gralMargin,
                {
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                },
              ]}>
              <ProductCard product={product1} />
              <ProductCard product={product2} />
              <ProductCard product={product1} />
              <ProductCard product={product2} />
            </View>
          </>
          <Button title={t('Continue')} onPress={onPressContinue} />
        </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* <ScrollView contentContainerStyle={[gStyles.gralContainer]}> */}
          <View style={styles.emptyCardImage}>
            <FontAwesomeIcon icon="shopping-cart" size={160} />
          </View>
          <RowTitle title={t('EmptyCartTitle')} centered />
          <Text style={styles.emptyCartMsg}>{t('EmptyCartMessage')}</Text>
          <Menu />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
