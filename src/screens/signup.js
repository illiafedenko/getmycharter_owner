import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import CheckBox from 'expo-checkbox';
import TextButton from '../components/TextButton';
import Space from '../components/Space';
import IconButton from '../components/IconButton';
import IconTextInput from '../components/IconTextInput';
const RegisterScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/images/welcome.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo_1.png')}
          style={styles.logo}
        />
        <Space height={20} />
        <Text style={styles.title}>Create your new account</Text>
        <Space height={10} />
        <Text style={styles.description}>
          Already have an account?{' '}
          <Text
            style={styles.register}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </Text>

        <Space height={30} />
        <IconTextInput
          placeholder="Full Name"
          image={require('../assets/images/user.png')}
        />
        <Space height={20} />
        <IconTextInput
          placeholder="Email Address"
          image={require('../assets/images/email.png')}
        />
        <Space height={20} />
        <IconTextInput
          placeholder="Password"
          image={require('../assets/images/lock.png')}
          secureTextEntry={true}
        />
        <Space height={20} />
        <TextButton
          title="Continue with email"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Text style={styles.description}>
          By tapping continue i agree to the{' '}
          <Text style={styles.terms}>Terms of service.</Text>
        </Text>
        <Space height={10} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'contain' if you want to fit the image within the screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  description: {
    color: 'grey',
    fontSize: 14,
    alignSelf: 'center',
  },
  register: {
    color: '#246bbc',
  },
  floatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchSection: {
    marginHorizontal: '12px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
  },
  customInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderRadius: 20,
    backgroundColor: '#fff',
    color: '#424242',
  },
  terms: {
    color: '#246bbc',
  },
});

export default RegisterScreen;
