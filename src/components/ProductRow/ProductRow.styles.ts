import { StyleSheet } from 'react-native';
import { FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  leftZone: {
    flex: 0.2,
  },
  centerZone: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightZone: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  rightZoneQuantity: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
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
    fontFamily: 'Lato Bold Italic',
    fontSize: FontSizes.xx_medium,
    marginVertical: 2,
    color: themeStyles.text,
  },
  productPrice: {
    textAlign: 'center',
    fontFamily: 'Lato Black',
    fontSize: FontSizes.xx_medium,
    paddingRight: 4,
    paddingBottom: 4,
    color: themeStyles.secondary,
  },
  productQuantity: {
    textAlign: 'center',
    fontFamily: 'Lato Medium',
    fontSize: FontSizes.x_medium,
    paddingRight: 4,
    paddingBottom: 4,
    color: themeStyles.text,
  },
  icon: {
    color: themeStyles.primary,
  },
  img: {
    width: 'auto',
    height: 'auto',
    aspectRatio: 1,
  },
  heartWrapperStyle: {
    position: 'absolute',
    zIndex: 1,
    top: 10,
    right: 12,
  },
});
