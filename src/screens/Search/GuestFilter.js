import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Space from '../../components/Space';
import TextButton from '../../components/TextButton';

const GuestFilter = props => {
  const [passenger, setPassenger] = useState(6);
  return (
    <View style={{paddingVertical: 8, paddingRight: 16}}>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.closeDrawer();
          }}>
          <Image
            source={require('../../assets/images/forward.png')}
            style={{height: 16}}
          />
        </TouchableOpacity>
      </View>
      <Space height={32} />
      <Text style={{fontWeight: 'bold', color: 'black'}}>
        Number of Passengers
      </Text>
      <Space height={32} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}>
        <TouchableOpacity
          style={{height: 22}}
          onPress={() => {
            setPassenger(passenger - 1);
          }}>
          <Image
            source={require('../../assets/images/minus.png')}
            style={{height: 25}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 60,
            height: 30,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderWidth: 2,
            borderColor: '#246bbc',
            borderRadius: 4,
          }}>
          <Text style={{textAlign: 'center'}}>{passenger}</Text>
        </View>
        <TouchableOpacity
          style={{height: 22}}
          onPress={() => {
            setPassenger(passenger + 1);
          }}>
          <Image
            source={require('../../assets/images/plus.png')}
            style={{height: 25}}
          />
        </TouchableOpacity>
      </View>
      <Space height={32} />
      <View
        style={{
          borderStyle: 'dashed',
          borderWidth: 1.5,
          borderColor: '#246bbc',
        }}></View>
      <Space height={32} />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 180,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextButton title="Search" style={{width: 80, height: 40}} />
        </View>
      </View>
    </View>
  );
};

export default GuestFilter;
