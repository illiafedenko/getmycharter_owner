import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import MessageHeader from '../../components/MessageHeader/MessageHeader';
import {hp, wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import Messages from '../messages';
import {styles} from './styles';
import BookingRequest from '../BookingRequest';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Space from '../../components/Space';

const MessageScreen = ({navigation}) => {
  //const [selectedTab, setSelectedTab] = useState('Chat');

  // const handleTabPress = tab => {
  //   setSelectedTab(tab);
  // };

  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/bckIcon.png')}
        onPress={() => navigation.goBack()}
        styleIcon={{width: 15, height: 15}}
        label={'Inbox'}
        elevation={5}
        showLabel={true}
      />
      <Space height={15} />
      <Messages />

      {/* <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Chat' ? styles.selectedTab : styles.unselectedTab,
          ]}
          onPress={() => handleTabPress('Chat')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Chat'
                ? styles.selectedText
                : styles.unselectedText,
            ]}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Booking Request'
              ? styles.selectedTab
              : styles.unselectedTab,
          ]}
          onPress={() => handleTabPress('Booking Request')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Booking Request'
                ? styles.selectedText
                : styles.unselectedText,
            ]}>
            Booking Request
          </Text>
        </TouchableOpacity>
      </View> */}

      {/* Render different components based on selected tab */}
      {/* {selectedTab === 'Chat' && <Messages />}
      {selectedTab === 'Booking Request' && <BookingRequest />} */}
    </View>
  );
};

export default MessageScreen;
