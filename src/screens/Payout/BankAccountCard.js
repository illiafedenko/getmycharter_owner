import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import FastImage from 'react-native-fast-image';
import fonts from '../../assets/fonts';
import {FontSize} from '../../utils/FontSize';

const BankAccountCard = ({onPress}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>Bank Account</Text>
      <FastImage
        source={require('../../assets/images/card.gif')}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.description}>
        Connect your bank account to enable direct deposit
      </Text>
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Text style={styles.addButtonTextplus}>+</Text>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
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
});

export default BankAccountCard;
