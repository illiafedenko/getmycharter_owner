import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import FastImage from 'react-native-fast-image';
import fonts from '../../assets/fonts';
import {FontSize} from '../../utils/FontSize';
import CustomInput from '../../components/CustomInput/CustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SuccessModal from '../../components/CustomModal/SuccessModal';
import {useNavigation} from '@react-navigation/native';

const BankForm = ({formData, onChange, onSubmit}) => {
  const {
    nameOnAccount,
    accountType,
    routingNumber,
    accountNumber,
    billingStreetAddress1,
    streetAddress2,
    city,
    state,
    zipCode,
  } = formData;

  return (
    <KeyboardAwareScrollView>
      <View style={styles.card}>
        <Text style={styles.header}>Bank Account Information</Text>
        <Text style={styles.description}>
          Update your bank account to change how you get paid
        </Text>
        <CustomInput
          label={'Name on Account'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          placeholder={'Enter Your Name'}
          value={nameOnAccount}
          onChangeText={text => onChange('nameOnAccount', text)}
        />

        <CustomInput
          label={'Account Type'}
          placeholder={'Enter Account Type'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          value={accountType}
          onChangeText={text => onChange('accountType', text)}
        />

        <CustomInput
          label={'Routing Number'}
          placeholder={'Enter Routing Number'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          value={routingNumber}
          onChangeText={text => onChange('routingNumber', text)}
        />

        <CustomInput
          label={'Account Number'}
          placeholder={'09257400225610'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          value={accountNumber}
          onChangeText={text => onChange('accountNumber', text)}
        />

        <CustomInput
          label={'Billing Street Address 1'}
          placeholder={'Street 1'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          value={billingStreetAddress1}
          onChangeText={text => onChange('billingStreetAddress1', text)}
        />

        <CustomInput
          label={'Street Address 2'}
          placeholder={'Street 2'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          value={streetAddress2}
          onChangeText={text => onChange('streetAddress2', text)}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp(70),
          }}>
          <CustomInput
            label={'City'}
            placeholder={'Lahore'}
            customStyle={styles.customInputhalf}
            labelStyle={styles.labelText}
            value={city}
            onChangeText={text => onChange('city', text)}
          />

          <CustomInput
            label={'State'}
            customStyle={styles.customInputhalf}
            labelStyle={styles.labelText}
            placeholder={'Pakistan'}
            value={state}
            onChangeText={text => onChange('state', text)}
          />
        </View>

        <CustomInput
          label={'Zip / Postal Code'}
          placeholder={'512010'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          value={zipCode}
          onChangeText={text => onChange('zipCode', text)}
        />

        <TouchableOpacity
          style={styles.addButton}
          //  onPress={() => setIsModalVisible(true)}
          onPress={onSubmit}>
          <Text style={styles.addButtonTextplus}>+</Text>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
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
    paddingLeft: wp(4),
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
    marginVertical: hp(5),
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

export default BankForm;
