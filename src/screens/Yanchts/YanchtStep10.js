import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import Space from '../../components/Space';

import BottomView from '../../components/BottomView/BottomView';
import Toast from 'react-native-simple-toast';
import NestedOptionSelector from '../../components/NestedOptionSelector/NestedOptionSelector';
import {useNavigation} from '@react-navigation/native';
import {G} from 'react-native-svg';

const YanchtStep10 = ({route}) => {
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
  } = route?.params;

  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const optionsData = [
    {
      id: 1,
      text: 'No',
      additionalText: 'This yacht can only be booked once a day.',
      // subOptions: [
      //   {
      //     id: 11,
      //     text: 'Sub-Option 1-1',
      //     additionalText: 'Sub-Additional Text 1-1',
      //   },
      //   {
      //     id: 12,
      //     text: 'Sub-Option 1-2',
      //     additionalText: 'Sub-Additional Text 1-2',
      //   },
      // ],
    },
    {
      id: 2,
      text: 'Yes',
      additionalText: 'How much time do you need in between bookings?',
      subOptions: [
        {
          id: 21,
          text: 'None',
          //     additionalText: 'Sub-Additional Text 2-1',
        },
        {
          id: 22,
          text: '30 mins',
          //   additionalText: 'Sub-Additional Text 2-2',
        },
        {
          id: 23,
          text: '1 hour',
          //   additionalText: 'Sub-Additional Text 2-2',
        },
        {
          id: 24,
          text: '2 hours',
          //   additionalText: 'Sub-Additional Text 2-2',
        },
      ],
    },
  ];

  const handleSelect = (option, subOption) => {
    setSelectedOption(option);
    setSelectedSubOption(subOption);
    console.log('Selected Option:', option);
    console.log('Selected Sub-Option:', subOption);
    // You can perform additional actions based on the selected option and sub-option
  };

  const onNextPress = () => {
    if (!selectedOption) {
      Toast.show('Please select an option');
    } else if (selectedOption.text === 'Yes' && !selectedSubOption) {
      Toast.show('Please select a sub-option');
    } else {
      navigation.navigate('YanchtStep11', {
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
        multipleBooking: selectedOption,
        timebtwnBooking: selectedSubOption,
      });
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/backIcon.png')}
        onPress={() => navigation.goBack()}
        label={'New Yacht'}
        styleIcon={{width: wp(7), height: hp(10)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
        showImg={true}
      />

      <CardInfo
        title={'Do you want to allow multiple bookings in one day?'}
        desc={
          'Earn more from your boat by allowing multiple bookings on the same day.'
        }
      />

      <NestedOptionSelector
        options={optionsData}
        onSelect={handleSelect}
        selectedOption={selectedOption}
        selectedSubOption={selectedSubOption}
        setSelectedOption={setSelectedOption}
        setSelectedSubOption={setSelectedSubOption}
        optionStyle={{marginVertical: 10}}
        optionTextStyle={{fontSize: 16}}
      />
      <BottomView
        onBackPress={() => {
          navigation.goBack();
        }}
        onNextPress={onNextPress}
        showback={true}
      />
    </View>
  );
};

export default YanchtStep10;
