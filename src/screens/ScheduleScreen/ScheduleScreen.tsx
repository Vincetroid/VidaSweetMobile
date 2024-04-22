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

  // const calculateIfTimeSelectedIsEarlierThanCurrentTime = (): boolean => {
  //   // const startMoment = moment(time);
  //   // const endMoment = moment(new Date());
  //   const diffTime = endMoment.diff(startMoment, 'minutes');

  //   return Math.sign(diffTime) === -1 ? 0 : diffTime;
  // };

  const onPressContinue = () => {
    const now = new moment();

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
    // else if (calculateIfTimeSelectedIsEarlierThanCurrentTime()) {
    //   Alert.alert('Selecciona una fecha');
    //   return;
    // }

    const dateTime = `${selectedDate} ${time}`;
    //Y PODERLA USAR AQUI
    // console.log('new format: ', dateTime);
    // console.log(moment().utc());

    //     If the moment is earlier than the moment you are passing to moment.fn.diff, the return value will be negative.

    // var a = moment();
    // var b = moment().add(1, 'seconds');
    // a.diff(b) // -1000
    // b.diff(a) // 1000
    // An easy way to think of this is by replacing .diff( with a minus operator.

    //           // a < b
    // a.diff(b) // a - b < 0
    // b.diff(a) // b - a > 0
    const dateDiff = now.diff();
    // const timeInHours = elapsedTimeInHours(dateDiff);

    // console.log('dateDiff');
    // console.log(dateDiff);

    navigation.navigate('PrePurchaseSummary' as any, {
      deliveryDate: new Date().toString(),
      deliveryTime: '00:00',
    });
    // navigation.navigate('PrePurchaseSummary', {
    //   deliveryDate: selectedDate,
    //   deliveryTime: time === '' ? '00:00' : time,
    // });
    // navigation.navigate('PrePurchaseSummary');
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
            // onTimeChange={onChangeTime} //Se va a eliminar porque no permite rango de hora
            selectorStartingYear={new Date().getFullYear()}
            selectorEndingYear={2100}
            // selected={formatDateTime}
            // current={formatDateTime}
          />
          <View style={styles.timePickerWrapper}>
            <TimePicker
              date={time}
              onDateChange={onChangeTime}
              mode="time"
              style={styles.timePicker}
            />
          </View>
          <Text
            style={
              styles.scheduleText
            }>{`${formatDateTime} - ${formatTime}`}</Text>
        </>
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
