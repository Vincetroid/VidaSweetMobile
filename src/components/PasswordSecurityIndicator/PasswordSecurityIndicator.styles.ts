import { StyleSheet } from 'react-native';
import { FontSizes, themeStyles } from '@/global-styles';

export const styles = StyleSheet.create({
  passwordRequirementTitle: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.medium,
    marginVertical: 4,
    color: themeStyles.text,
    alignSelf: 'center',
  },
  // checkIcon: {
  //   color: themeStyles.success,
  // },
  noCheck: {
    color: themeStyles.disabled,
  },
  passwordRequirementListContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  passwordRequirementList: {
    fontFamily: 'Lato Light',
    fontSize: FontSizes.medium,
    color: themeStyles.text,
    marginLeft: 4,
  },
});
