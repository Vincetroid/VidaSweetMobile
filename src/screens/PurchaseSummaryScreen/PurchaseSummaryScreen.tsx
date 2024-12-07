import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@/global-styles';
import { resetCart } from '@/redux-content/cart/Cart.slice';
import {
  Button,
  CartPurchased,
  Divider,
  FullScreenLoader,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { styles } from './PurchaseSummaryScreen.styles';

export const PurchaseSummaryScreen = ({ route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { deliveryDateTime, orderId } = route?.params;
  const [loader, setLoader] = useState<boolean>(false);
  const { currentSelectedAddress } = useAppSelector(state => state.address);

  const onPressContinue = async () => {
    dispatch(resetCart());
    navigation.navigate('MainRoot');
  };

  const calculateShippingCost = (distanceMeters: number) => {
    let shippingCost = 0;

    if (distanceMeters <= 3400) {
      shippingCost = 29.5;
    } else if (distanceMeters > 3400 && distanceMeters <= 5600) {
      shippingCost = distanceMeters / 132;
    } else if (distanceMeters > 5600 && distanceMeters <= 10000) {
      shippingCost = distanceMeters / 143;
    } else {
      shippingCost = distanceMeters / 154;
    }

    // 14535 * x = 150

    return shippingCost;
  };

  const shipCost = calculateShippingCost(
    currentSelectedAddress?.distanceToAddress || 0,
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <View style={styles.bottomSpace}>
          {/* Detalles de la entrega */}
          <Text style={styles.title}>{t('OrderId')}</Text>
          <Text style={styles.text}>{orderId}</Text>
          <Divider
            customStyle={{
              marginVertical: 16,
              backgroundColor: Colors.grayLight,
            }}
          />
          <Text style={styles.title}>{t('DeliveryDateTime')}</Text>
          <Text style={styles.text}>{deliveryDateTime}</Text>
          <Divider
            customStyle={{
              marginVertical: 16,
              backgroundColor: Colors.grayLight,
            }}
          />
          <CartPurchased shippingCost={shipCost} />
          <Divider
            customStyle={{
              marginVertical: 16,
              backgroundColor: Colors.grayLight,
            }}
          />
          <Text style={styles.title}>{t('DeliveryAddress')}</Text>
          {/* Poner aqui a lo mejor un cuadrito para reubicar marcador */}
          <Text style={styles.text}>{currentSelectedAddress.fullAddress}</Text>
          <Divider
            customStyle={{
              marginVertical: 16,
              backgroundColor: Colors.grayLight,
            }}
          />
          <Text style={styles.title}>{t('SpecialIndications')}</Text>
          <Text style={styles.text}>Tocar la puerta 3 veces</Text>
          <Divider
            customStyle={{
              marginVertical: 16,
              backgroundColor: Colors.grayLight,
            }}
          />
          <Text style={styles.text}>{t('NeedHelpWithYourOrderContactUs')}</Text>
        </View>
        <Button title={t('GoHome')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
