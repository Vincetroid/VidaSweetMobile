import { StyleSheet } from 'react-native';
import { Colors, FontSizes, themeStyles } from '@/global-styles';

// TODO: Tal vez pasarlo a utils
const ICON_BTN_SIZE = 16;

export const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: themeStyles.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    paddingLeft: 35,
    paddingRight: 35,
    flex: 1,
    backgroundColor: Colors.grayLightBg,
    fontSize: FontSizes.x_medium,
    borderWidth: 0,
    borderRadius: 10,
    color: themeStyles.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    left: 22,
    color: themeStyles.secondary,
  },
  cancelIcon: {
    color: themeStyles.secondary,
  },
  cancelPressable: {
    marginBottom: 16,
    zIndex: 10,
  },
  cancelPressableLoading: {
    zIndex: 10,
    position: 'absolute',
    right: 23,
    width: ICON_BTN_SIZE,
    height: ICON_BTN_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
