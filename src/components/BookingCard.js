// BookingCard.js

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Space from './Space';
import GradientLine from './GradientLine';
import {wp} from '../utils/Dimensions';

const BookingCard = ({data, onPress}) => {
  const {username, phone, yacht} = data;

  const dateString = data?.date;
  const dateObject = new Date(dateString);

  // const formattedDate = dateObject?.toISOString().split('T')[0];

  return (
    <View
    //  onPress={onPress}
    >
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 16,
          paddingHorizontal: 32,
        }}>
        <Image
          source={{uri: data?.booked_yatch?.image}}
          style={{width: 60, height: 60, borderRadius: 60}}
        />
        <Space width={16} />
        <View style={{justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              {data?.booker?.username},
            </Text>
            <Space width={4} />
            {/* <Text style={{fontSize: 16, color: 'black', left: wp(3)}}>
              {formattedDate}
            </Text> */}
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#093373',
                width: wp(70),
              }}>
              {data?.booked_yatch?.title}
            </Text>
          </View>
        </View>
      </View>
      <GradientLine />
    </View>
  );
};

export default BookingCard;
