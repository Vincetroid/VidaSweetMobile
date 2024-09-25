import { StyleSheet } from 'react-native';
import { Colors, FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    minHeight: 80,
    backgroundColor: Colors.grayLightBg,
    marginBottom: 10,
  },
  shadowEffect: {
    borderColor: themeStyles.secondary,
    borderWidth: 1,
    borderRadius: 10,
  },
  leftZone: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  centerZone: {
    flex: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightZone: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  addBtn: {
    marginTop: 10,
    backgroundColor: themeStyles.secondary,
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  addText: {
    marginLeft: 10,
    color: themeStyles.primary,
  },
  productTitle: {
    textAlign: 'center',
    fontFamily: 'Lato Regular',
    fontSize: FontSizes.x_medium,
    color: themeStyles.searchBg,
    marginVertical: 2,
  },
  productPrice: {
    textAlign: 'center',
    fontFamily: 'Lato Black',
    fontSize: FontSizes.xx_medium,
    paddingRight: 4,
    paddingBottom: 4,
    color: themeStyles.secondary,
  },
  icon: {
    color: themeStyles.primary,
  },
  img: {
    width: 'auto',
    height: 'auto',
    aspectRatio: 1,
  },
  iconBtn: {
    padding: 0,
    width: 'auto',
  },
});
