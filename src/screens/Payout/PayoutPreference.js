import {View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import BankAccountCard from './BankAccountCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectBankInfo,
  setBankDetails,
} from '../../Store/BankDetails/bankDetailsSlice';
import BankInfoCard from './BankInfoCard';
import {getBankDetails} from '../../Services/Api';

const PayoutPreference = ({navigation}) => {
  const bankDetails = useSelector(selectBankInfo);
  console.log('first', bankDetails);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomHeader
        source={require('../../assets/images/backIcon.png')}
        backgroundColor={Colors.white}
        label={'Payout Preferences'}
        onPress={() => navigation.goBack()}
        showImg={true}
        styleIcon={{width: wp(7), height: hp(10)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
      />
      {bankDetails ? (
        <BankInfoCard bankDetails={bankDetails} />
      ) : (
        <BankAccountCard onPress={() => navigation.navigate('PayoutForm')} />
      )}
    </ScrollView>
  );
};

export default PayoutPreference;
