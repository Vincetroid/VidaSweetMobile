import { StyleSheet } from 'react-native';
import { themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  divider: {
    backgroundColor: themeStyles.divider,
    height: 1,
    width: '100%',
  },
  verticalDivider: {
    backgroundColor: themeStyles.divider,
    top: 15,
    width: 1,
  },
});
