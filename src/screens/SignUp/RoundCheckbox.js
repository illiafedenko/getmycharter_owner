import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

const RoundCheckbox = ({checked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkMark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.blackApp,
  },
  checked: {
    backgroundColor: Colors.blue,
  },
  checkMark: {
    color: 'white',
    fontSize: 8,
    alignSelf: 'center',
  },
});

export default RoundCheckbox;
