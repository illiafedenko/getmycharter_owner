import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import FastImage from 'react-native-fast-image';
import fonts from '../../assets/fonts';
import {FontSize} from '../../utils/FontSize';

const BankInfoCard = ({bankDetails}) => {
  console.log('ok', bankDetails?.bankDetails);
  return (
    <View style={styles.card}>
      <Text style={styles.header}>Bank Information</Text>
      <FastImage
        source={require('../../assets/images/card.gif')}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />

      <Text style={styles.detailsText}>
        {bankDetails?.bankDetails?.acc_number}
      </Text>
      <Text style={styles.detailsText}>
        Account Holder: {bankDetails?.acc_name}
      </Text>
      <Text style={styles.detailsText}>
        Account Type: {bankDetails?.acc_type}
      </Text>
      <Text style={styles.detailsText}>
        Routing Number: {bankDetails?.routing_number}
      </Text>
      <Text style={styles.detailsText}>
        Billing Address: {bankDetails?.billing_address_1}{' '}
        {bankDetails?.billing_address_2}
      </Text>
      <Text style={styles.detailsText}>City: {bankDetails?.city}</Text>
      <Text style={styles.detailsText}>State: {bankDetails?.state}</Text>
      <Text style={styles.detailsText}>
        ZIP or Postal Code: {bankDetails?.zip_or_postal_code}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginVertical: hp(5),
    width: wp(80),
    // padding: hp(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  detailsText: {
    fontSize: FontSize.regular,
    marginBottom: hp(1),
    color: Colors.black,
    fontFamily: fonts.regular,
    width: wp(70),
    textAlign: 'center',
  },
});

export default BankInfoCard;
