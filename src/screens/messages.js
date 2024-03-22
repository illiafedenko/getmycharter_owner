import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import Space from '../components/Space';
import {useNavigation} from '@react-navigation/native';
import MessageCard from '../components/MessageCard';
import {getChatData} from '../Services/Api';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserInfo} from '../Store/Profile/userInfoSlice';
import {setLoading} from '../Store/General';

const Messages = ({}) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const [searchQuery, setSearchQuery] = useState('');
  console.log('data', userInfo?.userId);
  const [chatList, setChatList] = useState([]);
  const [filteredChatList, setFilteredChatList] = useState([]);

  useEffect(() => {
    fetchChatData(userInfo?.userId);
  }, []);
  useEffect(() => {
    // Filter the chat list based on the searchQuery
    const filteredList = chatList.filter(item =>
      item.yatch?.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredChatList(filteredList);
  }, [searchQuery, chatList]);
  const fetchChatData = async userID => {
    try {
      dispatch(setLoading(true));
      const data = await getChatData(userID);
      setChatList(data);
    } catch (error) {
      console.log('Error fetching chat data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const navigation = useNavigation();
  const [tab, setTab] = useState(true);
  const renderItem = ({item}) => {
    const loggedInUserId = userInfo?.userId;

    // Check if the logged-in user is the sender or receiver
    const isSender = item.sender._id === loggedInUserId;
    const isReceiver = item.receiver._id === loggedInUserId;

    if (isSender || isReceiver) {
      return (
        <View>
          <MessageCard
            data={isSender ? item.receiver : item.sender}
            completeObj={item}
            onPress={() => {
              console.log('data from MessageScreen---', item?.yatch?._id);
              navigation.navigate('Chat', {
                data: item,
                // senderID: item?.sender?._id,
                //  receiverID: item?.receiver?._id,
                isSender: isSender,
                chatId: item?._id,
                yachtId: item?.yatch?._id,
              });
            }}
          />
        </View>
      );
    } else {
      // Handle the case where the logged-in user is neither the sender nor the receiver
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <View style={styles.searchInput}>
          <Image
            source={require('../assets/images/search.png')}
            style={[styles.searchIcon, {marginRight: 10}]}
            resizeMode="contain"
          />
          <TextInput
            style={{width: '80%', height: 40, color: 'black'}}
            placeholder="Search Messages"
            placeholderTextColor={'grey'}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
      </View>

      <Space height={30} />
      {filteredChatList.length === 0 ? (
        <Text style={styles.noMessagesText}>
          {searchQuery.length > 0
            ? 'No matching results found'
            : 'No messages yet'}
        </Text>
      ) : (
        <>
          <FlatList
            data={filteredChatList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            key={item => item.id}
          />
          <View style={{height: '10%'}} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
  scrollContainer: {flexGrow: 1, overflow: 'scroll'},
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noMessagesText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },

  searchInputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      android: {
        elevation: 5,
        borderRadius: 5,
        overflow: 'hidden',
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {wp: 0, hp: 2},
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 8,
      },
    }),
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
});

export default Messages;
