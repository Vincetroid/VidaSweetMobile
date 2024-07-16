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
    marginTop: 8,
    backgroundColor: Colors.lightPink,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  addText: {
    marginLeft: 6,
    color: themeStyles.primary,
    fontSize: FontSizes.medium,
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
  imgModal: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
  heartIconSelected: {
    color: themeStyles.secondary,
  },
  heartIconNotSelected: {
    color: Colors.grayLight,
  },
  modalPressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelImageModalIcon: {
    position: 'absolute',
    top: 20,
    right: 12,
  },
});
