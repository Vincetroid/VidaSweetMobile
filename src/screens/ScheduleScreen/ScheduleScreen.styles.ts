import { StyleSheet } from 'react-native';
import { Colors, FontFamilies, FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scheduleText: {
    color: themeStyles.text,
    fontFamily: FontFamilies.latoMedium,
    fontSize: FontSizes.xx_medium,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  timePickerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePicker: {
    margin: 0,
    padding: 0,
    height: 100,
  },
});
