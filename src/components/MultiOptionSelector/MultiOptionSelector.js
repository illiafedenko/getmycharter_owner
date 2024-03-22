import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {hp, wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import Space from '../Space';

const MultiSelectOptionSelector = ({
  options,
  selectedOptions,
  onSelect,
  rowConStyle,
}) => {
  const handleOptionSelect = option => {
    const isSelected = selectedOptions?.some(
      selected => selected.id === option.id,
    );
    let updatedSelection = [];

    if (isSelected) {
      updatedSelection = selectedOptions.filter(
        selected => selected.id !== option.id,
      );
    } else {
      updatedSelection = [...selectedOptions, option];
    }

    onSelect(updatedSelection);
  };

  // Group options into pairs for rendering in rows
  const pairedOptions = [];
  for (let i = 0; i < options.length; i += 2) {
    const pair = options.slice(i, i + 2);
    pairedOptions.push(pair);
  }

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {pairedOptions.map((pair, index) => (
          <View key={index} style={[styles.rowContainer, rowConStyle]}>
            {pair.map((option, idx) => {
              const isSelected = selectedOptions?.some(
                selected => selected.id === option.id,
              );
              const textColor = isSelected ? 'white' : Colors.mainBlue;

              return (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.option,
                    isSelected
                      ? styles.selectedOption
                      : styles.unselectedOption,
                    idx === 0 ? {marginRight: 10} : {marginLeft: 10}, // Spacing between options
                  ]}
                  onPress={() => handleOptionSelect(option)}>
                  <Text style={{color: textColor}}>{option.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Adjust as needed
    alignItems: 'center', // Align items as needed
    marginBottom: 10, // Spacing between rows
  },
  option: {
    //flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: hp(1),
    width: wp(40),
  },
  selectedOption: {
    backgroundColor: Colors.mainBlue,
    borderColor: Colors.white,
  },
  unselectedOption: {
    backgroundColor: 'white',
    borderColor: Colors.mainBlue,
  },
});

export default MultiSelectOptionSelector;
