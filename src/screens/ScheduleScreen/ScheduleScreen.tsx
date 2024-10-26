import React, { useMemo, useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { useNavigation } from '@react-navigation/native';
import { themeName, themeStyles } from '@/global-styles';
import {
  Button,
  FullScreenLoader,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { styles } from './ScheduleScreen.styles';
const moment = require('moment');
import TimePicker from 'react-native-date-picker';

const maximumTime = new Date();
maximumTime.setHours(17, 0, 0);
const minimumTime = new Date();
minimumTime.setHours(12, 0, 0);

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
    const dateToUse = date.replaceAll('/', '-'); // Ver si funciona en iOS, sino, usar new Moment
    const lan = i18next.language;
    const latinOrEnglishDateFormatString = lan.includes('es')
      ? 'DD/MM/YYYY'
      : 'YYYY/MM/DD';

    const momentDate = moment(dateToUse);
    const formattedDate = momentDate.format(latinOrEnglishDateFormatString);

    setSelectedDate(formattedDate);
  };

  const onChangeTime = (timeParam: Date) => {
    setTime(timeParam);
  };

  const getMinimumDateDelivery = () => {
    const today = new moment();
    const future = today.clone().add(3, 'day');

    const formattedDateForDatePicker = getFormatedDate(
      new Date(future.format()),
      'YYYY/MM/DD',
    );

    return formattedDateForDatePicker;
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
              // padding: 0,
              // margin: 0,
            }}
            minuteInterval={15}
            mode="calendar"
            minimumDate={getMinimumDateDelivery()}
            maximumDate={getMaximumDateDelivery()}
            onSelectedChange={onChangeDate}
            selectorStartingYear={new Date().getFullYear()}
            selectorEndingYear={2100}
            selected={getMinimumDateDelivery()}
          />
          <Text style={styles.text}>{t('TimeDeliverRange')}</Text>
          <View style={styles.timePickerWrapper}>
            <TimePicker
              open={true}
              date={time}
              onDateChange={onChangeTime}
              mode="time" // Bien podría quitarse este y el calendario para solo user DateTimePicker
              style={styles.timePicker}
              theme={themeName} //TODO: Return to auto when detect theme by default
              minimumDate={minimumTime}
              maximumDate={maximumTime}
            />
          </View>
          <Text style={styles.scheduleText}>{dateTimeToDisplay}</Text>
        </>
        <Button title={t('Continue')} onPress={onPressContinue} />
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
