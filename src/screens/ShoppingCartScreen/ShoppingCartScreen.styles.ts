import { StyleSheet } from 'react-native';
import { FontFamilies } from '@/global-styles';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  emptyCardImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  emptyCartMsg: {
    fontFamily: FontFamilies.latoItalic,
    textAlign: 'center',
    marginVertical: 24,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 16,
  },
});
