import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';
import {CommonActions, useNavigation} from '@react-navigation/native';
import SuccessModal from '../../components/CustomModal/SuccessModal';
import {deleteAccountApiCall} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import useOwnStorage from '../../Services/StorageController';
import {setLoading} from '../../Store/General';
import {resetAllSlices} from '../../Store/resetAction/resetActions';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NavigationComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ownStorage = useOwnStorage();
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
      //navigation.replace('Login');
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
          await AsyncStorage.removeItem('fcmToken');
          closeModalDel();
          dispatch(resetAllSlices());
          Toast.show('Account Deleted Successfully!');
          navigation.navigate('Login');
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

  const navigateToScreen1 = () => {
    navigation.navigate('ManageProfile');
  };

  const navigateToScreen2 = () => {
    navigation.navigate('ManageListings');
  };

  const navigateToScreen3 = () => {
    setIsModalVisible(true);
  };
  const deleteModal = () => {
    setIsModalVisibleDel(true);
  };
  const navigateToScreen4 = () => {
    navigation.navigate('HelpScreen');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={navigateToScreen1}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Manage Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={navigateToScreen2}>
        <Image
          source={require('../../assets/images/listing.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Listing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={navigateToScreen4}>
        <Image
          source={require('../../assets/images/help.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={deleteModal}>
        <Image
          source={require('../../assets/images/deleteIcon.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={navigateToScreen3}>
        <Image
          source={require('../../assets/images/logout2.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Logout</Text>
      </TouchableOpacity>

      <SuccessModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        label={'Logout'}
        btnTitle={'No'}
        source={require('../../assets/images/logout.gif')}
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
        source={require('../../assets/images/logout.gif')}
        Description={'Are you sure you want to delete your account?'}
        showLeftBtn={true}
        showRightBtn={true}
        rightTitle={'Yes'}
        onPressLeft={() => closeModalDel()}
        onPressRight={deleteAccount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    elevation: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    marginVertical: 10,
    //borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  icon: {
    width: 20, // Adjust size as needed
    height: 20, // Adjust size as needed
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 14,
    fontFamily: fonts.semiInter,
    color: '#343A40',
    marginLeft: 20,
  },
  arrow: {
    fontSize: 20,
  },
});

export default NavigationComponent;
