import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import Space from '../../components/Space';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

import BottomView from '../../components/BottomView/BottomView';
import MultiSelectOptionSelector from '../../components/MultiOptionSelector/MultiOptionSelector';

const YanchtStep5 = ({route}) => {
  const {addressData, cancelType, description, insuraneType, title} =
    route.params;
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    {
      id: 1,
      text: 'Shoes',
    },
    {
      id: 2,
      text: 'Glass Bottle',
    },
    {
      id: 3,
      text: 'Fishing',
    },
    {
      id: 4,
      text: 'Alcohol',
    },
    {
      id: 5,
      text: 'Red wine',
    },
    {
      id: 6,
      text: 'Smoking',
    },
    {
      id: 7,
      text: 'Kids under 12',
    },
    {
      id: 8,
      text: 'Pets',
    },
    {
      id: 9,
      text: 'Swimming',
    },
    {
      id: 10,
      text: 'Party',
    },

    // Add more options as needed
  ];
  const handleSelect = selected => {
    setSelectedOptions(selected);
    console.log('selected', selectedOptions);
  };

  const handleNext = () => {
    if (selectedOptions.length == 0) {
      Toast.show('Please select atleast one option');
      return;
    }
    navigation.navigate('YanchtStep6', {
      AllowdedItems: selectedOptions,
      addressData: addressData,
      cancelType: cancelType,
      description: description,
      insuraneType: insuraneType,
      title: title,
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
        title={'What is allowed on your yacht?'}
        labelStyle={{textAlign: 'center', marginVertical: hp(5)}}
      />

      <MultiSelectOptionSelector
        options={options}
        selectedOptions={selectedOptions}
        onSelect={handleSelect}
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

export default YanchtStep5;
