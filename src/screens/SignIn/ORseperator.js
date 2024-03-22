import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ORseperator = () => {
  return (
    <View style={styles.orContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>Or</Text>
      <View style={styles.line} />
    </View>
  );
};

export default ORseperator;
