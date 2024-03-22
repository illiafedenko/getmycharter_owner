import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import UserCard from '../../components/UserCard/UserCard';

const Profile = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomHeader
        source={require('../../assets/images/backIcon.png')}
        backgroundColor={Colors.white}
        label={'Profile'}
        showImg={true}
        styleIcon={{width: wp(7), height: hp(10)}}
        onPress={() => navigation.goBack()}
        height={hp(11)}
        elevation={5}
        showLabel={true}
      />
      <UserCard userName={'Fahad Mahmood'} rating={5} numberOfRatings={5.0} />
      <>
        <View style={[styles.innerView, {marginTop: hp(6)}]}>
          <Text style={styles.hidingh1}>Company</Text>
          <Text style={styles.hidingh2}>xxxxxxxx</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.hidingh1}>Community</Text>
          <Text style={styles.hidingh2}>xxxxxxxx</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.hidingh1}>Experiences</Text>
          <Text style={styles.hidingh2}>xxxxxxxx</Text>
        </View>
        <View style={styles.innerView}>
          <Text style={styles.hidingh1}>Top Locations</Text>
          <Text style={styles.hidingh2}>xxxxxxxx</Text>
        </View>
      </>
    </ScrollView>
  );
};

export default Profile;
