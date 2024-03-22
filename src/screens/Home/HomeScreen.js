import {View, ScrollView, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import UserCard from '../../components/UserCard/UserCard';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import InfoCard from './InfoCard';
import LayoutCard from './LayoutCard';
import ButtonView from './ButtonView';
import Space from '../../components/Space';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserInfo} from '../../Store/Profile/userInfoSlice';
import {getBankDetails} from '../../Services/Api';
import {setBankDetails} from '../../Store/BankDetails/bankDetailsSlice';
import {setLoading} from '../../Store/General';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setLoading(true));
        const response = await getBankDetails();
        dispatch(setBankDetails(response));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        dispatch(setLoading(false));
      }
    }
    fetchData();
  }, []);
  // useEffect(() => {
  //   const backAction = () => {
  //     BackHandler.exitApp(); // Minimize the app when back button is pressed
  //     return true; // Return true to prevent default behavior (going back)
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove(); // Cleanup the event listener on unmounting
  // }, []);

  //console.log('asd', userInfo?.user?.email);
  return (
    <View style={styles.container}>
      <CustomHeader
        label={'Dashboard'}
        showLabel
        showImg={false}
        backgroundColor={Colors.white}
        elevation={5}
        onPress={() => console.log('CrossPressed')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Space height={15} />
        <LayoutCard />
        <Space height={80} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
