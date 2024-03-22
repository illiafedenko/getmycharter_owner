import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';
import {useNavigation} from '@react-navigation/native';

const NavigationComponent = () => {
  const navigation = useNavigation();
  const navigateToScreen1 = () => {
    navigation.navigate('Add yacht');
  };

  const navigateToScreen2 = () => {
    navigation.navigate('Bookings');
  };

  const navigateToScreen3 = () => {
    navigation.navigate('ManageListings');
  };

  const navigateToScreen4 = () => {
    navigation.navigate('ManageCalendar');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={navigateToScreen1}>
        <Image
          source={require('../../assets/images/addyacht.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Add yacht</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={navigateToScreen2}>
        <Image
          source={require('../../assets/images/manageIcon.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Manage booking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={navigateToScreen4}>
        <Image
          source={require('../../assets/images/calendarIcon.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Update calendar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.item, {backgroundColor: Colors.white}]}
        onPress={navigateToScreen3}>
        <Image
          source={require('../../assets/images/yachtIcon.png')}
          style={styles.icon}
        />
        <Text style={styles.heading}>Manage Listings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    elevation: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    marginVertical: 10,
    //borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  icon: {
    width: 22, // Adjust size as needed
    height: 22, // Adjust size as needed
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 14,
    fontFamily: fonts.semiInter,
    color: '#343A40',
    marginLeft: 20,
  },
  arrow: {
    fontSize: 20,
  },
});

export default NavigationComponent;
