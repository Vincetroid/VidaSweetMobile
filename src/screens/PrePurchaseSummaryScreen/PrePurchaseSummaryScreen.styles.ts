import { StyleSheet } from 'react-native';
import { FontSizes } from '@/global-styles';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  title: {
    // fontFamily: 'Lato Bold',
    fontFamily: 'Bartleen Script',
    fontSize: FontSizes.xx_medium,
    marginVertical: 2,
  },
  text: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.x_medium,
    marginVertical: 2,
  },
});
