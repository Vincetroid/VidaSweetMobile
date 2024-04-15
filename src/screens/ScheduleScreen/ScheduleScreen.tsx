import React, { memo, useMemo, useState } from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';
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
import { useAppDispatch } from '@/hooks';
import { styles } from './ScheduleScreen.styles';
const moment = require('moment');

export const ScheduleScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

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
    console.log('new format: ', dateTime);
    console.log(moment().utc());

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

    console.log('dateDiff');
    console.log(dateDiff);

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
    const formatDate = lan.includes('es') ? 'DD/MM/YYYY' : 'YYYY/MM/DD';
    const formattedDate = getFormatedDate(new Date(date), formatDate);

    setSelectedDate(formattedDate);
  };

  const onChangeTime = (timeParam: string) => {
    setTime(timeParam);
  };

  const formatDateTime = useMemo(() => {
    return `${selectedDate} - ${time}`;
  }, [selectedDate, time]);

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
            mode="datepicker"
            minimumDate={getToday()}
            onSelectedChange={onChangeDate}
            onTimeChange={onChangeTime}
            selectorStartingYear={new Date().getFullYear()}
            selectorEndingYear={2100}
          />
          <Text style={styles.scheduleText}>{formatDateTime}</Text>
        </>
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
