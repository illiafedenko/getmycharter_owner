import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import Space from '../../components/Space';
import StaticView from './HiddenView';
import VerticalLineWithDots from './HiddenView';
import HiddenView from './HiddenView';
import BottomView from '../../components/BottomView/BottomView';

const NewYanctScreen = ({navigation}) => {
  const handleNext = () => {
    // Implement logic for navigating to the next screen
  };

  const handleBack = () => {
    // Implement logic for navigating back to the previous screen
    navigation.goBack();
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
        title={'Lets get started'}
        desc={'You will be done in less than 15 minutes'}
      />
      <Text style={styles.texth1}>List your yacht in 5 quick steps</Text>
      <Space height={30} />
      <HiddenView />
      <BottomView
        onBackPress={() => {
          navigation.goBack();
        }}
        onNextPress={() => {
          navigation.navigate('YanchtStep1');
        }}
      />
    </View>
  );
};

export default NewYanctScreen;
