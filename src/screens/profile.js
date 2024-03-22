import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Space from '../components/Space';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import {Colors} from '../utils/Colors';
import {hp, wp} from '../utils/Dimensions';
import {FontSize} from '../utils/FontSize';
import fonts from '../assets/fonts';
import GradientLine from '../components/GradientLine';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserInfo} from '../Store/Profile/userInfoSlice';
import {CommonActions, useNavigation} from '@react-navigation/native';
import SuccessModal from '../components/CustomModal/SuccessModal';
import Toast from 'react-native-simple-toast';
import useOwnStorage from '../Services/StorageController';
import {resetAllSlices} from '../Store/resetAction/resetActions';
import {deleteAccountApiCall} from '../Services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLoading} from '../Store/General';

const Profile = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ownStorage = useOwnStorage();
  const userInfo = useSelector(selectUserInfo);
  //console.log('data', userInfo);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleDel, setIsModalVisibleDel] = useState(false);
  const [isLoggedInWithGoogle, setIsLoggedInWithGoogle] = useState(false);

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    const loggedInWithGoogle = await ownStorage.isUserLoggedInWithGoogle();
    setIsLoggedInWithGoogle(loggedInWithGoogle);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const closeModalDel = () => {
    setIsModalVisibleDel(false);
  };
  const logout = async () => {
    dispatch(setLoading(true));
    const isLoggedInWithGoogle = await ownStorage.isUserLoggedInWithGoogle();
    const isLoggedInWithApple = await ownStorage.isUserLoggedInWithApple();

    const logoutSuccess = await ownStorage.logout(
      isLoggedInWithGoogle,
      isLoggedInWithApple,
    );

    if (logoutSuccess) {
      //navigation.replace('SignIn');
      dispatch(resetAllSlices());
      Toast.show('Logged Out Successfully!');
      closeModal();
      dispatch(setLoading(false));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        }),
      );
    } else {
      console.log('Logout failed');
      dispatch(setLoading(false));
    }
  };

  const deleteAccount = async () => {
    try {
      const response = await deleteAccountApiCall();
      console.log('Response:', response);
      if (response) {
        const logoutSuccess = await ownStorage.logout(isLoggedInWithGoogle);
        if (logoutSuccess) {
          closeModalDel();
          dispatch(resetAllSlices());
          Toast.show('Account Deleted Successfully!');
          navigation.navigate('SignIn');
        } else {
          console.log('Account deletion failed');
          // Handle the case when account deletion fails
        }
      }
    } catch (error) {
      console.log('Error deleting account', error);
      // Handle errors that might occur during the API call
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <CustomHeader
          backgroundColor={Colors.white}
          label={'Profile'}
          styleIcon={{width: wp(3), height: hp(5)}}
          height={'12%'}
          elevation={5}
          showLabel={true}
          showImg={false}
        />
        <View style={{paddingHorizontal: 8, paddingVertical: 16}}>
          <TouchableOpacity>
            <View style={[styles.float, {alignItems: 'center', padding: 16}]}>
              <View>
                <View style={styles.float}>
                  {userInfo && userInfo.profile_pic !== 'none' ? (
                    <Image
                      source={{
                        uri:
                          userInfo.profile_pic ||
                          (userInfo.user?.photo
                            ? userInfo.user.photo
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2tcoufPsMbxoko0vTZnn7-34HqNp990Y3MviUI79CQ&s'),
                      }}
                      style={{width: 50, height: 50, borderRadius: 30}}
                    />
                  ) : (
                    <Image
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2tcoufPsMbxoko0vTZnn7-34HqNp990Y3MviUI79CQ&s',
                      }}
                      style={{width: 50, height: 50, borderRadius: 30}}
                    />
                  )}
                  <View style={{paddingLeft: 16}}>
                    <Text style={styles.title}>
                      {userInfo
                        ? userInfo.username || userInfo.user?.name
                        : 'User Name'}
                    </Text>
                    {/* <Text style={{color: '#5A5A5A'}}>Click view and edit</Text> */}
                  </View>
                </View>
              </View>
              {/* <Image
                source={require('../assets/images/forward.png')}
                style={{width: 10, height: 20}}
              /> */}
            </View>
          </TouchableOpacity>
          <GradientLine />
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/dashboardInactive.png')}
                style={{width: 32, height: 30}}
              />
              <Space width={16} />
              <Text style={styles.h1}>Dashboard</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <GradientLine />
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Yacht');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/yachtInactive.png')}
                style={{width: 30, height: 30, marginRight: 2}}
                resizeMode="contain"
              />
              <Space width={16} />
              <Text style={styles.h1}>Yachts</Text>
            </View>
          </TouchableOpacity>

          <Space height={8} />
          <GradientLine />
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Messages');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/messageInactive.png')}
                style={{width: 32, height: 30}}
                resizeMode="contain"
              />
              <Space width={16} />
              <Text style={styles.h1}>Messages</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <GradientLine />
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Booking');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/bookingInactive.png')}
                style={{width: 32, height: 30}}
                resizeMode="contain"
              />
              <Space width={16} />
              <Text style={styles.h1}>Bookings</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <GradientLine />
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/setting.png')}
                style={{width: 32, height: 30}}
                resizeMode="contain"
              />
              <Space width={16} />
              <Text style={styles.h1}>App settings</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <GradientLine />
          <Space height={8} />
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/contact.png')}
                style={{width: 32, height: 30}}
                resizeMode="contain"
              />
              <Space width={16} />
              <Text style={styles.h1}>Contact us</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <GradientLine />
          <Space height={8} />
          <TouchableOpacity onPress={() => setIsModalVisibleDel(true)}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/deleteIcon.png')}
                style={{width: 32, height: 30}}
                resizeMode="contain"
              />
              <Space width={16} />
              <Text style={styles.h1}>Delete Account</Text>
            </View>
          </TouchableOpacity>
          <GradientLine />
          <Space height={8} />
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/logout2.png')}
                style={{width: 32, height: 30}}
                resizeMode="contain"
              />
              <Space width={16} />
              <Text style={styles.h1}>Log out</Text>
            </View>
          </TouchableOpacity>
          <Space height={90} />

          <SuccessModal
            isVisible={isModalVisible}
            closeModal={closeModal}
            label={'Logout'}
            btnTitle={'No'}
            source={require('../assets/images/logout.gif')}
            Description={'Are you sure you want to logout?'}
            showLeftBtn={true}
            showRightBtn={true}
            rightTitle={'Yes'}
            onPressLeft={() => closeModal()}
            onPressRight={logout}
          />

          <SuccessModal
            isVisible={isModalVisibleDel}
            closeModal={closeModalDel}
            label={'Delete Account'}
            btnTitle={'No'}
            source={require('../assets/images/logout.gif')}
            Description={'Are you sure you want to delete your account?'}
            showLeftBtn={true}
            showRightBtn={true}
            rightTitle={'Yes'}
            onPressLeft={() => closeModalDel()}
            onPressRight={deleteAccount}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {flexGrow: 1, overflow: 'scroll'},
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  float: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  header: {
    width: '100%',
    height: 80,
    padding: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: Colors.mainBlue,
    fontSize: FontSize.medium,
    fontFamily: fonts.bold,
  },
  rightComponent: {
    marginRight: 36,
  },
  h1: {
    fontSize: FontSize.regular,
    color: Colors.mainBlue,
    fontFamily: fonts.regular,
  },
});

export default Profile;
