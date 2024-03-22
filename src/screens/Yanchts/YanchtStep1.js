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

const YanchtStep1 = ({navigation}) => {
  const options = [
    {
      id: 1,
      text: 'I have recreational yacht insurance',
      additionalText: 'Select this if you own a personal yacht.',
      value: 'recreational',
    },
    {
      id: 2,
      text: 'I have commercial charter insurance',
      additionalText:
        'Select this if you run a yacht rental or charter business.',
      value: 'commercial',
    },

    // Add more options as needed
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = option => {
    setSelectedOption(option);
    console.log('first', selectedOption);
  };

  const handleNext = () => {
    if (!selectedOption) {
      Toast.show('Please select an option');
      return;
    }
    navigation.navigate('YanchtStep2', {insuraneType: selectedOption?.value});
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
        title={'What type of insurance do you have?'}
        desc={
          'You must have existing insurance in order for your yacht to be approved.'
        }
      />

      <OptionsSelector
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        showCheckbox={true}
        optionStyle={{paddingVertical: hp(2)}}
      />
      <BottomView
        onBackPress={() => {
          navigation.goBack();
        }}
        showback={true}
        onNextPress={handleNext}
      />
    </View>
  );
};

export default YanchtStep1;
