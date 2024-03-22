import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';
import Savebtn from '../../components/Savebtn/Savebtn';
import Toast from 'react-native-simple-toast';
import {changePassword} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('');

  const handleSave = async () => {
    // Validate if all fields are filled
    if (!oldPassword || !newPassword || !reEnteredPassword) {
      Toast.show('Please fill in all fields');
      return;
    }

    // Validate if new password and re-entered password match
    if (newPassword !== reEnteredPassword) {
      Toast.show('New password and re-entered password do not match');
      return;
    }

    // Validate if the new password has at least 8 characters
    if (newPassword.length < 8) {
      Toast.show('Password must have at least 8 characters');
      return;
    }

    // Make API call to change password
    try {
      dispatch(setLoading(true));
      const response = await changePassword(oldPassword, newPassword);
      // Handle successful response (you can navigate to another screen or show a success message)
      if (response) {
        console.log('Response from changePassword API:', response?.message);
        Toast.show(response?.message);
        navigation.navigate('SettingScreen');
      }
    } catch (error) {
      // Handle errors (show a toast or display an error message)
      Toast.show('Failed to change password');
      console.log('Error from changePassword API:', error?.data);
    } finally {
      dispatch(setLoading(false));
    }
  };

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
        height={'12%'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.paddingView}>
          <Text style={styles.h1Text}>Change your Password</Text>
          <CustomInput
            label={'Old password'}
            customStyle={[styles.customInput]}
            labelStyle={styles.labelText}
            multiline={true}
            secureTextEntry
            value={oldPassword}
            onChangeText={text => setOldPassword(text)}
          />
          <CustomInput
            label={'New password'}
            customStyle={[styles.customInput]}
            labelStyle={styles.labelText}
            multiline={true}
            secureTextEntry
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
          />
          <CustomInput
            label={'Re-enter password'}
            customStyle={[styles.customInput]}
            labelStyle={styles.labelText}
            multiline={true}
            secureTextEntry
            value={reEnteredPassword}
            onChangeText={text => setReEnteredPassword(text)}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 4,
                padding: 6,
                top: 10,
                right: 15,
                alignSelf: 'center',
              }}>
              <Text style={styles.h2}>Forgot your password?</Text>
            </TouchableOpacity>
            <Savebtn label={'Save'} onPress={handleSave} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
