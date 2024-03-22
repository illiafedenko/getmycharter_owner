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

const YanchtStep11 = ({route}) => {
  console.log('11Step', route.params.timebtwnBooking);
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
  } = route?.params;
  console.log('fromstep11', timebtwnBooking);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    {
      id: 1,
      text: 'Yes',
    },
    {
      id: 2,
      text: 'No',
    },

    // Add more options as needed
  ];
  const optionsOperate = [
    {
      id: 1,
      text: 'Renter operates my yacht',
    },
    {
      id: 2,
      text: 'Certified captain operates my yacht',
    },

    // Add more options as needed
  ];

  const handleSelect = option => {
    setSelectedOption(option);
    console.log('first', selectedOption);
  };
  const handleSelectMultiple = selected => {
    setSelectedOptions(selected);
    console.log('selected', selectedOptions);
  };

  const handleNext = () => {
    if (selectedOptions.length == 0) {
      Toast.show('Please select atleast one Operator');
      return;
    } else if (!selectedOption) {
      Toast.show('Please select Captained option');
      return;
    }
    navigation.navigate('YanchtStep12', {
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
      captainedfishing: selectedOption,
      operateYacht: selectedOptions,
    });
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
        title={'Choose who operates your yacht'}
        desc={
          'You can let renters who you approve and/or a captain to operate your yacht.  '
        }
      />
      <Text style={styles.name2}>Is this a captained fishing charter?</Text>
      <OptionsSelector
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        optionStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          marginVertical: 10,
          borderWidth: 1,
          borderRadius: 5,
          width: wp(35),
        }}
        optionConStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          width: wp(80),
        }}
        optionTextStyle={{
          top: 10,
          left: 35,
        }}
      />

      <Text style={[styles.name2, {width: wp(80)}]}>
        Who can operate your yacht? Select one or both options.
      </Text>
      <MultiSelectOptionSelector
        options={optionsOperate}
        selectedOptions={selectedOptions}
        onSelect={handleSelectMultiple}
      />
      <Space height={hp(20)} />
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

export default YanchtStep11;
