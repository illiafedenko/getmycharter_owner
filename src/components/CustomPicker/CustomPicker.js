import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';

const YachtTypePicker = ({
  selectedValue,
  onValueChange,
  label,
  labelStyle,
  customIOS,
  customAndroid,
  options,
}) => {
  return (
    <View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <RNPickerSelect
        placeholder={{label: 'Select Type', value: null}}
        items={options}
        onValueChange={onValueChange}
        value={selectedValue}
        style={{
          inputAndroid: [styles.custom, customAndroid],
          inputIOS: [styles.customInput, customIOS],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customInput: {},
  label: {
    color: Colors.black,
    fontFamily: fonts.bold,
    fontSize: FontSize.tiny,
  },
});

export default YachtTypePicker;
