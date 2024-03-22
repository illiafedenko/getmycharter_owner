import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import FastImage from 'react-native-fast-image';
import fonts from '../../assets/fonts';
import {FontSize} from '../../utils/FontSize';
import CustomInput from '../../components/CustomInput/CustomInput';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SuccessModal from '../../components/CustomModal/SuccessModal';
import {useNavigation} from '@react-navigation/native';
import Space from '../../components/Space';
import Constants from '../../Services/constants';

const AddressForm = ({updateAddressData, validationErrors}) => {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always">
      <View style={styles.card}>
        <Text style={styles.header}>Address Information</Text>

        <CustomInput
          label={'Country *'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          placeholder={'Country Name'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => updateAddressData('country', text)}
        />

        {/* <CustomInput
          label={'Street Address 1 *'}
          placeholder={'Street 1'}
          placeholderTextColor={Colors.lightGray}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          onChangeText={text => updateAddressData('streetAddress1', text)}
        /> */}
        <Text style={[styles.label]}>Street Address 1 *</Text>

        <GooglePlacesAutocomplete
          placeholder="Street Address 1 *"
          listViewDisplayed={false}
          onPress={(data, details = null) => {
            const addressData = {
              description: data?.description,
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
            };
            console.log('Address Data', addressData);
            updateAddressData('streetAddress1', addressData);
          }}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          fetchDetails={true}
          query={{
            key: Constants.API_KEY,
            language: 'en', // language of the results
          }}
          styles={{
            container: styles.autocompleteContainer,
            textInput: styles.customInput,
            description: {
              color: 'black', // Set the color of the suggestion text
            },
            placeholderTextColor: 'black',
          }}
          debounce={300}
        />

        <CustomInput
          label={'Street Address 2 *'}
          placeholder={'Street 2'}
          customStyle={styles.customInput}
          placeholderTextColor={Colors.lightGray}
          labelStyle={styles.labelText}
          onChangeText={text => updateAddressData('streetAddress2', text)}
        />

        <CustomInput
          label={'City *'}
          placeholder={'City'}
          customStyle={styles.customInput}
          placeholderTextColor={Colors.lightGray}
          labelStyle={styles.labelText}
          onChangeText={text => updateAddressData('city', text)}
        />

        <CustomInput
          label={'State / Province *'}
          placeholder={'State/Province'}
          customStyle={styles.customInput}
          placeholderTextColor={Colors.lightGray}
          labelStyle={styles.labelText}
          onChangeText={text => updateAddressData('stateProvince', text)}
        />

        <CustomInput
          label={'Zip / Postal Code *'}
          placeholder={'Zip/Postal Code'}
          placeholderTextColor={Colors.lightGray}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          onChangeText={text => updateAddressData('postalCode', text)}
          maxLength={7}
          keyboardType={'numeric'}
        />

        <Space height={hp(20)} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  customInput: {
    width: wp(70),
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    color: 'black',
    paddingLeft: wp(4),
  },

  label: {
    color: Colors.black,
    fontFamily: fonts.bold,
    fontSize: FontSize.tiny,
    alignSelf: 'flex-start',
    left: wp(10),
  },

  autocompleteContainer: {
    flex: 1,
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
    width: wp(70),
    marginBottom: hp(1.5),
    // borderWidth: 1,
    // borderColor: Colors.black,
    //borderRadius: 10,
  },

  customInputhalf: {
    width: wp(30),
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    paddingLeft: wp(4),
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginVertical: hp(2),
    width: wp(90),
    // padding: hp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    alignItems: 'center',
  },
  header: {
    fontSize: FontSize.medium,
    marginVertical: hp(2),
    color: Colors.black,
    fontFamily: fonts.bold,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  description: {
    fontSize: FontSize.small,
    marginBottom: hp(2),
    color: Colors.black,
    fontFamily: fonts.light,
    width: wp(70),
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: Colors.mainBlue,
    flexDirection: 'row',
    borderRadius: 50,
    width: wp(20),
    height: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    alignContent: 'center',
    margin: wp(2),
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: FontSize.tiny,
    fontFamily: fonts.bold,
  },
  addButtonTextplus: {
    color: '#ffffff',
    fontSize: FontSize.medium,
    right: 5,
    fontFamily: fonts.bold,
  },
  labelText: {
    color: Colors.black,
    fontFamily: fonts.bold,
    fontSize: FontSize.tiny,
  },
});

export default AddressForm;
