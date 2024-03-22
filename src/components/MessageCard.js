// MessageCard.js

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Space from './Space';
import GradientLine from './GradientLine';

const MessageCard = ({data, onPress, completeObj}) => {
  //const {username, phone, yacht} = data;
  console.log('ficompleteObj---', completeObj);
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
        }}>
        <Image
          //source={ require('../assets/images/yacht_2.png')}
          source={{
            uri:
              data?.profile_pic == 'none'
                ? 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?ssl=1'
                : data?.profile_pic,
          }}
          style={{width: 60, height: 60, borderRadius: 60}}
        />

        <Space width={16} />
        <View style={{justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              {data?.username}
            </Text>
            <Space width={4} />
          </View>
          <View>
            <Text style={{fontSize: 10, color: 'black', opacity: 0.6}}>
              {completeObj?.yatch?.title}
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
                fontWeight: '500',
                opacity: 0.6,
              }}
              numberOfLines={1}>
              {/* {yacht} */}
              {completeObj?.latest_message}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#A9B4BE',
          opacity: 0.1,
        }}></View>
    </TouchableOpacity>
  );
};

export default MessageCard;
