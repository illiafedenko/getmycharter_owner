import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CustomInput = ({
  label,
  customStyle,
  onChangeText,
  labelStyle,
  placeholder,
  keyboardType,
  maxLength,
  multiline,
  value,
  editable,
}) => {
  return (
    <View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        style={[styles.inputText, customStyle]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        value={value}
        editable={editable}
      />
    </View>
  );
};

export default CustomInput;
