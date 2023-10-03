import { StyleSheet } from 'react-native';
import { themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 80,
    paddingVertical: 4,
    // backgroundColor: 'aqua',
    backgroundColor: themeStyles.quaternary,
  },
  leftSide: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    // backgroundColor: 'green',
    display: 'flex',
    flex: 0.3,
  },
  centerSide: {
    display: 'flex',
    flex: 0.4,
  },
  rightSide: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    display: 'flex',
    flex: 0.3,
  },
  text: {
    textAlign: 'center',
    color: themeStyles.background,
  },
});
