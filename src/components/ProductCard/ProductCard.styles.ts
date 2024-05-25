import { StyleSheet } from 'react-native';
import { Colors, FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  heartWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: 3,
    right: 3,
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
  },
  addText: {
    marginLeft: 10,
    color: themeStyles.primary,
  },
  productTitle: {
    textAlign: 'center',
    fontFamily: 'Lato Bold',
    fontSize: FontSizes.xx_medium,
    marginVertical: 2,
  },
  productPrice: {
    textAlign: 'center',
    fontFamily: 'Lato Light',
    fontSize: FontSizes.x_medium,
    marginVertical: 2,
  },
  icon: {
    color: themeStyles.primary,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 'auto',
    aspectRatio: 1,
  },
  heartIconSelected: {
    color: themeStyles.secondary,
  },
  heartIconNotSelected: {
    color: Colors.grayLight,
  },
});
