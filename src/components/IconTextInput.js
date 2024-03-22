import React from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconTextInput = props => {
  return (
    <View style={styles.iconTextInput}>
      <Image source={props.image} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        underlineColorAndroid="transparent"
        secureTextEntry={props.secureTextEntry ? true : false}
        focusable={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconTextInput: {
    marginHorizontal: '12px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default IconTextInput;
