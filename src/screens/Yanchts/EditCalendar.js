import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CustomButton from '../../components/CustomButton/CustomButton';
import YachtTypePicker from '../../components/CustomPicker/CustomPicker';
import Space from '../../components/Space';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  getUnavailableDatesFromApi,
  sendUnavailableDatesToServer,
} from '../../Services/Api';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import fonts from '../../assets/fonts';
import {FontSize} from '../../utils/FontSize';
import Savebtn from '../../components/Savebtn/Savebtn';
import CalendarHeader from 'react-native-calendars/src/calendar/header';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';

const EditCalendar = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {yachtId} = route.params;
  console.log('yachtId', yachtId);
  const [selectedDates, setSelectedDates] = useState({});
  const [viewCalendar, setViewCalendar] = useState(false);
  const [unavailableDatesFromApi, setUnavailableDatesFromApi] = useState([]);

  const unavailable_dates = ['2023-12-10', '2023-12-09'];
  const today = new Date();

  useEffect(() => {
    const fetchUnavailableDates = async () => {
      try {
        const datesFromApi = await getUnavailableDatesFromApi(yachtId);
        console.log('unava', datesFromApi);
        setUnavailableDatesFromApi(datesFromApi);
      } catch (error) {
        console.log('Error fetching unavailable dates:', error.message);
      }
    };

    fetchUnavailableDates();
  }, [yachtId]);

  const reasons = [
    {label: 'Unavailable', value: 'Unavailable'},
    {label: 'Breakdown / Damage', value: 'Breakdown / Damage'},
    {label: 'Wintering / End of Season', value: 'Wintering / End of Season'},
  ];

  const toggleViewCalendar = () => {
    setViewCalendar(!viewCalendar);
  };

  const [reason, setReason] = useState();
  const onChangeText = value => {
    setReason(value);
  };

  const [isFromDatePickerVisible, setFromDatePickerVisible] = useState(false);
  const [isToDatePickerVisible, setToDatePickerVisible] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');

  const showFromDatepicker = () => {
    setFromDatePickerVisible(true);
  };

  const showToDatePicker = () => {
    setToDatePickerVisible(true);
  };

  const hideFromDatepicker = () => {
    setFromDatePickerVisible(false);
  };

  const hideToDatePicker = () => {
    setToDatePickerVisible(false);
  };

  const handleFromDateConfirm = date => {
    const utcDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
    );
    setSelectedFromDate(utcDate.toISOString().split('T')[0]);
    hideFromDatepicker();
  };

  const handleToDateConfirm = date => {
    const utcDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
    );
    setSelectedToDate(utcDate.toISOString().split('T')[0]);
    hideToDatePicker();
  };

  const handleDateSelection = date => {
    // Toggle the selection of a date
    setSelectedDates(prevDates => {
      const updatedDates = {...prevDates};
      if (updatedDates[date]) {
        delete updatedDates[date];
      } else {
        updatedDates[date] = {selected: true, marked: true};
      }
      return updatedDates;
    });
  };

  const handleSaveDates = async () => {
    try {
      if (!selectedFromDate || !selectedToDate || !reason) {
        Toast.show('Please select both Date range and reason');
        return;
      }
      // Validate that To Date is greater than or equal to From Date
      const fromDate = new Date(selectedFromDate);
      const toDate = new Date(selectedToDate);

      if (toDate < fromDate) {
        Toast.show('To Date must be greater than or equal to From Date');
        return;
      }

      dispatch(setLoading(true));

      // Extract the date range between selectedFromDate and selectedToDate
      const dateRange = getDatesInRange(selectedFromDate, selectedToDate);
      console.log('range of date', dateRange);
      // Call the API function to send the date range to the server
      const response = await sendUnavailableDatesToServer(yachtId, dateRange);
      console.log('response from unavailable Dates', response);

      const datesFromApi = await getUnavailableDatesFromApi(yachtId);

      console.log('unava', datesFromApi);
      setUnavailableDatesFromApi(datesFromApi);

      setViewCalendar(true);
      // Handle any additional logic after successful API call

      Toast.show('Dates saved successfully');
    } catch (error) {
      Toast.show(error?.message);
      console.log('Error saving dates:', error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Function to get dates between two dates (inclusive)
  const getDatesInRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/bckIcon.png')}
        onPress={() => navigation.goBack()}
        styleIcon={{width: 15, height: 15}}
        label={'Manage Calendar'}
        elevation={5}
        showLabel={true}
        showImg={true}
      />
      <View style={styles.paddingView}>
        <Text style={[styles.label]}>
          Select the dates when your boat is unavailable
        </Text>
        <View style={styles.dateRangeView}>
          <TouchableOpacity onPress={showFromDatepicker}>
            <Text style={styles.hiding1}>From</Text>

            <View style={styles.innerCal}>
              <Image
                source={require('../../assets/images/calendarGrey.png')}
                style={{width: 10, height: 10, marginRight: 10}}
                resizeMode="contain"
              />

              <Text style={styles.dateText}>
                {selectedFromDate ? `${selectedFromDate}` : 'Select From '}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={showToDatePicker}>
            <Text style={styles.hiding1}>To</Text>
            <View style={styles.innerCal}>
              <Image
                source={require('../../assets/images/calendarGrey.png')}
                style={{width: 10, height: 10, marginRight: 10}}
                resizeMode="contain"
              />
              <Text style={styles.dateText}>
                {selectedToDate ? `To: ${selectedToDate}` : 'Select To '}
              </Text>
            </View>
          </TouchableOpacity>
          {/* <YachtTypePicker
            options={reasons}
            labelStyle={styles.hiding1}
            label={'Reason'}
            customIOS={styles.innerCal}
            customAndroid={[
              styles.innerCal,
              {borderRadius: 90, borderWidth: 2},
            ]}
            selectedValue={reasons.type}
            onValueChange={value => onChangeText(value)}
          /> */}
          <CustomDropdown
            label="Reason"
            labelStyle={styles.hiding1}
            options={reasons}
            innerStyle={{marginTop: 20}}
            dropdownStyle={[styles.innerCal, {height: 28}]}
            selectedValue={reason}
            customStyleText={styles.dateText}
            onSelect={value => setReason(value)}
          />
          <DateTimePickerModal
            isVisible={isFromDatePickerVisible}
            mode="date"
            onConfirm={handleFromDateConfirm}
            onCancel={hideFromDatepicker}
            minimumDate={today}
          />

          <DateTimePickerModal
            isVisible={isToDatePickerVisible}
            mode="date"
            onConfirm={handleToDateConfirm}
            onCancel={hideToDatePicker}
            minimumDate={today}
          />
        </View>
        <Savebtn label={'Add'} onPress={handleSaveDates} />
        <ScrollView>
          {/* <Text style={[styles.label]}>
            {viewCalendar
              ? 'Your Future Periods of Unavailability'
              : 'Select the dates when your boat is unavailable'}
          </Text> */}
          <Text style={[styles.label2]}>
            Your Future Periods of Unavailability
          </Text>
          <View style={{height: 0.18, marginVertical: 30}} />
          <TouchableOpacity onPress={toggleViewCalendar}>
            <Text style={[styles.label2]}>
              {!viewCalendar ? 'View Calendar' : 'Hide Calendar'}{' '}
            </Text>
          </TouchableOpacity>
          {viewCalendar && (
            <ViewCalendar unavailableDatesFromApi={unavailableDatesFromApi} />
          )}
          {/* {viewCalendr ? (
            <ViewCalendar unavailableDatesFromApi={unavailableDatesFromApi} />
          ) : (
            <View style={styles.calendarView}>
              <Calendar
                style={styles.calendarView}
                markedDates={selectedDates}
                onDayPress={day => handleDateSelection(day.dateString)}
                theme={{
                  textSectionTitleColor: '#b6c1cd',
                  selectedDayBackgroundColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: '#00adf5',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#d9e1e8',
                  arrowColor: '#00adf5',
                  monthTextColor: '#2d4150',
                }}
                minDate={today.toISOString().split('T')[0]} // Set the minimum date to today
              />
              <Space height={hp(5)} />
              <YachtTypePicker
                options={reasons}
                labelStyle={{margin: wp(5)}}
                label={'Reason'}
                selectedValue={reasons.type}
                onValueChange={value => onChangeText(value)}
              />
              <Space height={hp(5)} />
              <CustomButton
                title="Continue"
                labelColor={Colors.white}
                bgColor={Colors.Blue}
                bdColor={Colors.Blue}
                onPress={handleSaveDates}
              />
            </View>
          )} */}
          {/* <View style={{margin: wp(4)}}>
            <CustomButton
              title={viewCalendar ? 'Edit Dates' : 'View Calendar'}
              labelColor={Colors.white}
              bgColor={Colors.Blue}
              bdColor={Colors.Blue}
              onPress={toggleViewCalendar}
            />
          </View> */}
          <Space height={hp(10)} />
        </ScrollView>
      </View>
    </View>
  );
};

const ViewCalendar = ({unavailableDatesFromApi}) => {
  console.log('here', unavailableDatesFromApi);
  const markedDates = unavailableDatesFromApi?.reduce((acc, date) => {
    acc[date] = {selected: true, marked: true, dotColor: 'red'};
    return acc;
  }, {});
  return (
    <View style={styles.calendarView}>
      <Calendar
        style={styles.calendarView}
        markedDates={markedDates}
        theme={{
          textSectionTitleColor: '#b6c1cd',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          arrowColor: '#00adf5',
          monthTextColor: '#2d4150',
        }}></Calendar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignContent: 'center',
  },
  calendarView: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(2),
  },
  saveButton: {
    backgroundColor: '#00adf5',
    //  paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    color: '#383C40',
    fontFamily: fonts.regularInter,
    fontSize: FontSize.tiny,
    marginVertical: hp(2),
  },

  label2: {
    color: '#383C40',
    fontFamily: fonts.regularInter,
    fontSize: FontSize.vtiny,
  },
  dateRangeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: FontSize.vtiny,
    color: Colors.black,
    fontFamily: fonts.regular,
  },
  hiding1: {
    color: '#3A3A40',
    fontFamily: fonts.poppinBold,
    fontSize: FontSize.vtiny,
    marginVertical: 10,
  },
  innerCal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    alignContent: 'center',
    padding: 6,
    color: 'black',
    width: 110,
    // height: 30,
    alignSelf: 'center',
  },
  paddingView: {
    paddingHorizontal: 30,
  },
});

export default EditCalendar;
