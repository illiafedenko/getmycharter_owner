import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import {useNavigation} from '@react-navigation/native';
import BottomView from '../../components/BottomView/BottomView';
import YachtSpec from './YachtSpec';
import Toast from 'react-native-simple-toast';

const YanchtStep8 = ({route}) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const {
    AllowdedItems,
    YachatFeatures,
    addressData,
    title,
    yachtImages,
    cancelType,
    description,
    insuraneType,
  } = route?.params;
  const navigation = useNavigation();

  const [yachtSpecData, setYachtSpecData] = useState({
    year: '',
    madeBy: '',
    modal: '',
    type: '',
    length: '',
    category: '',
    passengerCapacity: '',
    noofCabins: '',
    motorPower: '',
  });

  const handleNextPress = () => {
    // Check for empty fields before navigating
    const emptyFields = Object.keys(yachtSpecData).filter(
      key => yachtSpecData[key].trim() === '',
    );

    if (emptyFields.length > 0) {
      // Display toast for empty fields
      Toast.show(`Please fill in ${emptyFields.join(', ')}`);
    } else {
      navigation.navigate('YanchtStep9', {
        yachtSpecData: yachtSpecData,
        AllowdedItems: AllowdedItems,
        YachatFeatures: YachatFeatures,
        addressData: addressData,
        cancelType: cancelType,
        description: description,
        insuraneType: insuraneType,
        title: title,
        yachtImages: yachtImages,
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
        title={'Yacht specifiactions'}
        desc={
          'Please add your yacht’s specifications. Some are already populated based on information you provided earlier.'
        }
      />
      <YachtSpec
        yachtSpecData={yachtSpecData}
        setYachtSpecData={setYachtSpecData}
      />
      {!isKeyboardOpen && (
        <BottomView
          onBackPress={() => {
            navigation.goBack();
          }}
          onNextPress={handleNextPress}
          showback={true}
        />
      )}
    </View>
  );
};

export default YanchtStep8;
