import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors, FontSizes, themeStyles } from '@/global-styles';
import { faCcStripe } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { CartProducts, Divider, ProductCard, RowTitle } from '@/components';
import { useAppSelector } from '@/hooks';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { formatCurrency } from '@/utils';
import { styles } from './Cart.styles';

export const Cart = () => {
  const ICON_SIZE = 32;
  const { cartProductsCounter, cartProductsSubtotal, cartProductsIva } =
    useAppSelector(state => state.cart);
  const { t } = useTranslation();
  const { products } = useFetchProducts();
  const totalAmount = cartProductsSubtotal + cartProductsIva;

  return (
    <>
      <RowTitle
        title={t('CartSummary')}
        styleTextTitle={styles.cartSummaryTitle}
        styleSecondaryTextTitle={styles.cartSummarySecondaryTitle}
        secondaryText={t('NArticles', { quantity: cartProductsCounter })}
      />
      {cartProductsCounter > 0 ? (
        <CartProducts />
      ) : (
        <View>
          <Text style={styles.cartEmpty}>{t('EmptyCartTitle')}</Text>
        </View>
      )}

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
        secondaryText={`${formatCurrency(totalAmount)} MXN`}
      />
      <RowTitle
        title={t('SecurePaymentsWithText', { vendor: 'Stripe' })}
        centered
        styleTextTitle={styles.securePaymentTitle}
      />

      <View style={{ flex: 1, alignItems: 'center', marginTop: 6 }}>
        <FontAwesomeIcon
          icon={faCcStripe}
          size={ICON_SIZE}
          color={themeStyles.text}
        />
      </View>

      <RowTitle
        title={t('YouForgotSomethingMsg')}
        styleTextTitle={styles.youForgotSomethingTitle}
        styleSecondaryTextTitle={styles.youForgotSomethingSecondaryTitle}
      />
      <View style={[styles.productCardsContainer]}>
        {products?.map(product => {
          return <ProductCard product={product} />;
        })}
      </View>
    </>
  );
};
