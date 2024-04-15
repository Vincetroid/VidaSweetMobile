import { StyleSheet } from 'react-native';
import { Colors, FontFamilies, FontSizes } from '@/global-styles';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scheduleText: {
    color: Colors.black,
    fontFamily: FontFamilies.latoMedium,
    fontSize: FontSizes.xx_medium,
    textAlign: 'center',
  },
});
