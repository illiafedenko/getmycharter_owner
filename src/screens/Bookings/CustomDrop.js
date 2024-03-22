// Import necessary dependencies
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import BookingCard from './BookingCard';
import FilterModal from './FilterModal';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import {getBookingReq} from '../../Services/Api';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';

const DropdownButton = ({title, onPress, customStyle}) => (
  <TouchableOpacity
    style={[styles.dropdownButton, {customStyle}]}
    onPress={onPress}>
    <Text style={styles.dropdownButtonText}>{title}</Text>
    <Image
      source={require('../../assets/images/downIcon.png')}
      style={styles.dropdownButtonIcon}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const CustomDrop = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
  // Mock data for bookings
  const bookingsData = [
    {
      id: 1,
      yachtName: 'Luxury Yacht 1',
      address: 'Ocean Drive, Miami',
      date: '2023-12-01',
      price: '$5000',
      status: 'Approved',
      image:
        'https://media.fraseryachts.com/Yachts/Y692_KrB_MC/images/website/ARROW_Drone_3413+1-jDu6XGHm.jpg?vh=3b7da0&w=1500&h=758&func=crop&gravity=center&wat=1&wat_gravity=southwest&wat_scale=80&wat_pad=20',
    },
    {
      id: 2,
      yachtName: 'Super Yacht 2000',
      address: 'Marina Bay, Monaco',
      date: '2023-11-20',
      price: '$8000',
      status: 'Pending',
      image:
        'https://media.fraseryachts.com/Yachts/Y692_KrB_MC/images/website/ARROW_TENDER_SHOOTS_1995-EflQQdgN.jpg?vh=34c52a&w=1500&h=758&func=crop&gravity=center&wat=1&wat_gravity=southwest&wat_scale=80&wat_pad=20',
    },
    {
      id: 3,
      yachtName: 'Dreamliner Yacht',
      address: 'Harborfront, Singapore',
      date: '2023-11-15',
      price: '$6000',
      status: 'Expired',
      image:
        'https://cdn.boatinternational.com/convert/files/2022/07/76393b30-0096-11ed-aed3-f71d7c568098-AHPO-hero-Photography-guillaume-plisson.jpg/r%5Bwidth%5D=1920/76393b30-0096-11ed-aed3-f71d7c568098-AHPO-hero-Photography-guillaume-plisson.jpg',
    },
  ];

  // State for filtering by name
  const [nameFilterModalVisible, setNameFilterModalVisible] = useState(false);
  const [nameFilter, setNameFilter] = useState('');

  // State for filtering by status
  const [statusFilterModalVisible, setStatusFilterModalVisible] =
    useState(false);
  const [statusFilter, setStatusFilter] = useState('');

  // Function to handle filtering by name
  const handleNameFilter = name => {
    setNameFilter(name);
    setNameFilterModalVisible(false);
  };

  // Function to handle filtering by status
  const handleStatusFilter = status => {
    setStatusFilter(status);
    setStatusFilterModalVisible(false);
  };

  // Function to navigate to booking detail screen
  const handleBookingCardPress = bookingId => {
    navigation.navigate('BookingDetailScreen');
    // Implement navigation logic to the booking detail screen
  };

  // Apply filters to the data
  const filteredBookings = bookingList.filter(booking => {
    // Apply name filter
    const nameFilterCondition =
      nameFilter === '' || booking.yachtName === nameFilter;

    // Apply status filter
    const statusFilterCondition =
      statusFilter === '' || booking.status === statusFilter;

    // Return true only if both conditions are met
    return nameFilterCondition && statusFilterCondition;
  });

  return (
    <View>
      <CustomHeader
        label={'Upcoming Bookings'}
        showLabel
        styleIcon={{width: 15, height: 15}}
        showImg={true}
        source={require('../../assets/images/bckIcon.png')}
        backgroundColor={Colors.white}
        elevation={5}
        height={'21%'}
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{
          padding: 20,
          fontSize: FontSize.regular,
          color: '#000000',
          fontFamily: fonts.semiInter,
        }}>
        Select Yacht
      </Text>

      <DropdownButton
        title="Yacht Name"
        customStyle={{
          justifyContent: 'space-between',
          width: 400,
          backgroundColor: 'red',
        }}
        onPress={() => setNameFilterModalVisible(true)}
      />
      {/* Filter buttons */}
      {/* <View style={styles.filterButtonsContainer}>
        <DropdownButton
          title="Yacht Name"
          onPress={() => setNameFilterModalVisible(true)}
        />
        <DropdownButton
          title="Status"
          onPress={() => setStatusFilterModalVisible(true)}
        />
      </View> */}

      {/* Booking cards */}
      {filteredBookings.length === 0 ? (
        <Text style={styles.noBookingsText}>No bookings yet</Text>
      ) : (
        <FlatList
          data={filteredBookings}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
            //onPress={() => handleBookingCardPress(item.id)}
            >
              <BookingCard booking={item} />
            </View>
          )}
        />
      )}

      {/* Modals for filtering */}
      <FilterModal
        visible={nameFilterModalVisible}
        onFilter={handleNameFilter}
        onClose={() => setNameFilterModalVisible(false)}
        options={['Luxury Yacht 1', 'Super Yacht 2000', 'Dreamliner Yacht']}
      />

      <FilterModal
        visible={statusFilterModalVisible}
        onFilter={handleStatusFilter}
        onClose={() => setStatusFilterModalVisible(false)}
        options={[
          'Ready to Approve',
          'Pending',
          'Approved',
          'Cancelled',
          'Expired',
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 16,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.mainBlue,
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  dropdownButtonText: {
    color: 'black',
    marginRight: 8,
  },
  dropdownButtonIcon: {
    width: 12,
    height: 12,
    tintColor: 'black',
  },
  noBookingsText: {
    alignSelf: 'center',
    marginTop: 80,
    fontSize: FontSize.small,
    color: 'black',
  },
});
export default CustomDrop;
