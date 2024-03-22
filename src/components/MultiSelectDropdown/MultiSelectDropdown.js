import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import fonts from '../../assets/fonts';
import Space from '../Space';

const MultiSelectDropdown = ({label, options, selectedItems, onSelect}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleSelect = item => {
    onSelect(item);
    //toggleExpand();
  };

  const renderOptions = () => {
    return (
      <View
        style={{
          marginBottom: '100%',
          backgroundColor: '#F0F0F0',
          padding: 23,
          borderRadius: 10,
        }}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 40, // Adjust the height as needed
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 8,
              overflow: 'hidden',
              marginVertical: 8,
              paddingLeft: 8,
            }}
            onPress={() => handleSelect(item)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={
                  selectedItems.includes(item)
                    ? require('../../assets/images/select.png')
                    : require('../../assets/images/unSelect.png')
                }
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 8,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: selectedItems.includes(item) ? '#040F0F' : '#6B6B6B',
                }}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={toggleExpand} style={{marginTop: 16}}>
          <Text style={{color: 'black', textAlign: 'center'}}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: '#003580',
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 8,
          marginVertical: 10,
        }}
        onPress={toggleExpand}>
        <Text
          style={{
            fontSize: 14,
            color: '#040F0F',
            fontFamily: fonts.regularInter,
          }}>
          {label}
        </Text>
        <Image
          source={
            expanded
              ? require('../../assets/images/up.png')
              : require('../../assets/images/down.png')
          }
          style={{width: 8, height: 4}}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {expanded && renderOptions()}
    </View>
  );
};

export default MultiSelectDropdown;
