import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CustomButton = ({
  title,
  showIcon,
  labelColor,
  onPress,
  bgColor,
  bdColor,
  loading,
  mgVertical,
  customStyle,
  imgsrc,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        customStyle,
        {
          backgroundColor: bgColor,
          borderColor: bdColor,
          marginVertical: mgVertical,
        },
      ]}
      onPress={onPress}
      disabled={loading}>
      {showIcon && <Image source={imgsrc} style={styles.iconStyle} />}
      {loading ? (
        <ActivityIndicator size="small" color={labelColor} />
      ) : (
        <Text style={[styles.btnText, {color: labelColor}]}>{title}</Text>
      )}
      <View style={{width: 15, height: 15}} />
    </TouchableOpacity>
  );
};

export default CustomButton;
