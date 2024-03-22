import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import {getownerData} from '../../Services/Api';
import {setOwnerDetails} from '../../Store/Profile/userInfoSlice';

const ManageProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const fetchOwnerDetails = async () => {
    dispatch(setLoading(true));
    try {
      const userData = await getownerData();
      console.log('first', userData.user);
      dispatch(setOwnerDetails(userData.user));
      setItems(userData.user || []);
    } catch (error) {
      console.log('Error fetching owner data:', error);
    } finally {
      // Set loading to false regardless of success or failure
      dispatch(setLoading(false));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Fetch yacht data when the component comes into focus
      fetchOwnerDetails();
    }, []),
  );
  return (
    <View style={styles.container}>
      <CustomHeader
        label={'Manage Profile'}
        showLabel
        styleIcon={{width: 15, height: 15}}
        showImg={true}
        source={require('../../assets/images/bckIcon.png')}
        backgroundColor={Colors.white}
        elevation={5}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.paddingView}>
          <Text style={styles.h1Text}>Verification of your Profile</Text>
          <View style={styles.boxview}>
            <Image
              source={require('../../assets/images/bluetick.png')}
              style={styles.imgCross}
            />
            <Text style={styles.h2}>Your email address</Text>

            <Text style={styles.h3}>Item checked</Text>

            {items.boating_exp_description &&
            items.boating_exp_level &&
            items.boating_exp_license &&
            items.boating_exp_other &&
            items.boating_exp_preference &&
            items.boating_exp_sailing ? (
              <Image
                source={require('../../assets/images/bluetick.png')}
                style={styles.imgCross}
              />
            ) : (
              <Image
                source={require('../../assets/images/redcross.png')}
                style={styles.imgCross}
              />
            )}
            <Text style={styles.h2}>Your sailing CV</Text>
            <TouchableOpacity
              style={styles.mianBox}
              onPress={() => {
                navigation.navigate('PersonalInformation');
              }}>
              <Text style={styles.h4}>Complete my nautical CV</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ManageProfile;
