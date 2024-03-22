import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';

const MessageHeader = ({
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
    <View>
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
      <View style={{backgroundColor: Colors.mainBlue}}>
        <View style={styles.innerView}></View>
      </View>
    </View>
  );
};

export default MessageHeader;
