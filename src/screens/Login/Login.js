import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInputPass from '../../components/CustomInput/CustomInputPass';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import {LoginSignup} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import {setUserInfo} from '../../Store/Profile/userInfoSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoBackButton from '../../components/BackButton/Backbtn';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {hp} from '../../utils/Dimensions';
import CustomInput from '../../components/CustomInput/CustomInput';
import useOwnStorage from '../../Services/StorageController';
import messaging from '@react-native-firebase/messaging';

const Login = ({route}) => {
  const storage = useOwnStorage();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleContinue = async () => {
    if (isButtonDisabled) {
      if (password.trim().length < 8) {
        Toast.show('Password must have at least 8 characters.');
      } else {
        Toast.show('Please fill in both email and password fields.');
      }
      return;
    }

    dispatch(setLoading(true));
    try {
      let deviceToken = await AsyncStorage.getItem('fcmToken');

      console.log('deviceToken', deviceToken);
      const responseData = await LoginSignup(email, password, deviceToken);
      dispatch(setLoading(false));
      let apiToken = responseData?.token;
      console.log('apiToken', apiToken);
      await AsyncStorage.setItem('apiToken', apiToken);
      await storage.saveLoginPref(responseData.token, email, password);
      dispatch(setUserInfo(responseData));

      navigation.reset({
        index: 0,
        routes: [{name: 'BottomTab'}],
      });
    } catch (error) {
      console.log('Error from login data:', error);
      dispatch(setLoading(false));
      // Handle error or show a message to the user
    }
  };

  // Enable or disable the button based on the input fields
  useEffect(() => {
    setIsButtonDisabled(!email.trim() || !password.trim());
  }, [email, password]);

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.mainContainer}>
        <CustomHeader
          backgroundColor={Colors.white}
          source={require('../../assets/images/backIcon.png')}
          elevation={5}
        />
        <GoBackButton onPress={() => navigation.goBack()} />
        <View style={styles.mg5}>
          <Text style={styles.texth1}>Log in using your email</Text>
          <Space height={hp(2)} />

          <CustomInput
            placeholder={'Email'}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <CustomInputPass
            labelColor={Colors.black}
            value={password}
            password={password}
            placeholder={'Password'}
            onChangeText={text => setPassword(text)}
          />
          <Space height={hp(3)} />
          {/* <Text
            onPress={() => navigation.navigate('ForgotPassword')}
            style={[
              styles.terms,
              {
                textDecorationLine: 'underline',
                color: '#003580',
                alignSelf: 'flex-end',
              },
            ]}>
            Forgot Password?
          </Text> */}
          <Space height={hp(3)} />

          <CustomButton
            title="Sign in"
            labelColor={Colors.white}
            bdColor={'rgba(0, 53, 128, 0.51)'}
            bgColor={
              isButtonDisabled ? 'rgba(0, 53, 128, 0.51)' : `${Colors.mainBlue}`
            }
            showIcon={true}
            customStyle={{borderRadius: 10}}
            onPress={handleContinue}
            disabled={isButtonDisabled}
          />
          <Space height={hp(42)} />
          <Text style={styles.description}>
            Want to register your boat?{' '}
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={[
                styles.terms,
                {textDecorationLine: 'underline', color: '#003580'},
              ]}>
              Create an account
            </Text>
          </Text>
          <Space height={hp(3)} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
