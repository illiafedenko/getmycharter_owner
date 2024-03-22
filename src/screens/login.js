import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import CheckBox from 'expo-checkbox';
import TextButton from '../components/TextButton';
import Space from '../components/Space';
import IconButton from '../components/IconButton';
import IconTextInput from '../components/IconTextInput';
const LoginScreen = ({navigation}) => {
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
        <Text style={styles.title}>Welcome Back</Text>
        <Space height={10} />
        <Text style={styles.description}>
          Do not have an account?{' '}
          <Text
            style={styles.register}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Register
          </Text>
        </Text>

        <Space height={30} />
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
        <View style={styles.floatContainer}>
          <View style={styles.left}>
            <View style={styles.row}>
              <CheckBox
                color="#246bbc"
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text> Remeber Password</Text>
            </View>
          </View>
          {/* <View style={styles.right}>
            <Text>Forgot password?</Text>
          </View> */}
        </View>
        <Space height={30} />

        <TextButton
          title="Login"
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
        <Space height={30} />
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
});

export default LoginScreen;
