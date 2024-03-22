import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import Space from '../../components/Space';
import {useNavigation} from '@react-navigation/native';
import BottomView from '../../components/BottomView/BottomView';
import OptionsSelector from '../../components/OptionSelector/OptionSelector';
import Toast from 'react-native-simple-toast';

const YanchtStep4 = ({route}) => {
  const {addressData, description, insuraneType, title} = route.params;
  console.log('first', route);
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      text: 'Flexible',
      additionalText:
        '. Free cancellations until 24 hours before the booking start time.\n' +
        '. Cancellations within 24 hours of the booking start time are non-refundable.',
    },
    {
      id: 2,
      text: 'Moderate',
      additionalText:
        '. Free cancellations until 5 days before the booking start time.\n' +
        '. 50% refund for cancellations between 3-5 days before the booking start time.\n' +
        '. Cancellations within 2 days of the booking start time are non-refundable.',
    },
    {
      id: 3,
      text: 'Strict',
      additionalText:
        '. Free cancellations until 30 days before the booking start time.\n' +
        '. 50% refund for cancellations between 15-30 days before the booking start time.\n' +
        '. Cancellations within 14 days of the booking start time are non-refundable.',
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
    navigation.navigate('YanchtStep5', {
      cancelType: selectedOption?.text,
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
        title={'Cancellation policy'}
        desc={'Select how you want to handle trip cancellations.'}
      />

      <OptionsSelector
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        showCheckbox={true}
        optionConStyle={{marginBottom: hp(15)}}
        optionStyle={{paddingVertical: hp(2)}}
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

export default YanchtStep4;
