import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  FullScreenLoader,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { styles } from './PrePurchaseSummaryScreen.styles';

export const PrePurchaseSummaryScreen = ({ route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const { deliveryDate, deliveryTime } = route?.params;
  const [loader, setLoader] = useState<boolean>(false);

  const onPressContinue = () => {
    navigation.navigate('PrePurchaseSummary');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <View>
          <Text>Resumen de compra</Text>
          <Text>{deliveryDate}</Text>
          <Text>{deliveryTime}</Text>
        </View>
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
