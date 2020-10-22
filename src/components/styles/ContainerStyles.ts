import { StyleSheet } from 'react-native';
import { Metrics } from '../../constants';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },

  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
