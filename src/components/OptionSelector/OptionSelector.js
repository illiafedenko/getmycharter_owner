import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {wp} from '../../utils/Dimensions';

const OptionSelector = ({
  options,
  selectedOption,
  onSelect,
  optionConStyle,
  optionTextStyle,
  optionStyle,
  showCheckbox,
  additionalstyle,
}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={[styles.optionsContainer, optionConStyle]}>
        {options.map(option => (
          <TouchableOpacity
            key={option.id}
            style={[
              [styles.option, optionStyle],
              selectedOption && selectedOption?.id === option?.id
                ? styles.selectedOption
                : styles.unselectedOption,
            ]}
            onPress={() => onSelect(option)}>
            <View style={styles.textContainer}>
              <Text
                style={[
                  [styles.optionText, optionTextStyle],
                  selectedOption?.id === option?.id &&
                    styles.selectedOptionText,
                ]}>
                {option?.text}
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  style={[
                    [styles.optionText2, additionalstyle],
                    selectedOption?.id === option?.id &&
                      styles.selectedOptionText,
                  ]}>
                  {option?.additionalText}
                </Text>

                {showCheckbox && (
                  <View
                    style={{
                      width: '10%',
                      alignItems: 'flex-end',
                    }}>
                    <View
                      style={[
                        styles.checkbox,
                        selectedOption?.id === option?.id
                          ? styles.selectedCheckbox
                          : styles.unselectedCheckbox,
                      ]}
                    />
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {/* <Space height={80} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //    marginVertical: 10,
    width: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'column',
    // marginTop: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    //  paddingVertical: 50,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#343A40',
  },
  unselectedOption: {
    borderColor: Colors.mainBlue,
    backgroundColor: 'white',
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
  },
  unselectedCheckbox: {
    borderColor: '#343A40',
    opacity: 0.4,
  },
  selectedCheckbox: {
    borderColor: 'white',
    backgroundColor: 'purple',
  },
  textContainer: {
    flex: 1,
  },
  optionText: {
    color: '#040F0F',
    fontSize: FontSize.small,
    fontFamily: fonts.boldInter,
    alignSelf: 'flex-start',
  },
  optionText2: {
    color: '#040F0F',
    fontSize: FontSize.small,
    alignSelf: 'center',
    lineHeight: 20,
    width: '90%',
    fontFamily: fonts.regularInter,
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
});

export default OptionSelector;
