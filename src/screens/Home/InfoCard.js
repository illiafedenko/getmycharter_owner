import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Space from '../../components/Space';
import {hp, wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';

const InfoCard = () => {
  return (
    <View
      style={[
        {
          borderRadius: 12,
          borderColor: 'black',
          borderWidth: 1,
          paddingVertical: 12,
          paddingHorizontal: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: wp(90),
          marginVertical: hp(2),
          backgroundColor: Colors.white,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
          alignSelf: 'center',
        },
      ]}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            //height: '30',
            borderRadius: 10,
            backgroundColor: '#20A84E',
            width: wp(20),
            height: hp(4),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: FontSize.small,
              fontFamily: fonts.medium,
              alignSelf: 'center',
              color: 'black',
              alignSelf: 'center',
            }}>
            0
          </Text>
        </View>
        <Space height={8} />

        <Text
          numberOfLines={2}
          style={[styles.texth1, {width: wp(25)}]}
          // style={{textAlign: 'center', fontSize: 13, width: wp(25)}}
        >
          Response rate
        </Text>
      </View>
      <View
        style={{
          borderRightWidth: 1,

          width: wp(30),
          borderLeftWidth: 1,
          borderRightWidth: 1,
        }}>
        <View
          style={{
            width: wp(20),
            alignSelf: 'center',
            //  height: '30',
            borderRadius: 10,
            backgroundColor: '#FFCE31',
            width: wp(20),
            height: hp(4),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: FontSize.small,
              fontFamily: fonts.medium,
              color: 'black',
            }}>
            0
          </Text>
        </View>
        <Space height={8} />
        <View>
          <Text numberOfLines={2} style={[styles.texth1]}>
            Completed Booking
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',

          width: wp(25),
        }}>
        <View
          style={{
            width: wp(20),
            //   height: '30',
            borderRadius: 10,
            backgroundColor: Colors.pink,
            width: wp(20),
            height: hp(4),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: FontSize.tiny,
              fontFamily: fonts.medium,
              color: 'black',
              alignSelf: 'center',
            }}>
            $0
          </Text>
        </View>
        <Space height={12} />
        <View>
          <Text numberOfLines={2} style={[styles.texth1]}>
            Total Earning
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InfoCard;
const styles = StyleSheet.create({
  texth1: {
    fontSize: FontSize.small,
    fontFamily: fonts.medium,
    textAlign: 'center',
    color: 'black',
  },
});
