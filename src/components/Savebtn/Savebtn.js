import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import fonts from '../../assets/fonts';

const Savebtn = ({onPress, customStyle, btnStlye, label}) => {
  return (
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, btnStlye]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.mainBlue,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: fonts.semiInter,
  },
});

export default Savebtn;
