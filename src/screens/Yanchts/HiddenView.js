import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../../utils/Dimensions';
import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';

const HiddenView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainview}>
        <View>
          <View style={styles.innerView}>
            <View style={styles.dot} />
            <Text style={styles.hiding2}>Boat Details</Text>
          </View>
          <View style={styles.innerView}>
            <View style={styles.dot} />
            <Text style={styles.hiding2}>
              Insurance Information if applicable
            </Text>
          </View>
          <View style={styles.innerView}>
            <View style={styles.dot} />
            <Text style={styles.hiding2}>Availability</Text>
          </View>
          <View style={styles.innerView}>
            <View style={styles.dot} />
            <Text style={styles.hiding2}> Operators and durations</Text>
          </View>
          <View style={styles.innerView}>
            <View style={styles.dot} />
            <Text style={styles.hiding2}>Review and submit</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(60),
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#003580',
    right: 5,
  },
  mainview: {
    flexDirection: 'row',
    backgroundColor: '#003580',
    height: hp(31),
    width: wp(0.5),
  },
  innerView: {
    flexDirection: 'row',
    width: wp(50),
    marginBottom: hp(3),
    alignItems: 'center',
  },
  hiding2: {
    fontFamily: fonts.medium,
    fontSize: FontSize.regular,
    color: Colors.mainBlue,
    left: wp(5),
  },
});

export default HiddenView;
