import React, {useEffect, useState, useCallback} from 'react';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';

import io from 'socket.io-client';
import {
  authenticateSocket,
  fetchPreviousMessages,
  sendMessageToServer,
} from '../Services/Api';

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {Colors} from '../utils/Colors';
import {hp, wp} from '../utils/Dimensions';
import {selectUserInfo} from '../Store/Profile/userInfoSlice';
import {useSelector} from 'react-redux';
import {FontSize} from '../utils/FontSize';
import fonts from '../assets/fonts';

const ChatScreen = ({route, navigation}) => {
  const userInfo = useSelector(selectUserInfo);
  const {userId} = userInfo;
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const {data, isSender, chatId, yachtId} = route.params;

  console.log('data', data?.sender);

  const socket = io('https://getmycharter.onrender.com');

  socket.on('connect', () => {
    console.log('Socket connected successfully!');
    socket.emit('add-user', userId);
  });
  socket.on('receive-message', data => {
    const newMessage = {
      _id: data._id,
      text: data.text,
      createdAt: new Date(data.createdAt),
      user: {
        _id: data.sender, // Assuming sender's user ID is provided by the server
      },
    };

    // Update state to include the new message
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, [newMessage]),
    );
  });

  const fetchAndSetMessages = useCallback(async () => {
    try {
      const previousMessages = await fetchPreviousMessages(
        userId,
        isSender ? data?.receiver?._id : data?.sender?._id,
        chatId,
      );
      setMessages(previousMessages.reverse());
    } catch (error) {
      console.log('Error fetching previous messages:', error);
    }
  }, [userId, data]);

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      // Fetch and set messages when the screen is focused
      fetchAndSetMessages();
    });

    authenticateSocket(socket);

    // Fetch and set messages on initial render
    fetchAndSetMessages();

    return () => {
      socket.disconnect();
      focusListener();
    };
  }, [navigation, fetchAndSetMessages]);

  const onSend = async (newMessages = []) => {
    const text = newMessages[0].text;

    try {
      await sendMessageToServer(
        userId,
        isSender ? data?.receiver?._id : data?.sender?._id,
        text,
        yachtId,
      );

      socket.emit('send-message', {
        sender: userId,
        receiver: isSender ? data?.receiver?._id : data?.sender?._id,
        text,
        yachtId,
      });
      // Update state to include both the new message and previous messages
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessages),
      );
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };

  socket.on('receiveMessage', data => {
    const newMessage = {
      _id: data.id,
      text: data.text,
      createdAt: new Date(data.createdAt),
      user: {
        _id: isSender ? data?.receiver?._id : data?.sender?._id,
      },
    };

    // Update state to include both the new message and previous messages
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessage),
    );
  });

  const CustomHeader = ({
    source,
    backgroundColor,
    onPress,
    showLabel,
    showImg,
    styleIcon,
    label,
    elevation,
    labelText,
    height,
  }) => {
    return (
      <View
        style={[
          styles.headerContainer,
          {
            backgroundColor: backgroundColor,
            elevation: elevation,
            height: height,
          },
        ]}>
        <TouchableOpacity onPress={onPress}>
          {showImg && (
            <Image source={source} style={[styles.iconStyle, styleIcon]} />
          )}
        </TouchableOpacity>

        <Image
          source={{
            uri:
              data?.sender?.profile_pic == 'none'
                ? 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?ssl=1'
                : data?.sender?.profile_pic,
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginHorizontal: 23,
          }}
        />
        <View>
          <Text style={[styles.texth1, labelText]}>
            {data?.sender?.username}
          </Text>
          <Text style={[styles.texth2]}>Online</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, paddingBottom: hp(2), backgroundColor: 'white'}}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../assets/images/bckIcon.png')}
        onPress={() => navigation.goBack()}
        label={'Messages'}
        styleIcon={{width: 15, height: 15}}
        elevation={5}
        showLabel={true}
        showImg={true}
      />
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: userId,
        }}
        textInputStyle={{
          margin: 23,
          color: 'black',
          borderRadius: 10, // Add borderRadius to the text input
          borderWidth: 1, // Add borderWidth to the text input
          borderColor: '#ccc', // Add borderColor to the text input
        }}
        // Customize the send icon
        renderSend={props => (
          <Send {...props}>
            <View style={{marginRight: 10, marginBottom: 5}}>
              <Image
                source={require('../assets/images/sendicon.png')}
                style={{width: 30, height: 30}}
              />
            </View>
          </Send>
        )}
        renderMessage={props => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: '#D9D9D9',
                margin: 5,
              },
              right: {
                backgroundColor: '#003580',
                margin: 5,
              },
            }}
          />
        )}
        placeholder="Write a message"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
    paddingBottom: hp(2),

    width: '100%',
    // Add shadow properties for iOS
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Add elevation for Android
    elevation: 2,
  },
  iconStyle: {
    resizeMode: 'contain',
    height: hp(5),
    //width: 5,
  },
  texth1: {
    fontFamily: fonts.boldInter,
    color: '#000000',
    fontSize: FontSize.small,
    opacity: 0.8,
  },
  texth2: {
    fontFamily: fonts.semiInter,
    color: '#20A84E',
    fontSize: FontSize.vtiny,
    opacity: 0.8,
  },
});

export default ChatScreen;
