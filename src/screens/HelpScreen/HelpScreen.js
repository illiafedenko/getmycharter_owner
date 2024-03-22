import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import CustomInput from '../../components/CustomInput/CustomInput';
import Savebtn from '../../components/Savebtn/Savebtn';
import {openComposer} from 'react-native-email-link';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const HelpScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  const handleCallPress = () => {
    // Use Linking module to open the phone dialer
    Linking.openURL('tel:+971525120099');
  };

  const handleSendMessage = () => {
    // Validate that a message is entered
    if (message.trim() === '') {
      // Display an error message or handle as per your UI/UX design
      alert('Please enter a message before sending.');
      return;
    }

    openComposer({
      to: 'info@getmycharter.com',
      subject: 'Help & Support',
      body: message,
    }).catch(console.log);
    // Use the react-native-email-link library to send an email
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        label={'Help & support'}
        showLabel
        styleIcon={{width: 15, height: 15}}
        showImg={true}
        source={require('../../assets/images/bckIcon.png')}
        backgroundColor={Colors.white}
        elevation={5}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View style={styles.paddingView}>
          <Space height={30} />
          <TouchableOpacity style={styles.innerView} onPress={handleCallPress}>
            <Image
              source={require('../../assets/images/call.png')}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.txt}>+971525120099</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.innerView}>
            <Image
              source={require('../../assets/images/emailBlue.png')}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.txt}>info@getmycharter.com</Text>
          </TouchableOpacity>

          <CustomInput
            label={'We will respond to you soon'}
            placeholder={'Tell us how we can help you'}
            customStyle={[
              styles.customInput,
              {
                height: 198,
                borderRadius: 3,
                ...Platform.select({android: {textAlignVertical: 'top'}}),
              },
            ]}
            labelStyle={styles.labelText}
            multiline={true}
            onChangeText={text => {
              setMessage(text);
            }}
          />
          <Savebtn
            label={'Send Message'}
            customStyle={styles.btn}
            btnStlye={{alignSelf: 'center'}}
            onPress={handleSendMessage}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default HelpScreen;
