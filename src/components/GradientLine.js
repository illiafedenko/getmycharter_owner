import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import {Colors} from '../utils/Colors'; // Import Colors if needed
import {wp} from '../utils/Dimensions';

const GradientLine = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0)']}
      style={styles.gradientLine}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
    />
  );
};

const styles = StyleSheet.create({
  gradientLine: {
    height: 1.5,
    width: wp(95),
  },
});

export default GradientLine;
