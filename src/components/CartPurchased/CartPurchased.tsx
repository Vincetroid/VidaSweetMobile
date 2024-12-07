import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors, FontSizes } from '@/global-styles';
import { CartProducts, Divider, ProductCard, RowTitle } from '@/components';
import { useAppSelector } from '@/hooks';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { formatCurrency } from '@/utils';
import { styles } from './CartPurchased.styles';

export const CartPurchased = ({ shippingCost = 0 }) => {
  const { cartProductsCounter, cartProductsSubtotal, cartProductsIva } =
    useAppSelector(state => state.cart);
  const { t } = useTranslation();
  const { products } = useFetchProducts();
  const totalAmount = cartProductsSubtotal + cartProductsIva + shippingCost;

  return (
    <>
      <RowTitle
        title={t('CartSummary')}
        styleTextTitle={styles.cartSummaryTitle}
        styleSecondaryTextTitle={styles.cartSummarySecondaryTitle}
        secondaryText={t('NArticles', { quantity: cartProductsCounter })}
      />
      {cartProductsCounter > 0 ? (
        <CartProducts disabled />
      ) : (
        <View>
          <Text style={styles.cartEmpty}>{t('EmptyCartTitle')}</Text>
        </View>
      )}
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
      {shippingCost ? (
        <RowTitle
          title={t('ShippingCost')}
          styleTextTitle={styles.ivaTitle}
          styleSecondaryTextTitle={styles.ivaSecondaryTitle}
          secondaryText={`${formatCurrency(shippingCost)} MXN`}
        />
      ) : null}
      <View style={{ paddingLeft: 16 }}>
        <Divider
          customStyle={{ marginTop: 16, backgroundColor: Colors.gold }}
        />
      </View>
      <RowTitle
        title={t('Total')}
        styleTextTitle={styles.totalTitle}
        styleSecondaryTextTitle={styles.totalSecondaryTitle}
        secondaryText={`${formatCurrency(totalAmount)} MXN`}
      />
    </>
  );
};
