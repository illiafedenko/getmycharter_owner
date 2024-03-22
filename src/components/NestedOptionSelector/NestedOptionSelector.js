import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {hp, wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';
import Space from '../Space';

const NestedOptionSelector = ({
  options,
  onSelect,
  optionStyle,
  optionTextStyle,
  selectedOption,
  selectedSubOption,
  setSelectedOption,
  setSelectedSubOption,
}) => {
  const handleOptionPress = (option, subOption) => {
    setSelectedOption(option);
    setSelectedSubOption(subOption);
    onSelect(option, subOption);
  };

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.optionsContainer}>
        {options.map(option => (
          <View key={option?.id}>
            <TouchableOpacity
              style={[
                styles.option,
                optionStyle,
                selectedOption && selectedOption.id === option.id
                  ? styles.selectedOption
                  : styles.unselectedOption,
              ]}
              onPress={() => handleOptionPress(option, null)}>
              <View
                style={[
                  styles.checkbox,
                  selectedOption?.id === option?.id
                    ? styles.selectedCheckbox
                    : styles.unselectedCheckbox,
                ]}
              />

              <View style={styles.textContainer}>
                <Text
                  style={[
                    [styles.optionText, optionTextStyle],
                    selectedOption?.id === option?.id &&
                      styles.selectedOptionText,
                  ]}>
                  {option.text}
                </Text>
                <Text
                  style={[
                    styles.optionText2,
                    selectedOption?.id === option?.id &&
                      styles.selectedOptionText,
                  ]}>
                  {option.additionalText}
                </Text>
                {/* Sub-options */}
                {selectedOption &&
                  selectedOption.id === option.id &&
                  option.subOptions && (
                    <View style={styles.subOptionsContainer}>
                      {option.subOptions.map(subOption => (
                        <TouchableOpacity
                          key={subOption?.id}
                          style={[
                            styles.subOption,
                            selectedSubOption &&
                            selectedSubOption.id === subOption.id
                              ? styles.selectedSubOption
                              : styles.unselectedSubOption,
                          ]}
                          onPress={() => handleOptionPress(option, subOption)}>
                          {/* <View
                          style={[
                            styles.checkbox,
                            selectedSubOption === subOption
                              ? styles.selectedCheckbox
                              : styles.unselectedCheckbox,
                          ]}
                        /> */}
                          <View style={styles.textContainer}>
                            <Text
                              style={[
                                [styles.optionText],
                                {alignSelf: 'center'},
                                optionTextStyle,
                                selectedSubOption?.id === subOption?.id &&
                                  styles.selectedOptionText,
                              ]}>
                              {subOption.text}
                            </Text>
                            {/* <Text
                            style={[
                              styles.optionText2,
                              selectedSubOption === subOption &&
                                styles.selectedOptionText,
                            ]}>
                            {subOption.additionalText}
                          </Text> */}
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Space height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'column',

    marginTop: 5,
  },
  subOptionsContainer: {
    // marginTop: 10,
    //marginLeft: 30, // Adjust as needed for indentation
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  unselectedOption: {
    borderColor: Colors.mainBlue,
    backgroundColor: 'white',
    width: '100%',
  },
  selectedOption: {
    borderColor: 'white',
    backgroundColor: Colors.mainBlue,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 10,
  },
  unselectedCheckbox: {
    borderColor: Colors.mainBlue,
  },
  selectedCheckbox: {
    borderColor: 'white',
    backgroundColor: 'purple',
  },
  textContainer: {
    flex: 1,
  },
  optionText: {
    color: Colors.black,
    fontSize: FontSize.small,
    fontFamily: fonts.bold,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  optionText2: {
    textAlign: 'left',
    fontSize: 13,
    fontFamily: fonts.regularInter,
    color: '#747474',
  },
  selectedOptionText: {
    color: 'white',
  },
  subtitle: {
    color: 'black',
    marginTop: 5,
  },
  selectedSubtitle: {
    color: 'white',
  },
  subOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    width: '45%', // Set width to 50% to display two options in one row
  },

  subOptionsContainer: {
    flexDirection: 'row', // Display sub-options in a row
    flexWrap: 'wrap', // Allow items to wrap to the next row
    marginVertical: 20,
  },
  unselectedSubOption: {
    borderColor: Colors.mainBlue,
    backgroundColor: 'white',
  },
  selectedSubOption: {
    borderColor: 'white',
    backgroundColor: Colors.mainBlue,
  },
});

export default NestedOptionSelector;
