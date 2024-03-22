// BottomView.js

import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './styles'; // Import your styles or define them here
import {hp, wp} from '../../utils/Dimensions';

const BottomView = ({onBackPress, onNextPress, showback}) => {
  return (
    <View style={styles.bottomView}>
      {showback ? (
        <TouchableOpacity style={styles.addButton} onPress={onBackPress}>
          <Image
            source={require('../../assets/images/backarrow.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <View style={{width: wp(30), height: hp(5)}}></View>
      )}
      <TouchableOpacity style={styles.addButton} onPress={onNextPress}>
        <Image
          source={require('../../assets/images/nextIcon.png')}
          style={styles.iconstyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomView;
