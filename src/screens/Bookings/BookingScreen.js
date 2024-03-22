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
import {getBookingReq, getYachtData} from '../../Services/Api';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';
import Space from '../../components/Space';

const DropdownButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.dropdownButton} onPress={onPress}>
    <Text style={styles.dropdownButtonText}>{title}</Text>
    <Image
      source={require('../../assets/images/greydown.png')}
      style={styles.dropdownButtonIcon}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const BookingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [bookingList, setBookinglist] = useState([]);
  const [name, setNames] = useState([]);

  useEffect(() => {
    fetchBookingData();
    fetchYachtData();
  }, []);

  const fetchYachtData = async () => {
    dispatch(setLoading(true));
    try {
      const yachtData = await getYachtData();
      const yachtTitles = yachtData?.yatchs
        .map(yacht => yacht.title)
        .filter(title => title && typeof title === 'string');
      setNames(yachtTitles || []);
    } catch (error) {
      console.log('Error fetching yacht data:', error);
    } finally {
      // Set loading to false regardless of success or failure
      dispatch(setLoading(false));
    }
  };

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

  // State for filtering by name
  const [nameFilterModalVisible, setNameFilterModalVisible] = useState(false);
  const [nameFilter, setNameFilter] = useState('');

  // State for filtering by status
  const [statusFilterModalVisible, setStatusFilterModalVisible] =
    useState(false);
  const [statusFilter, setStatusFilter] = useState('');

  // Function to handle filtering by name
  const handleNameFilter = name => {
    console.log('ysvhttt', name);
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
    console.log('ok', nameFilter, 'hshs', booking?.booked_yatch?.title);
    const nameFilterCondition =
      nameFilter === '' || booking?.booked_yatch?.title === nameFilter;

    // Apply status filter
    const statusFilterCondition =
      statusFilter === '' || booking.status === statusFilter;

    // Return true only if both conditions are met
    return nameFilterCondition && statusFilterCondition;
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CustomHeader
        label={'Upcoming Bookings'}
        showLabel
        backgroundColor={Colors.white}
        elevation={5}
        onPress={() => navigation.goBack()}
      />
      <View style={{paddingHorizontal: 20}}>
        <Space height={15} />
        <Text
          style={{
            fontSize: FontSize.regular,
            color: '#000000',
            fontFamily: fonts.semiInter,
          }}>
          Select Yacht
        </Text>
        {/* Filter buttons */}
        {/* <View style={styles.filterButtonsContainer}> */}
        <DropdownButton
          title={nameFilter ? nameFilter : 'All'}
          onPress={() => setNameFilterModalVisible(true)}
        />
        {/* <DropdownButton
          title="Status"
          onPress={() => setStatusFilterModalVisible(true)}
        /> */}
        {/* </View> */}

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
          options={name}
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
    borderColor: '#D9D9D9',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 23,
    alignSelf: 'center',
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
export default BookingScreen;
