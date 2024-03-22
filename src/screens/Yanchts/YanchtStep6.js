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
import MultiSelectOptionSelector from '../../components/MultiOptionSelector/MultiOptionSelector';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-simple-toast';

const YanchtStep6 = ({route}) => {
  console.log('routes', route.params);
  const {
    AllowdedItems,
    addressData,
    cancelType,
    description,
    insuraneType,
    title,
  } = route.params;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigation = useNavigation();
  const options = [
    {
      id: 1,
      text: 'Air Condition',
    },
    {
      id: 2,
      text: 'Anchor',
    },
    {
      id: 3,
      text: 'Bathroom',
    },
    {
      id: 4,
      text: 'Bluetooth Audio',
    },
    {
      id: 5,
      text: 'Cooler',
    },
    {
      id: 6,
      text: 'Depth Finder',
    },
    {
      id: 7,
      text: 'GPS',
    },
    {
      id: 8,
      text: 'Radar',
    },
    {
      id: 9,
      text: 'Shower',
    },
    {
      id: 10,
      text: 'Sterio',
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
    navigation.navigate('YanchtStep7', {
      AllowdedItems: AllowdedItems,
      YachatFeatures: selectedOptions,
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
        title={'Yacht features'}
        desc={'Show off what you offer on your yacht!'}
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

export default YanchtStep6;
