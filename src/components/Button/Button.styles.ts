import { FontSizes, themeStyles } from '@/global-styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btn: {
    padding: 12,
    width: '100%',
  },
  btnText: {
    fontSize: FontSizes.large,
    fontFamily: 'Bartleen Script',
    textAlign: 'center',
    color: 'white',
  },
  icon: {
    color: themeStyles.black,
  },
});
