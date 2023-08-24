import { StyleSheet } from 'react-native';
import { Colors, themeStyles } from '@/global-styles';

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
    width: '80%',
  },
  addText: {
    marginLeft: 10,
    color: themeStyles.primary,
  },
  productTitle: {
    textAlign: 'center',
    fontFamily: 'Lato Bold',
    fontSize: 16,
    marginVertical: 2,
  },
  productPrice: {
    textAlign: 'center',
    fontFamily: 'Lato Light',
    fontSize: 14,
    marginVertical: 2,
  },
  icon: {
    color: themeStyles.primary,
  },
  img: {
    width: 150,
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
