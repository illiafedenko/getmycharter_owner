import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ImageSlider from '../../components/ImageSlider';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import Space from '../../components/Space';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';

const BookingDetailScreen = ({navigation}) => {
  // Placeholder data
  const bookingDetail = {
    yachtName: 'Luxury Yacht 1',
    rating: 4.5,
    renterName: 'John Doe',
    bookingTime: '10:00 AM',
    bookingDate: '2023-12-01',
    bookingDuration: '2 hours',
    lastBookings: [
      {dateTime: '2023-12-01 10:00 AM', duration: '2 hours'},
      {dateTime: '2023-11-30 11:30 AM', duration: '1 hour'},
      // Add more entries as needed
    ],
    price: '$5000/hr',
    totalPrice: '$10000',
    status: 'Pending',
    images: [
      'https://media.fraseryachts.com/Yachts/Y692_KrB_MC/images/website/ARROW_Drone_3413+1-jDu6XGHm.jpg?vh=3b7da0&w=1500&h=758&func=crop&gravity=center&wat=1&wat_gravity=southwest&wat_scale=80&wat_pad=20',
      'https://media.fraseryachts.com/Yachts/Y692_KrB_MC/images/website/ARROW_Drone_3413+1-jDu6XGHm.jpg?vh=3b7da0&w=1500&h=758&func=crop&gravity=center&wat=1&wat_gravity=southwest&wat_scale=80&wat_pad=20',
      'https://media.fraseryachts.com/Yachts/Y692_KrB_MC/images/website/ARROW_Drone_3413+1-jDu6XGHm.jpg?vh=3b7da0&w=1500&h=758&func=crop&gravity=center&wat=1&wat_gravity=southwest&wat_scale=80&wat_pad=20',
      // Add more image URLs as needed
    ],
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < bookingDetail.rating; i++) {
      stars.push(
        <Image
          key={i}
          source={require('../../assets/images/star.png')} // Replace with your star icon
          style={styles.starIcon}
        />,
      );
    }
    return stars;
  };

  const handleDMButtonPress = () => {
    // Implement logic to open DM with renter
    navigation.navigate('Chat');
  };

  const handleApproveButtonPress = () => {
    navigation.navigate('BookingContact');
  };

  const handleDeclineButtonPress = () => {
    // Implement logic to decline booking
  };

  return (
    <View style={styles.container}>
      {/* Image Slider */}
      <ImageSlider
        imageLinks={[
          require('../../assets/images/yacht_1.png'),
          require('../../assets/images/yacht_2.png'),
          require('../../assets/images/yacht_3.png'),
          require('../../assets/images/yacht_1.png'),
          require('../../assets/images/yacht_2.png'),
        ]}
        source={require('../../assets/images/backIcon.png')}
        styleIcon={{width: wp(7), height: hp(10), top: 30, left: 20}}
        onPress={() => navigation.goBack()}
        showImg={true}
      />

      {/* Content */}
      <ScrollView style={styles.contentContainer}>
        {/* First Section */}
        <View style={styles.section}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.yachtName}>{bookingDetail.yachtName}</Text>
            {/* Custom star rating */}
            <View style={styles.starContainer}>{renderStars()}</View>
          </View>

          <View style={[styles.row, {marginTop: hp(4)}]}>
            <Text style={[styles.normalText]}>Renter:</Text>
            <Text style={[styles.renter, {left: 60}]}>
              {bookingDetail.renterName}
            </Text>
            <TouchableOpacity
              onPress={handleDMButtonPress}
              style={styles.dmBtn}>
              <Image
                source={require('../../assets/images/dmBtn.png')}
                style={{width: 10, height: 10}}
                resizeMode="contain"
              />
              <Text style={styles.dmButton}>DM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <Text style={styles.normalText}>Booking Time:</Text>
            <Text style={styles.yachtName}>
              {bookingDetail.bookingTime} on {bookingDetail.bookingDate}
            </Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.normalText}>Booking Duration:</Text>

            <Text style={styles.yachtName}>
              {bookingDetail.bookingDuration}
            </Text>
          </View>
        </View>
        <View style={styles.dottedView}>
          <View style={styles.verticalLine} />
        </View>
        {/* Second Section */}
        <View style={styles.section}>
          <Text style={styles.yachtName}>Last Bookings</Text>
          {bookingDetail.lastBookings.map((booking, index) => (
            <View key={index} style={styles.center}>
              <Text style={styles.normalText}>{booking.dateTime}</Text>
              <Text style={styles.normalText}>{booking.duration}</Text>
            </View>
          ))}
        </View>
        <View style={styles.dottedView}>
          <View style={styles.verticalLine} />
        </View>
        {/* Third Section */}
        <View style={styles.section}>
          <Text style={styles.hidingh3}>Price</Text>
          <View style={styles.center}>
            <Text style={styles.normalText}>Price:</Text>
            <Text style={styles.normalText}> {bookingDetail.price}</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.normalText}>Total Price:</Text>
            <Text style={styles.normalText}> {bookingDetail.totalPrice}</Text>
          </View>
        </View>
        <View style={styles.dottedView}>
          <View style={styles.verticalLine} />
        </View>

        {/* Fourth Section */}
        <View style={styles.section}>
          <Text style={styles.hidingh3}>Status</Text>
          <View style={styles.center}>
            <Text style={styles.normalText}>Status:</Text>
            <Text style={[styles.yachtName, {color: Colors.green}]}>
              {bookingDetail.status}
            </Text>
          </View>
        </View>
        <Space height={90} />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.declineButton}
          onPress={handleDeclineButtonPress}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.approveButton}
          onPress={handleApproveButtonPress}>
          <Text style={[styles.buttonText, {color: Colors.white}]}>
            Approve
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginTop: hp(4),
    flex: 1,
  },
  dmBtn: {
    backgroundColor: Colors.mainBlue,
    flexDirection: 'row',
    width: wp(18),
    borderRadius: 10,
    height: hp(4),
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageSlider: {
    height: 200, // Adjust the height as needed
    width: '100%',
  },
  section: {
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  hidingh3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.primary, // Custom primary color
  },
  center: {
    marginVertical: hp(1),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  yachtName: {
    fontSize: FontSize.regular,
    fontFamily: fonts.bold,
    color: Colors.mainBlue, // Custom dark text color
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  renter: {
    fontSize: FontSize.small,
    fontFamily: fonts.bold,
    color: Colors.mainBlue, // Custom medium text color
  },
  normalText: {
    fontSize: FontSize.small,
    fontFamily: fonts.medium,
    color: Colors.black, // Custom medium text color
  },
  dmButton: {
    fontFamily: fonts.medium,
    fontSize: 10,
    color: Colors.white, // Custom primary color
  },
  bookingTime: {
    fontSize: 16,
    color: Colors.darkText, // Custom dark text color
  },
  bookingDuration: {
    fontSize: 16,
    color: Colors.darkText, // Custom dark text color
  },
  price: {
    fontSize: 16,
    color: Colors.darkText, // Custom dark text color
  },
  totalPrice: {
    fontSize: 16,
    color: Colors.darkText, // Custom dark text color
  },
  status: {
    fontSize: 16,
    color: Colors.darkText, // Custom dark text color
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.white, // Custom background color
  },
  declineButton: {
    backgroundColor: Colors.white,
    width: wp(30),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Colors.mainBlue,
    borderWidth: 1,
  },
  approveButton: {
    backgroundColor: Colors.mainBlue,
    width: wp(30),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Colors.mainBlue,
    borderWidth: 1,
  },
  buttonText: {
    color: Colors.mainBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dottedView: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  verticalLine: {
    width: '100%',
    height: 1, // Height of the line
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: '#003580', // Color of the dots
    borderStyle: 'dashed',
  },
  hidingh3: {
    fontSize: FontSize.regular,
    fontFamily: fonts.bold,

    color: Colors.shineBlue,
  },
  hidingh2: {
    fontSize: FontSize.regular,
    fontFamily: fonts.light,
    textAlign: 'center',
    color: Colors.shineBlue,
  },
});

export default BookingDetailScreen;
