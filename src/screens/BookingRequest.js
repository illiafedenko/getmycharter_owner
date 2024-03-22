import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Space from '../components/Space';
import GradientLine from '../components/GradientLine';
import {useNavigation} from '@react-navigation/native';
import MessageCard from '../components/MessageCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getBookingReq, getChatData} from '../Services/Api';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserInfo} from '../Store/Profile/userInfoSlice';
import {setLoading} from '../Store/General';
import BookingCard from '../components/BookingCard';

const BookingRequest = ({}) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  //console.log('data', userInfo?.userId);
  const [bookingList, setBookinglist] = useState([]);

  useEffect(() => {
    fetchBookingData();
  }, []);

  const fetchBookingData = async () => {
    try {
      dispatch(setLoading(true));
      const data = await getBookingReq();
      setBookinglist(data);
    } catch (error) {
      console.log('Error fetching booking data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const navigation = useNavigation();
  const [tab, setTab] = useState(true);
  const renderItem = ({item}) => {
    console.log('item from bookingreq', item);
    return (
      <BookingCard
        data={item}
        onPress={() => {
          console.log('first', item);
          // navigation.navigate('Chat', {
          //   data: item,
          //   // senderID: item?.sender?._id,
          //   //  receiverID: item?.receiver?._id,
          //   isSender: isSender,
          // });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Space height={16} />
      {bookingList.length === 0 ? (
        <Text style={styles.noBookingRequestText}>No Booking Request yet</Text>
      ) : (
        <>
          <FlatList
            data={bookingList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />

          <Space height={8} />
          <GradientLine />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {flexGrow: 1, overflow: 'scroll'},
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  float: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  header: {
    width: '100%',
    height: 80,
    padding: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: '#003580',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
  noBookingRequestText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },
});

export default BookingRequest;
