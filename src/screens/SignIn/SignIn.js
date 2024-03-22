import React, {useState} from 'react';
import {View, Text, Modal, Image} from 'react-native';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {hp, wp} from '../../utils/Dimensions';
import ORseperator from './ORseperator';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import CustomButton from '../../components/CustomButton/CustomButton';
import {setUserInfo} from '../../Store/Profile/userInfoSlice';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import {CommonActions} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {
  sendAppleSignInToServer,
  sendGoogleSignInToServer,
} from '../../Services/Api';
import useOwnStorage from '../../Services/StorageController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebViewModal from '../../components/WebViewModal/WebViewModal';
import appleAuth, {
  AppleButton,
} from '@invertase/react-native-apple-authentication';

const SignInScreen = ({navigation}) => {
  const ownStorage = useOwnStorage();
  const dispatch = useDispatch();

  async function onGoogleButtonPress() {
    dispatch(setLoading(true)); // Set loading to true when the function starts

    try {
      // Check if your device supports Google Play
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = userInfo;
      dispatch(setLoading(true));
      let device_push_token = await AsyncStorage.getItem('fcmToken');
      console.log('device_push_token', device_push_token);
      const response = await sendGoogleSignInToServer(
        idToken,
        device_push_token,
      );
      console.log('token for server', response?.token);
      await AsyncStorage.setItem('apiToken', response?.token);
      await ownStorage.saveGoogleAuthData(idToken, userInfo);
      dispatch(setLoading(false));
      // console.log('first', user.photo, user?.email, user?.name, idToken);

      dispatch(setUserInfo(userInfo)); // Set user info in Redux
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        }),
      );

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const authResponse = await auth().signInWithCredential(googleCredential);

      dispatch(setLoading(false)); // Set loading to false when the process is complete
      return authResponse;
    } catch (error) {
      console.log('Google Sign-In Error:', error?.message);
      dispatch(setLoading(false)); // Set loading to false if an error occurs
      // Handle error scenarios here (display message, show an error dialog, etc.)
      throw error; // Rethrow the error to handle it in the calling function
    }
  }

  async function onAppleButtonPress() {
    dispatch(setLoading(true));

    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      if (!appleAuthRequestResponse.identityToken) {
        throw new Error('Apple Sign-In failed - no identity token returned');
      }

      const {identityToken, nonce} = appleAuthRequestResponse;
      console.log('identity token: ', identityToken);
      let device_push_token = await AsyncStorage.getItem('fcmToken');

      console.log('device_push_token', device_push_token);
      const response = await sendAppleSignInToServer(
        identityToken,
        device_push_token,
      );
      console.log('Token for server', response?.token);
      dispatch(setUserInfo(response)); // Set user info in Redux
      await AsyncStorage.setItem('apiToken', response?.token);

      // Save Apple authentication data
      await ownStorage.saveAppleAuthData(identityToken, nonce);

      const appleCredential = auth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );
      const authResponse = await auth().signInWithCredential(appleCredential);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        }),
      );
      dispatch(setLoading(false));
      return authResponse;
    } catch (error) {
      console.log('Apple Sign-In Error:', error?.message);
      dispatch(setLoading(false));
      throw error;
    }
  }

  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        showLabel={true}
        backgroundColor={Colors.white}
        elevation={5}
      />
      <View style={styles.mg5}>
        <Image
          source={require('../../assets/images/charterLogo.png')}
          resizeMode="contain"
          style={styles.imgstyle}
        />
        <Text style={styles.texth1}>Explore the App</Text>

        <Space height={hp(2)} />
        <Text style={styles.texth2}>
          All your registrations are in one place and always under your control
        </Text>

        <Space height={hp(4)} />
        <CustomButton
          title={'Sign up with Email'}
          imgsrc={require(`../../assets/images/mailIcon.png`)}
          bgColor={Colors.white}
          bdColor={Colors.black}
          showIcon={true}
          labelColor={'black'}
          mgVertical={hp(2)}
          customStyle={{height: hp(6)}}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />

        <ORseperator />

        <CustomButton
          title={'Sign in with Google'}
          showIcon={true}
          labelColor={'black'}
          bgColor={Colors.white}
          bdColor={Colors.black}
          mgVertical={hp(2)}
          imgsrc={require(`../../assets/images/google.png`)}
          customStyle={{height: hp(6)}}
          onPress={onGoogleButtonPress}
        />
        <CustomButton
          title={'Sign in with Apple'}
          showIcon={true}
          labelColor={'black'}
          bgColor={Colors.white}
          bdColor={Colors.black}
          // mgVertical={hp(2)}
          imgsrc={require(`../../assets/images/apple.png`)}
          customStyle={{height: hp(6)}}
          onPress={onAppleButtonPress}
        />
        {/* <CustomButton
          title={'Sign in with Facebook'}
          showIcon={true}
          labelColor={'black'}
          bgColor={Colors.white}
          bdColor={Colors.black}
          mgVertical={hp(2)}
          imgsrc={require(`../../assets/images/fb.png`)}
          customStyle={{height: hp(6)}}
          // onPress={onGoogleButtonPress}
        /> */}

        {/* <AppleButton
          buttonStyle={AppleButton.Style.WHITE_OUTLINE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={{
            width: wp(90),
            height: hp(6),
            borderRadius: 6,
            borderColor: Colors.lightBlack,
            borderWidth: 2,
            marginBottom: hp(2),
          }}
          onPress={() =>
            onAppleButtonPress().then(() =>
              console.log('Apple sign-in complete!'),
            )
          }
        /> */}

        <Space height={hp(10)} />

        <Text style={styles.description}>
          Already have an account?{' '}
          <Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.terms}>
              Login
            </Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;
