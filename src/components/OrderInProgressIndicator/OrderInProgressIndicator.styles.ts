import { StyleSheet } from 'react-native';
import { FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: themeStyles.secondary,
    zIndex: 1,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
  },
  leftSide: {
    flex: 0.15,
    // backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },
  information: { flexDirection: 'column', flex: 0.75 },
  rightSide: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  infoTop: { flex: 1 },
  infoBottom: { flex: 1 },
  etaLabel: {
    fontFamily: 'Lato Bold',
    // fontFamily: 'Bartleen Script',
    fontSize: FontSizes.x_medium,
    // marginVertical: 1,
    color: themeStyles.text,
  },
  eta: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.medium,
    marginVertical: 2,
    color: themeStyles.text,
  },
  icon: {
    color: themeStyles.primary,
  },
});
