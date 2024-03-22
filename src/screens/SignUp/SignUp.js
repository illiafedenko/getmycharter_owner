import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {hp, wp} from '../../utils/Dimensions';
import {CommonActions} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInputPass from '../../components/CustomInput/CustomInputPass';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import {signUpUser} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import useOwnStorage from '../../Services/StorageController';
import GoBackButton from '../../components/BackButton/Backbtn';
import CustomInput from '../../components/CustomInput/CustomInput';
import PhoneNumberInput from './PhoneNumberInput';
import WebViewModal from '../../components/WebViewModal/WebViewModal';
import RoundCheckbox from './RoundCheckbox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = ({route}) => {
  const dispatch = useDispatch();
  const ownStorage = useOwnStorage();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [webViewModalVisible, setWebViewModalVisible] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToSMS, setAgreeToSMS] = useState(false);

  const toggleAgreeToTerms = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const toggleAgreeToSMS = () => {
    setAgreeToSMS(!agreeToSMS);
  };

  const openWebViewModal = url => {
    setWebViewUrl(url);
    setWebViewModalVisible(true);
  };

  const isSignupDisabled = () => {
    return (
      !email.trim() ||
      !password.trim() ||
      !phoneNumber.trim() ||
      !agreeToTerms ||
      !agreeToSMS
    );
  };

  const handleContinue = async () => {
    if (isSignupDisabled()) {
      Toast.show(
        'Please fill in all the required fields and accept the terms.',
      );
      return;
    }

    if (password.length < 8) {
      Toast.show('Password must have at least 8 characters.');
      return;
    }

    try {
      dispatch(setLoading(true));
      await signUpUser(firstName, lastName, email, password, phoneNumber);
      dispatch(setLoading(false));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    } catch (error) {
      console.log('Error from sign up:', error);
      dispatch(setLoading(false));
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.mainContainer}>
        <CustomHeader
          backgroundColor={Colors.white}
          source={require('../../assets/images/backIcon.png')}
          height={hp(8)}
          elevation={5}
        />
        <GoBackButton onPress={() => navigation.goBack()} />
        <View style={styles.mg5}>
          <Text style={styles.texth1}>Let's create an account</Text>
          <Space height={hp(2)} />
          <CustomInput
            placeholder={'First name'}
            onChangeText={text => {
              setFirstName(text);
            }}
          />
          <CustomInput
            placeholder={'Last name'}
            onChangeText={text => {
              setLastName(text);
            }}
          />
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

          <PhoneNumberInput onPhoneNumberChange={setPhoneNumber} />
          <View style={styles.rowCen}>
            <RoundCheckbox
              checked={agreeToTerms}
              onPress={toggleAgreeToTerms}
            />
            <Text style={styles.simpleTxt}>
              I agree to the{' '}
              <Text
                onPress={() =>
                  openWebViewModal(
                    'https://www.freeprivacypolicy.com/live/9a69084e-ed0b-464e-b497-1f57d38ead19',
                  )
                }
                style={styles.underLine}>
                {' '}
                Terms of Service{' '}
              </Text>
              and{' '}
              <Text
                onPress={() =>
                  openWebViewModal(
                    'https://www.freeprivacypolicy.com/live/3e90dab2-edde-4a89-84b9-46124388ade5',
                  )
                }
                style={styles.underLine}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
          <Space height={hp(2)} />
          <View style={[styles.rowCen, {width: '95%'}]}>
            <RoundCheckbox checked={agreeToSMS} onPress={toggleAgreeToSMS} />
            <Text style={styles.simpleTxt}>
              I consent to receive promotional marketing materials via an
              automated SMS text messaging system to the telephone number I have
              provided for my account. Consent is not a condition to register
              for an account or purchase any services. View Getmycharter's
              <Text
                onPress={() =>
                  openWebViewModal(
                    'https://www.freeprivacypolicy.com/live/9a69084e-ed0b-464e-b497-1f57d38ead19',
                  )
                }
                style={[styles.underLine]}>
                {' '}
                SMS Texting Policy{' '}
              </Text>
            </Text>
          </View>
          <Space height={hp(6)} />
          <CustomButton
            title="Sign up"
            labelColor={Colors.white}
            bdColor={'rgba(0, 53, 128, 0.51)'}
            bgColor={
              isSignupDisabled()
                ? 'rgba(0, 53, 128, 0.51)'
                : `${Colors.mainBlue}`
            }
            showIcon={true}
            customStyle={{borderRadius: 10}}
            onPress={handleContinue}
            disabled={isSignupDisabled()}
          />
          <Space height={hp(5)} />
          <Text style={styles.description}>
            Already have an account?{' '}
            <Text>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={[
                  styles.terms,
                  {textDecorationLine: 'underline', color: '#003580'},
                ]}>
                Sign in
              </Text>
            </Text>
          </Text>
          <Space height={hp(3)} />
        </View>
        <WebViewModal
          visible={webViewModalVisible}
          onClose={() => setWebViewModalVisible(false)}
          url={webViewUrl}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
