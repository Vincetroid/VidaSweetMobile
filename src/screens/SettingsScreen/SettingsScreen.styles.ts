import { StyleSheet } from 'react-native';
import { FontFamilies, FontSizes, themeStyles } from '@/global-styles';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 16,
  },
  profileMainContainer: {
    paddingVertical: 28,
    flexDirection: 'row',
    backgroundColor: themeStyles.background,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginBottom: 30,
    borderRadius: 5,
  },
  leftZone: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightZone: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profileName: {
    color: themeStyles.black,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoItalic,
    marginLeft: 10,
  },
  email: {
    color: themeStyles.black,
    fontSize: FontSizes.xx_medium,
    fontFamily: FontFamilies.latoItalic,
    marginLeft: 10,
  },
  signOutTextBtn: {
    color: themeStyles.black,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoRegular,
    marginLeft: 10,
  },
  signOutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: themeStyles.secondary,
    fontSize: FontSizes.big,
    fontFamily: FontFamilies.latoItalic,
  },
});

export default styles;
