import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import fonts from '../../assets/fonts';
import {FontSize} from '../../utils/FontSize';
import CustomInput from '../../components/CustomInput/CustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useNavigation} from '@react-navigation/native';
import Space from '../../components/Space';
import YachtTypePicker from '../../components/CustomPicker/CustomPicker';

const YachtSpec = ({yachtSpecData, setYachtSpecData}) => {
  const yachtTypeOptions = [
    {label: 'Yacht', value: 'Yacht'},
    {label: 'Jet Ski', value: 'Jet Ski'},
    {label: 'Motorboat', value: 'Motorboat'},
    {label: 'Sailboat', value: 'Sailboat'},
    {label: 'Catamaran', value: 'Catamaran'},
    {label: 'RIB', value: 'RIB'},
    {label: 'Houseboat', value: 'Houseboat'},
  ];
  const onChangeText = (field, value) => {
    setYachtSpecData(prevData => ({...prevData, [field]: value}));
  };
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <Space height={10} />
        <CustomInput
          label={'Year *'}
          keyboardType={'numeric'}
          maxLength={6}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          placeholder={'Yacht Year'}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => onChangeText('year', text)}
          value={yachtSpecData.year}
        />
        <CustomInput
          label={'Made by *'}
          placeholder={'Made'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => onChangeText('madeBy', text)}
          value={yachtSpecData.madeBy}
        />
        <CustomInput
          label={'Modal *'}
          placeholder={'2022'}
          keyboardType={'numeric'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => onChangeText('modal', text)}
          value={yachtSpecData.modal}
          maxLength={4}
        />
        {/* <CustomInput
          label={'Type *'}
          placeholder={'Type'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => onChangeText('type', text)}
          value={yachtSpecData.type}
        /> */}
        <YachtTypePicker
          options={yachtTypeOptions}
          label={'Type *'}
          selectedValue={yachtSpecData.type}
          onValueChange={value => onChangeText('type', value)}
        />

        <CustomInput
          label={'Length (m) *'}
          placeholder={'Length'}
          keyboardType={'numeric'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          placeholderTextColor={Colors.lightGray}
          onChangeText={text => onChangeText('length', text)}
          value={yachtSpecData.length}
        />
        <CustomInput
          label={'Category *'}
          placeholder={'Category'}
          customStyle={styles.customInput}
          placeholderTextColor={Colors.lightGray}
          labelStyle={styles.labelText}
          onChangeText={text => onChangeText('category', text)}
          value={yachtSpecData.category}
        />
        <CustomInput
          label={'Passenger Capacity *'}
          placeholder={'Capacity'}
          keyboardType={'numeric'}
          maxLength={2}
          customStyle={styles.customInput}
          placeholderTextColor={Colors.lightGray}
          labelStyle={styles.labelText}
          onChangeText={text => onChangeText('passengerCapacity', text)}
          value={yachtSpecData.passengerCapacity}
        />

        <CustomInput
          label={'Number of Cabins *'}
          placeholder={'Number of Cabins'}
          keyboardType={'numeric'}
          maxLength={4}
          customStyle={styles.customInput}
          placeholderTextColor={Colors.lightGray}
          labelStyle={styles.labelText}
          onChangeText={text => onChangeText('noofCabins', text)}
          value={yachtSpecData.noofCabins}
        />

        <CustomInput
          label={'Motor Power  *'}
          placeholder={'Motor Power'}
          keyboardType={'numeric'}
          maxLength={5}
          customStyle={styles.customInput}
          placeholderTextColor={Colors.lightGray}
          labelStyle={styles.labelText}
          onChangeText={text => onChangeText('motorPower', text)}
          value={yachtSpecData.motorPower}
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
    borderColor: Colors.mainBlue,
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

export default YachtSpec;
