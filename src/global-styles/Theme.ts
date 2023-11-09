import { Colors } from './Colors';

const themes = Object.freeze({
  light: {
    primary: Colors.white,
    secondary: Colors.boldPink,
    tertiary: Colors.gold,
    quaternary: Colors.lightPink,
    text: Colors.black,
    black: Colors.black,
    white: Colors.white,
    success: Colors.green,
    warning: Colors.orange,
    error: Colors.red,
    background: Colors.white,
    searchBg: Colors.grayBold,
    disabled: Colors.grayLight,
    divider: Colors.gray,
  },
  dark: {
    primary: Colors.white,
    secondary: Colors.boldPink,
    tertiary: Colors.gold,
    text: Colors.white,
    black: Colors.white,
    white: Colors.black,
    success: Colors.green,
    warning: Colors.orange,
    error: Colors.red,
    background: Colors.black,
    searchBg: Colors.grayBold,
    disabled: Colors.grayLight,
    divider: Colors.gray,
  },
});

export const themeName = 'light';

export const themeStyles = themes[themeName];
