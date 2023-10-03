import { StyleSheet } from 'react-native';
import { Colors, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  heartWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 3,
    right: 3,
  },
  heartIconSelected: {
    color: themeStyles.secondary,
  },
  heartIconNotSelected: {
    color: Colors.grayLight,
  },
});
