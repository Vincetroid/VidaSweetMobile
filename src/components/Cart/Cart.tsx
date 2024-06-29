import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors, FontSizes } from '@/global-styles';
import { ProductItem } from '@/interfaces';
import { CartProducts, Divider, ProductCard, RowTitle } from '@/components';
import { useAppSelector } from '@/hooks';
import { formatCurrency } from '@/utils';
import { MercadoPagoIcon } from '@/assets/icons';
import { styles } from './Cart.styles';

export const Cart = () => {
  const ICON_SIZE = 28;
  const { cartProductsCounter, cartProductsSubtotal, cartProductsIva } =
    useAppSelector(state => state.cart);
  const { t } = useTranslation();

  console.log('typeof cartProductsSubtotal');
  console.log(typeof cartProductsSubtotal);

  const product1 = {
    docId: '49302897-4fd7-42cb-914c-629f358672b3',
    img: require('@/assets/products/ice-cream-liter.jpeg'),
    title: 'Helado 1l',
    price: 150.0,
    isFavorite: false,
  } as ProductItem;
  const product2 = {
    docId: 'd90e703e-7cb9-4a28-86c5-c2921d170a55',
    img: 'ice-cream-single.jpeg',
    title: 'Helado sencillo',
    price: 60.5,
    isFavorite: true,
  } as ProductItem;

  return (
    <>
      <RowTitle
        title={t('CartSummary')}
        styleTextTitle={styles.cartSummaryTitle}
        styleSecondaryTextTitle={styles.cartSummarySecondaryTitle}
        secondaryText={t('NArticles', { quantity: cartProductsCounter })}
      />
      <CartProducts />
      {/* <RowTitle
        title={t('CartSummary')}
        styleTextTitle={styles.cartSummaryTitle}
        styleSecondaryTextTitle={{
          fontFamily: 'Lato Regular',
          fontSize: FontSizes.x_medium,
          alignSelf: 'flex-end',
        }}
        secondaryText={t('NArticles', { quantity: cartProductsCounter })}
      /> */}
      <RowTitle
        title={t('Subtotal')}
        styleTextTitle={styles.subtotalTitle}
        styleSecondaryTextTitle={{
          fontFamily: 'Lato Regular',
          fontSize: FontSizes.x_medium,
          alignSelf: 'flex-end',
        }}
        secondaryText={`${formatCurrency(cartProductsSubtotal)} MXN`}
      />
      <RowTitle
        title={t('IVA')}
        styleTextTitle={styles.ivaTitle}
        styleSecondaryTextTitle={styles.ivaSecondaryTitle}
        secondaryText={`${formatCurrency(cartProductsIva)} MXN`}
      />
      <View style={{ paddingLeft: 16 }}>
        <Divider
          customStyle={{ marginTop: 16, backgroundColor: Colors.gold }}
        />
      </View>
      <RowTitle
        title={t('Total')}
        styleTextTitle={styles.totalTitle}
        styleSecondaryTextTitle={styles.totalSecondaryTitle}
        secondaryText={`${formatCurrency(
          cartProductsSubtotal + cartProductsIva,
        )} MXN`}
      />
      <RowTitle
        title={t('SecurePaymentsWithText', { vendor: 'Mercado Pago' })}
        centered
        styleTextTitle={styles.securePaymentTitle}
      />
      <MercadoPagoIcon
        width={ICON_SIZE}
        height={ICON_SIZE}
        style={styles.icon}
      />

      <RowTitle
        title={t('YouForgotSomethingMsg')}
        styleTextTitle={styles.youForgotSomethingTitle}
        styleSecondaryTextTitle={styles.youForgotSomethingSecondaryTitle}
      />
      <View style={[styles.productCardsContainer]}>
        <ProductCard product={product1} />
        <ProductCard product={product2} />
        <ProductCard product={product1} />
        <ProductCard product={product2} />
      </View>
    </>
  );
};
