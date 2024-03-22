import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import fonts from '../../assets/fonts';
import {hp} from '../../utils/Dimensions';

const PhoneNumberInput = ({onPhoneNumberChange}) => {
  const [isCountryPickerVisible, setCountryPickerVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    cca2: 'AE',
    callingCode: '971',
  });

  const openCountryPicker = () => {
    setCountryPickerVisible(true);
  };

  const closeCountryPicker = () => {
    setCountryPickerVisible(false);
  };

  const handleCountrySelect = country => {
    setSelectedCountry(country);
    closeCountryPicker();
  };

  const handlePhoneNumberChange = text => {
    const phoneNumber = `+${selectedCountry.callingCode}${text}`;
    onPhoneNumberChange(phoneNumber);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(52, 58, 64, 0.68)',
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 10,
        height: hp(6),
        marginVertical: hp(2),
      }}>
      {/* CountryPicker */}
      <TouchableOpacity onPress={openCountryPicker}>
        <CountryPicker
          countryCode={selectedCountry.cca2}
          withFlag
          withFilter
          withAlphaFilter
          withCallingCode
          withEmoji
          onSelect={handleCountrySelect}
          visible={isCountryPickerVisible}
          onClose={closeCountryPicker}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={openCountryPicker}>
        <Text
          style={{
            color: 'black',
            fontSize: 13,
            fontFamily: fonts.regularInter,
          }}>{`+${selectedCountry.callingCode}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={openCountryPicker}>
        <Image
          source={require('../../assets/images/arwdown.png')}
          style={{
            width: 5,
            height: 5,
            paddingHorizontal: 10,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View
        style={{
          height: hp(6),
          width: 1,
          backgroundColor: 'rgba(52, 58, 64, 0.68)',
          marginHorizontal: 10,
        }}
      />

      <TextInput
        style={{flex: 1, height: 40, marginLeft: 10, color: 'black'}}
        placeholder={'Phone Number'}
        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
        keyboardType="phone-pad"
        onChangeText={handlePhoneNumberChange}
      />
    </View>
  );
};

export default PhoneNumberInput;
