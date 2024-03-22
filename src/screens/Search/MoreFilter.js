import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Slider from 'react-native-slider';

import Space from '../../components/Space';
import TextButton from '../../components/TextButton';

const MoreFilter = props => {
  const [type, setType] = useState(0);
  const [duration, setDuration] = useState(2);
  const [captain, setCaptain] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = value => {
    setSliderValue(value);
  };

  return (
    <View style={{padding: 16}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.closeDrawer();
            }}>
            <Image
              source={require('../../assets/images/forward.png')}
              style={{marginTop: 10, height: 16}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            flex: 0,
            fontSize: 24,
            fontWeight: 'bold',
            color: '#246bbc',
          }}>
          Filter By
        </Text>
      </View>
      <Space height={16} />
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#246bbc',
          }}>
          Type
        </Text>
        <Space height={4} />
        <View
          style={{
            paddingLeft: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextButton
            title="Motorboat"
            style={{width: 84, height: 30}}
            isOutline={type == 0 ? false : true}
            onPress={() => {
              setType(0);
            }}
          />
          <TextButton
            title="Sailboat"
            style={{width: 84, height: 30}}
            isOutline={type == 1 ? false : true}
            onPress={() => {
              setType(1);
            }}
          />
          <TextButton
            title="Catamaran"
            style={{width: 84, height: 30}}
            isOutline={type == 2 ? false : true}
            onPress={() => {
              setType(2);
            }}
          />
        </View>

        <View
          style={{
            paddingLeft: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextButton
            title="RIB"
            style={{width: 84, height: 30}}
            isOutline={type == 3 ? false : true}
            onPress={() => {
              setType(3);
            }}
          />
          <TextButton
            title="Yacht"
            style={{width: 84, height: 30}}
            isOutline={type == 4 ? false : true}
            onPress={() => {
              setType(4);
            }}
          />
          <TextButton
            title="Houseboat"
            style={{width: 84, height: 30}}
            isOutline={type == 5 ? false : true}
            onPress={() => {
              setType(5);
            }}
          />
        </View>
        <View
          style={{
            paddingLeft: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextButton
            title="Jetski"
            style={{width: 84, height: 30}}
            isOutline={type == 6 ? false : true}
            onPress={() => {
              setType(6);
            }}
          />
        </View>
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#246bbc'}}>
          Price per hour ($)
        </Text>
        <Space height={4} />
        <View
          style={{
            paddingLeft: 8,
          }}>
          <Slider
            value={sliderValue}
            minimumValue={0}
            maximumValue={100}
            step={1}
            minimumTrackTintColor="#246BBC"
            maximumTrackTintColor="#246BBC"
            thumbTintColor="#246BBC"
            onValueChange={handleSliderChange}
            onSlidingStart={() => console.log('Sliding started')}
            onSlidingComplete={() => console.log('Sliding completed')}
          />
        </View>
      </View>
        <Space height={4} />
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#246bbc',
          }}>
          Duration
        </Text>
        <Space height={4} />
        <View
          style={{
            paddingLeft: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextButton
            title="2 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 2 ? false : true}
            onPress={() => {
              setDuration(2);
            }}
          />
          <TextButton
            title="3 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 3 ? false : true}
            onPress={() => {
              setDuration(3);
            }}
          />
          <TextButton
            title="4 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 4 ? false : true}
            onPress={() => {
              setDuration(4);
            }}
          />
        </View>
        <View
          style={{
            paddingLeft: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextButton
            title="6 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 6 ? false : true}
            onPress={() => {
              setDuration(6);
            }}
          />
          <TextButton
            title="8 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 8 ? false : true}
            onPress={() => {
              setDuration(8);
            }}
          />
          <View style={{width: 84}}></View>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#246bbc',
          }}>
          Captain
        </Text>
        <Space height={4} />
        <View
          style={{
            paddingLeft: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextButton
            title="Captain"
            style={{width: 84, height: 30}}
            isOutline={captain ? false : true}
            onPress={() => {
              setCaptain(true);
            }}
          />
          <TextButton
            title="No Captain"
            style={{width: 84, height: 30}}
            isOutline={!captain ? false : true}
            onPress={() => {
              setCaptain(false);
            }}
          />
          <View style={{width: 84}}></View>
        </View>
      </View>
    </View>
  );
};

export default MoreFilter;
