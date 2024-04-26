import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  Button,
  Menu,
  RowTitle,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { Cart } from '../../components/Cart/Cart';
import { styles } from './ShoppingCartScreen.styles';

export const ShoppingCartScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const productsLength = true;

  const onPressContinue = () => {
    navigation.navigate('DeliveryAddress');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {productsLength ? (
        <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
          <Cart />
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
