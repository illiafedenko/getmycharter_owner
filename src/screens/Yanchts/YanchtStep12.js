import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import Space from '../../components/Space';
import Toast from 'react-native-simple-toast';
import BottomView from '../../components/BottomView/BottomView';
import OptionsSelector from '../../components/OptionSelector/OptionSelector';
import MultiSelectOptionSelector from '../../components/MultiOptionSelector/MultiOptionSelector';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';

const YanchtStep12 = ({route}) => {
  const navigation = useNavigation();
  const [pricePerHr, setPricePerHr] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const {
    AllowdedItems,
    YachatFeatures,
    addressData,
    title,
    yachtImages,
    cancelType,
    description,
    insuraneType,
    yachtSpecData,
    advanceNoticeTime,
    multipleBooking,
    timebtwnBooking,
    captainedfishing,
    operateYacht,
  } = route?.params;
  console.log('fromstep12', timebtwnBooking);
  const options = [
    {
      id: 1,
      text: '2 hours',
    },
    {
      id: 2,
      text: '3 hours',
    },
    {
      id: 3,
      text: '4 hours',
    },
    {
      id: 4,
      text: '6 hours',
    },
    {
      id: 5,
      text: '8 hours',
    },

    // Add more options as needed
  ];

  const handleSelect = selected => {
    setSelectedOptions(selected);
    console.log('selected', selectedOptions);
  };

  const handlePrice = price => {
    setPricePerHr(price);
  };
  const handleNext = () => {
    if (selectedOptions.length == 0) {
      Toast.show('Please select atleast one option');
      return;
    }

    if (!pricePerHr) {
      Toast.show('Please enter Price per Hour');
      return;
    }

    navigation.navigate('YanchtStep13', {
      cancelType: cancelType,
      AllowdedItems: AllowdedItems,
      YachatFeatures: YachatFeatures,
      yachtImages: yachtImages,
      yachtSpecData: yachtSpecData,
      advanceNoticeTime: advanceNoticeTime,
      addressData: addressData,
      description: description,
      title: title,
      insuraneType: insuraneType,
      multipleBooking: multipleBooking,
      timebtwnBooking: timebtwnBooking,
      captainedfishing: captainedfishing,
      operateYacht: operateYacht,
      duration: selectedOptions,
      pricePerHour: pricePerHr,
    });
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/backIcon.png')}
        onPress={() => navigation.goBack()}
        label={'New Yachts'}
        styleIcon={{width: wp(7), height: hp(10)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
        showImg={true}
      />

      <CardInfo
        title={
          'Select which durations you would like to offer & Also Price per Hour'
        }
        labelStyle={{textAlign: 'center', marginVertical: hp(5)}}
      />

      <MultiSelectOptionSelector
        options={options}
        onSelect={handleSelect}
        selectedOptions={selectedOptions}
        //rowConStyle={{flexDirection: 'column'}}
      />

      <CustomInput
        label={'Price Per Hour *'}
        customStyle={styles.customInputTitle}
        labelStyle={styles.labelText}
        keyboardType={'numeric'}
        placeholder={'Enter Price per hour'}
        placeholderTextColor={Colors.lightGray}
        onChangeText={handlePrice}
        maxLength={60}
      />
      <Space height={hp(25)} />

      <BottomView
        onBackPress={() => {
          navigation.goBack();
        }}
        onNextPress={handleNext}
        showback={true}
      />
    </View>
  );
};

export default YanchtStep12;
