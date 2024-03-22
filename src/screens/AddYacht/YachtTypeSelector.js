import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {wp} from '../../utils/Dimensions';
import fonts from '../../assets/fonts';

const YachtTypeSelector = ({yachtTypeOptions, onSelectYachtType}) => {
  const [selectedYachtType, setSelectedYachtType] = useState(null);

  const handleYachtTypeSelect = yachtType => {
    setSelectedYachtType(yachtType);
    onSelectYachtType(yachtType);
  };

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const getImageSource = yachtType => {
    // Adjust the image paths accordingly
    switch (yachtType) {
      case 'Yacht':
        return require('../../assets/images/iconyach.png');
      case 'Jet Ski':
        return require('../../assets/images/jet_skiicon.png');
      case 'Motorboat':
        return require('../../assets/images/motorboaticon.png');
      case 'Sailboat':
        return require('../../assets/images/sailboaticon.png');
      case 'Catamaran':
        return require('../../assets/images/catamaranicon.png');
      case 'RIB':
        return require('../../assets/images/ribicon.png');

      default:
        return null;
    }
  };

  const chunkedYachtTypes = chunkArray(yachtTypeOptions, 3);

  return (
    <View>
      <Text style={styles.text1}>Yacht Type</Text>
      {chunkedYachtTypes.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleYachtTypeSelect(option.value)}
              style={[
                styles.yachtTypeButton,
                {
                  backgroundColor:
                    selectedYachtType === option.value
                      ? Colors.mainBlue
                      : Colors.white,
                },
              ]}>
              <Image
                source={getImageSource(option.value)}
                style={styles.yachtTypeImage}
                resizeMode="contain"
              />
              <Text
                numberOfLines={1}
                style={[
                  styles.yachtTypeLabel,
                  {
                    color:
                      selectedYachtType === option.value
                        ? Colors.white
                        : Colors.greish,
                  },
                ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.regularInter,
    marginVertical: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 15, // Increased space between rows
  },
  yachtTypeButton: {
    padding: 15, // Increased height of the button
    borderRadius: 8,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  yachtTypeImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
    alignSelf: 'center',
  },
  yachtTypeLabel: {
    alignSelf: 'center',
    fontSize: 10,
    fontFamily: fonts.regularInter,
  },
});

export default YachtTypeSelector;
