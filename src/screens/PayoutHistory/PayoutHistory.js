import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import BankAccountCard from './HistoryCard';
import HistoryCard from './HistoryCard';

const PayoutHistory = ({navigation}) => {
  const payoutData = [
    {
      name: 'Yasir Mahmood',
      date: '2023-11-01',
      amount: 500,
      details: 'Payment for services rendered.',
    },
    {
      name: 'Fahad Mahmood',
      date: '2023-10-15',
      amount: 750,
      details: 'Monthly payout.',
    },
    {
      name: 'Fahad Mahmood',
      date: '2023-10-15',
      amount: 750,
      details: 'Monthly payout.',
    },
    {
      name: 'Fahad Mahmood',
      date: '2023-10-15',
      amount: 750,
      details: 'Monthly payout.',
    },
    {
      name: 'Fahad Mahmood',
      date: '2023-10-15',
      amount: 750,
      details: 'Monthly payout.',
    },
    {
      name: 'Fahad Mahmood',
      date: '2023-10-15',
      amount: 750,
      details: 'Monthly payout.',
    },
    // Add more payout data entries as needed
  ];
  return (
    <View style={styles.container}>
      <CustomHeader
        source={require('../../assets/images/backIcon.png')}
        backgroundColor={Colors.white}
        label={'Payout History'}
        styleIcon={{width: wp(7), height: hp(10)}}
        onPress={() => navigation.goBack()}
        height={hp(11)}
        showImg={true}
        elevation={5}
        showLabel={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {payoutData.map((payout, index) => (
          <HistoryCard
            key={index}
            name={payout.name}
            date={payout.date}
            amount={payout.amount}
            details={payout.details}
            //  onPress={() => navigation.navigate('PayoutForm')}
          />
        ))}
      </ScrollView>
      {/* <HistoryCard 
       /> */}
    </View>
  );
};

export default PayoutHistory;
