import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';

const ButtonView = ({navigation}) => {
  const navigateToMessages = () => {
    // Navigate to Messages screen
  };

  const navigateToBookings = () => {
    // Navigate to Bookings screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={navigateToMessages}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/messageIcon.png')}
            style={styles.icon}
          />
          <View style={styles.countContainer}>
            <Text style={styles.countText}>10</Text>
          </View>
        </View>
        <Text style={styles.hText}>Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={navigateToBookings}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/BookingIcon.png')}
            style={styles.icon}
          />
          <View style={styles.countContainer}>
            <Text style={styles.countText}>5</Text>
          </View>
        </View>
        <Text style={styles.hText}>Bookings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignSelf: 'center',
    width: '80%',
    marginVertical: hp(2),
  },
  item: {
    flexDirection: 'column',
    //  alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    height: hp(15),
    width: wp(30),
    borderRadius: 10,
    elevation: 5, // elevation for shadow (Android)
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    left: 8,
  },
  countContainer: {
    backgroundColor: 'red', // Example color for count background
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 17.5,
    height: 35,
    width: 35,
    justifyContent: 'center',
    right: 20,
  },
  countText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hText: {
    alignSelf: 'center',
    top: 3,
    fontSize: FontSize.small,
    fontFamily: fonts.bold,
    color: 'black',
  },
});

export default ButtonView;
