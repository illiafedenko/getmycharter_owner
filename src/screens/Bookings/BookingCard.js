import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import fonts from '../../assets/fonts';
import {FontSize} from '../../utils/FontSize';

const BookingCard = ({booking}) => {
  const formatCheckInTime = timestamp => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  // Function to format the check_in_date
  const formatCheckInDate = date => {
    const options = {month: 'short', day: 'numeric', year: 'numeric'};
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const getStatusColor = status => {
    switch (status) {
      case 'Ready to approve':
        return '#C7701F';
      case 'Edits pending':
        return '#B9C71F';
      case 'Aboard':
        return '#1072FE';
      case 'Approved':
        return '#2FB201';
      case 'Concluded':
        return '#0ABFE7';
      case 'Declined':
        return '#850AE7';
      case 'Cancelled':
        return '#FF52A5';
      case 'Expired':
        return '#CC0C0C';
      default:
        return '#C7701F'; // Default color
    }
  };

  return (
    <View style={styles.container}>
      {/* <View
        style={[
          styles.topRow,
          {backgroundColor: getStatusColor(booking.status)},
        ]}>
        <Text style={styles.status}>{booking.status}</Text>
      </View> */}
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          marginBottom: 10,
        }}>
        <Text style={styles.date}>
          {formatCheckInDate(booking.check_in_date)}-{' '}
          {formatCheckInTime(booking.check_in_time)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 2,
          alignItems: 'center',
        }}>
        <Image
          source={{uri: booking?.booked_yatch?.image}}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.yachtName}>{booking?.booked_yatch?.title}</Text>
          <Text style={styles.bookedYacht}>
            Customer Name: {booking.booker?.username}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.bookedYacht}>Booking ID:</Text>
            <Text style={[styles.bookedid]}> #{booking.booked_yatch?.id}</Text>
          </View>
          {/* <Text style={styles.address}>{booking.address}</Text> */}
          {/* 
        <Text style={styles.price}>{booking.price}</Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    alignSelf: 'center',
    padding: 16,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  topRow: {
    width: wp(20),
    paddingVertical: 4,

    position: 'absolute',
    top: 15,
    right: 0,
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  status: {
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  yachtName: {
    fontSize: 18,
    fontFamily: fonts.semiInter,
    marginBottom: 10,
    color: '#333333',
  },
  address: {
    fontSize: FontSize.small,
    fontFamily: fonts.medium,
    marginBottom: 4,
    color: Colors.black,
  },
  date: {
    fontSize: FontSize.small,
    fontFamily: fonts.medium,
    marginBottom: 9,
    color: Colors.black,
    alignSelf: 'center',
  },
  price: {
    fontSize: FontSize.small,
    fontFamily: fonts.bold,
    marginBottom: 4,
    color: Colors.black,
  },
  bookedYacht: {
    fontSize: FontSize.vtiny,
    fontFamily: fonts.regularInter,
    color: '#000000',
    opacity: 0.42,
    marginVertical: 5,
  },
  bookedid: {
    fontSize: FontSize.vtiny,
    fontFamily: fonts.regularInter,
    color: '#003580',
  },
});

export default BookingCard;
