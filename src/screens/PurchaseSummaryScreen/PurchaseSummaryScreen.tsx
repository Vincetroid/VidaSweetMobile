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

export const PurchaseSummaryScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  // const { deliveryDate, deliveryTime, deliveryDateTime } = route?.params;
  const [loader, setLoader] = useState<boolean>(false);
  const { currentSelectedAddress } = useAppSelector(state => state.address);

  const onPressContinue = async () => {
    dispatch(resetCart());
    navigation.navigate('MainRoot');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <View style={styles.bottomSpace}>
          {/* Detalles de la entrega */}
          <Text style={styles.title}>{t('DeliveryDateTime')}</Text>
          <Text style={styles.text}>Determining</Text>
          <Divider
            customStyle={{
              marginVertical: 16,
              backgroundColor: Colors.grayLight,
            }}
          />
          <CartPurchased />
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
