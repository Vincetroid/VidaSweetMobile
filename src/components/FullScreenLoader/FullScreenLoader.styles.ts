import { StyleSheet } from 'react-native';
import { Colors } from '@/global-styles';

export const styles = StyleSheet.create({
  wrapperAbsolute: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
  },
  wrapper: {
    backgroundColor: Colors.lightPink + '15',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
