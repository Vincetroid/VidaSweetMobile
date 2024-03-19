import React, { useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import DatePicker, {
  getFormatedDate,
  getToday,
} from 'react-native-modern-datepicker';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@/global-styles';
import {
  Button,
  FullScreenLoader,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { styles } from './ScheduleScreen.styles';

export const ScheduleScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [loader, setLoader] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const onPressContinue = () => {
    if (!selectedDate && !time) {
      Alert.alert('Selecciona una fecha y una hora');
      return;
    }

    navigation.navigate('PrePurchaseSummary', {
      deliveryDate: selectedDate,
      deliveryTime: time === '' ? '00:00' : time,
    });
  };

  const onChangeDate = (date: string) => {
    const lan = i18next.language;
    const formatDate = lan.includes('es') ? 'DD/MM/YYYY' : 'YYYY/MM/DD';
    const formattedDate = getFormatedDate(new Date(date), formatDate);

    setSelectedDate(formattedDate);
  };

  const onChangeTime = (timeParam: string) => {
    setTime(timeParam);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <DatePicker
          options={{
            defaultFont: 'Lato Regular',
            headerFont: 'Lato Bold',
            backgroundColor: themeStyles.background,
            textHeaderColor: themeStyles.secondary,
            textDefaultColor: themeStyles.text,
            selectedTextColor: themeStyles.white,
            mainColor: themeStyles.secondary,
            textSecondaryColor: themeStyles.black,
            borderColor: 'rgba(122, 146, 165, 0.2)',
          }}
          minuteInterval={15}
          mode="datepicker"
          minimumDate={getToday()}
          onSelectedChange={onChangeDate}
          onTimeChange={onChangeTime}
        />
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
