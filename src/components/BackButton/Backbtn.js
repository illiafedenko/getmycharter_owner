import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {FontSize} from '../../utils/FontSize';
import {hp} from '../../utils/Dimensions';

const GoBackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/bckIcon.png')}
          style={styles.arrowImage}
          resizeMode="contain"
        />
        <Text style={styles.text}>Back</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: hp(2),
  },
  arrowImage: {
    width: 13,
    marginRight: 10,
  },
  text: {
    color: '#121212',
    fontFamily: fonts.lightInter,
    fontSize: FontSize.tiny,
    alignSelf: 'center',
  },
});

export default GoBackButton;
