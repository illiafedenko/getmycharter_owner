import React, {useEffect} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {styles} from './styles';
import {
  LoginSignup,
  sendAppleSignInToServer,
  sendGoogleSignInToServer,
} from '../../Services/Api';
import {setUserInfo} from '../../Store/Profile/userInfoSlice';
import useOwnStorage from '../../Services/StorageController';
import {CommonActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';
import {setLoading} from '../../Store/General';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {hp} from '../../utils/Dimensions';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const ownStorage = useOwnStorage();
  const CheckLogin = async () => {
    // let fcmToken = await AsyncStorage.getItem('fcmToken');
    // console.log('fcmToken', fcmToken);
    let token = await ownStorage.getLoginPref();
    let email = await ownStorage.getEmail();
    let password = await ownStorage.getPassword();
    let googleAuthData = await ownStorage.getGoogleAuthData();
    let appleAuthData = await ownStorage.getAppleAuthData();

    console.log(
      'token:',
      token,
      'email',
      email,
      'pass',
      password,
      'googleAuthData:',
      googleAuthData,
      'appletAuth',
      appleAuthData,
    );
    if (
      (email !== null && email !== undefined) ||
      (googleAuthData && googleAuthData.token) ||
      (appleAuthData && appleAuthData.token)
    ) {
      try {
        if (email) {
          const responseData = await LoginSignup(email, password);
          dispatch(setUserInfo(responseData));
          let apiToken = responseData?.token;
          ownStorage.updateToken(apiToken);
        } else if (googleAuthData) {
          console.log('google', googleAuthData);

          console.log('token from google', googleAuthData?.token);
          console.log('again sending google signin');
          //   const userInfo = await GoogleSignin.signIn();
          //    const {idToken} = userInfo;
          const response = await sendGoogleSignInToServer(
            googleAuthData?.token,
          );
          // Perform Google sign-in server validation here
          console.log('response: ' + JSON.stringify(response));
          dispatch(setUserInfo(JSON.stringify(response)));
          await ownStorage.saveGoogleAuthData(
            googleAuthData?.token,
            JSON.stringify(response),
          );
          // Additional data handling and saving to storage if needed
        } else if (appleAuthData) {
          try {
            console.log('authdata', appleAuthData?.token);
            //   const appleAuthRequestResponse = await appleAuth.performRequest({
            //     requestedOperation: appleAuth.Operation.LOGIN,
            //     requestedScopes: [
            //       appleAuth.Scope.FULL_NAME,
            //       appleAuth.Scope.EMAIL,
            //     ],
            //   });

            //   if (!appleAuthRequestResponse.identityToken) {
            //     throw new Error(
            //       'Apple Sign-In failed - no identity token returned',
            //     );
            //   }

            //   const {identityToken, nonce} = appleAuthRequestResponse;
            //   console.log('identity token: ', identityToken);
            //   const response = await sendAppleSignInToServer(identityToken);
            const response = await sendAppleSignInToServer(
              appleAuthData?.token,
            );
            console.log('Token for server', response?.token);
            dispatch(setUserInfo(response)); // Set user info in Redux
            await AsyncStorage.setItem('apiToken', response?.token);
            //await ownStorage.saveAppleAuthData(identityToken, nonce);
            // const appleCredential = auth.AppleAuthProvider.credential(
            //   identityToken,
            //   nonce,
            // );
            // const authResponse = await auth().signInWithCredential(
            //   appleCredential,
            // );
            dispatch(setLoading(false));
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'BottomTab'}],
              }),
            );
            //  return authResponse;
          } catch (error) {
            console.log('Apple Sign-In Error:', error?.message);
            dispatch(setLoading(false));
            throw error;
          }
        }

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'BottomTab'}],
          }),
        );
      } catch (error) {
        console.log('Error in login from splash:', error);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          }),
        );
      }
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        }),
      );
    }
  };

  useEffect(() => {
    MainFunc();
  }, []);

  const MainFunc = async () => {
    let googleAuthData = await ownStorage.getGoogleAuthData();
    let appleAuthData = await ownStorage.getAppleAuthData();

    var token = await ownStorage.getLoginPref();
    console.log('token from Preference-->', token);
    console.log('token from google-->', googleAuthData?.token);
    console.log('token from apple-->', appleAuthData?.token);

    if (
      (token && token !== undefined) ||
      (googleAuthData && googleAuthData.token) ||
      (appleAuthData && appleAuthData.token)
    ) {
      console.log('inside main ufn');
      await CheckLogin();
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        }),
      );
    }
  };
  return (
    <View style={styles.mainView}>
      <CustomHeader
        showLabel={true}
        backgroundColor={Colors.white}
        height={80}
        elevation={5}
      />
      <Image
        source={require('../../assets/images/charterLogo.png')}
        resizeMode="contain"
        style={styles.imgstyle}></Image>
    </View>
  );
};

export default SplashScreen;
