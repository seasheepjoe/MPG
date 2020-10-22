import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width,
  screenHeight: height,
};

export default metrics;
