import React, { useMemo, useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
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
const moment = require('moment');
import TimePicker from 'react-native-date-picker';

export const ScheduleScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [loader, setLoader] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  // const [time, setTime] = useState<string>('');
  const [time, setTime] = useState(new Date());

  const onPressContinue = () => {
    if (!selectedDate && !time) {
      Alert.alert('Selecciona una fecha y una hora');
      return;
    } else if (selectedDate && !time) {
      Alert.alert('Selecciona una hora');
      return;
    } else if (!selectedDate && time) {
      Alert.alert('Selecciona una fecha');
      return;
    }

    // navigation.navigate('PrePurchaseSummary', {
    //   // deliveryDate: new Date().toString(),
    //   // deliveryTime: '00:00',
    //   deliveryDateTime: dateTimeToDisplay,
    // });
    // navigation.navigate('PrePurchaseSummary', {
    //   deliveryDate: selectedDate,
    //   deliveryTime: time === '' ? '00:00' : time,
    // });
    navigation.navigate('PrePurchaseSummary', {
      deliveryDateTime: dateTimeToDisplay,
    });
  };

  const onChangeDate = (date: string) => {
    const lan = i18next.language;
    //TE QUEDASTE AQUI porque es mejor manejar mas tarde la fecha en formato ingles para hacer la siguiente operacion:
    // new Date('03/07/2024 10:00')
    // Thu Mar 07 2024 10:00:00 GMT-0600 (hora estándar central)
    const latinOrEnglishDateFormatString = lan.includes('es')
      ? 'DD/MM/YYYY'
      : 'YYYY/MM/DD';
    // console.log(
    //   'latinOrEnglishDateFormatString: ',
    //   latinOrEnglishDateFormatString,
    // );
    const formattedDate = getFormatedDate(
      new Date(date),
      latinOrEnglishDateFormatString,
    );

    // console.log('formattedDate');
    // console.log(formattedDate);

    setSelectedDate(formattedDate);
  };

  const onChangeTime = (timeParam: Date) => {
    setTime(timeParam);
  };

  const getMaximumDateDelivery = () => {
    const today = new moment();
    const future = today.clone().add(6, 'month');

    const formattedDateForDatePicker = getFormatedDate(
      new Date(future.format()),
      'YYYY/MM/DD',
    );

    return formattedDateForDatePicker;
  };

  const formatDateTime = useMemo(() => {
    return selectedDate;
  }, [selectedDate]);

  const formatTime = useMemo(() => {
    const formattedTime = Intl.DateTimeFormat('mx', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(time);

    console.log('formattedTime');
    console.log(formattedTime);

    return formattedTime;
  }, [time]);

  const dateTimeToDisplay = useMemo(() => {
    return `${formatDateTime} - ${formatTime}`;
  }, [formatDateTime, formatTime]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loader ? <FullScreenLoader /> : null}
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
        <>
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
            mode="calendar"
            minimumDate={getToday()}
            maximumDate={getMaximumDateDelivery()}
            onSelectedChange={onChangeDate}
            selectorStartingYear={new Date().getFullYear()}
            selectorEndingYear={2100}
            selected={getToday()}
          />
          <View style={styles.timePickerWrapper}>
            <TimePicker
              date={time}
              onDateChange={onChangeTime}
              mode="time"
              style={styles.timePicker}
            />
          </View>
          <Text style={styles.scheduleText}>{dateTimeToDisplay}</Text>
        </>
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
