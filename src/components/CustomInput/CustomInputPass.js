import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const CustomInputPass = ({
  label,
  customStyle,
  labelColor,
  placeholder,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      <View>
        <TextInput
          style={[styles.inputTextPass, customStyle]}
          secureTextEntry={!showPassword}
          placeholder={placeholder}
          placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
          {showPassword ? (
            <Image
              source={require('../../assets/images/hide.png')}
              style={styles.imgStyle}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../../assets/images/show.png')}
              style={styles.imgStyle}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomInputPass;
