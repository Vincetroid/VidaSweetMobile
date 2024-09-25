import { StyleSheet } from 'react-native';
import { FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  title: {
    // fontFamily: 'Lato Bold',
    fontFamily: 'Bartleen Script',
    fontSize: FontSizes.xx_medium,
    marginVertical: 2,
    color: themeStyles.text,
  },
  text: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.x_medium,
    marginVertical: 2,
    color: themeStyles.text,
  },
  bottomSpace: {
    marginBottom: 50,
  },
});
