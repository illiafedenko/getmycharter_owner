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
import {useNavigation} from '@react-navigation/native';

const YanchtStep9 = ({route}) => {
  console.log('route.', route.params.yachtSpecData);
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
  } = route?.params;
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    {
      id: 1,
      text: '1 hour',
    },
    {
      id: 2,
      text: '3 hour',
    },
    {
      id: 3,
      text: '6 hour',
    },
    {
      id: 4,
      text: '9 hour',
    },

    // Add more options as needed
  ];
  const handleSelect = option => {
    setSelectedOption(option);
    console.log('first', selectedOption);
  };

  const handleNext = () => {
    if (!selectedOption) {
      Toast.show('Please select an option');
      return;
    }
    navigation.navigate('YanchtStep10', {
      cancelType: cancelType,
      AllowdedItems: AllowdedItems,
      YachatFeatures: YachatFeatures,
      yachtImages: yachtImages,
      yachtSpecData: yachtSpecData,
      advanceNoticeTime: selectedOption,
      addressData: addressData,
      description: description,
      title: title,
      insuraneType: insuraneType,
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
        title={'Select your advance notice'}
        desc={
          'How much time do you need to prepare for potential last-minute requests?'
        }
      />

      <Space height={hp(1)} />
      <OptionsSelector
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        showCheckbox={true}
        optionConStyle={{marginBottom: hp(15)}}
        optionStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
          paddingHorizontal: 15,
          marginVertical: 10,
          borderWidth: 1,
          borderRadius: 5,
        }}
        optionTextStyle={{
          top: 10,
          left: 120,
        }}
      />
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

export default YanchtStep9;
