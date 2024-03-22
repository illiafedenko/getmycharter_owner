import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import fonts from '../../assets/fonts';
import {hp} from '../../utils/Dimensions';

const CustomHeader = ({
  source,
  backgroundColor,
  onPress,
  showLabel,
  showImg,
  styleIcon,
  label,
  elevation,
  labelText,
  height,
}) => {
  return (
    <View
      style={[
        styles.headerContainer,
        {
          backgroundColor: backgroundColor,
          elevation: elevation,
          height: height,
        },
      ]}>
      <TouchableOpacity onPress={onPress}>
        {showImg && (
          <Image source={source} style={[styles.iconStyle, styleIcon]} />
        )}
      </TouchableOpacity>
      {showLabel && <Text style={[styles.texth1, labelText]}>{label}</Text>}
      <View style={styles.iconStyle} />
    </View>
  );
};

export default CustomHeader;
