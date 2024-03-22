import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';
import MultiSelectDropdown from '../../components/MultiSelectDropdown/MultiSelectDropdown';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';
import Savebtn from '../../components/Savebtn/Savebtn';
import {updateProfileOwner, uploadProfileImage} from '../../Services/Api';
import Toast from 'react-native-simple-toast';
import {useSelector, useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import {
  selectOwnerDetails,
  selectUserInfo,
} from '../../Store/Profile/userInfoSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PersonalInformation = () => {
  const ownerDetails = useSelector(selectOwnerDetails);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userInfo = useSelector(selectUserInfo);
  console.log('ownerDetails', ownerDetails?.languages_spoken);
  // Extract day, month, and year from ownerDetails?.dob
  const initialDate = ownerDetails?.dob ? new Date(ownerDetails?.dob) : null;
  const initialDay = initialDate ? String(initialDate.getDate()) : null;
  const initialMonth = initialDate
    ? String(initialDate.getMonth() + 1).padStart(2, '0')
    : null;
  console.log('first', initialMonth);
  const initialYear = initialDate ? String(initialDate.getFullYear()) : null;

  const Gender = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];
  const Languages = [
    {label: 'English', value: 'English'},
    {label: 'Spanish', value: 'Spanish'},
    {label: 'French', value: 'French'},
    {label: 'German', value: 'German'},
    {label: 'Chinese', value: 'Chinese'},
    // Add more languages as needed
  ];
  const [selectedOptions, setSelectedOptions] = useState(ownerDetails?.gender);
  const [selectedLanguage, setSelectedLanguage] = useState(
    ownerDetails?.languages_spoken || [], // Set initially from ownerDetails
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(initialDay);
  const [selectedMonth, setSelectedMonth] = useState(initialMonth);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [selectedImage, setSelectedImage] = useState(null);

  const days = Array.from({length: 31}, (_, index) => String(index + 1));
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = Array.from({length: 100}, (_, index) => String(2024 - index));

  const renderOption = (item, onSelect) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        onSelect(item),
          setDayModalVisible(false),
          setMonthModalVisible(false),
          setYearModalVisible(false);
      }}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );
  const [dayModalVisible, setDayModalVisible] = useState(false);
  const [monthModalVisible, setMonthModalVisible] = useState(false);
  const [yearModalVisible, setYearModalVisible] = useState(false);

  const getMonthNumber = monthName => {
    const monthIndex = months.findIndex(month => month === monthName);
    const monthNumber =
      monthIndex >= 0 ? (monthIndex + 1).toString().padStart(2, '0') : '';
    return monthNumber;
  };

  const getMonthName = monthNumber => {
    const numericMonth = parseInt(monthNumber, 10);
    return months[numericMonth - 1];
  };
  const renderModal = (
    options,
    onSelect,
    selectedValue,
    modalVisible,
    setModalVisible,
  ) => (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={item => item}
              renderItem={({item}) => renderOption(item, onSelect)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  const Countries = [
    {id: '1', name: 'United States', code: '+1'},
    {id: '2', name: 'United Kingdom', code: '+44'},
    {id: '3', name: 'Canada', code: '+1'},
    {id: '4', name: 'United Arab Emirates ', code: '+971'},
    {id: '5', name: 'Australia', code: '+61'},
    {id: '6', name: 'Germany', code: '+49'},
  ];

  const [countryModalVisible, setCountryModalVisible] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(
    ownerDetails?.country || null,
  );
  const [phoneNumber, setPhoneNumber] = useState(ownerDetails?.phone_no || '');
  const [firstName, setFirstName] = useState(ownerDetails?.first_name || '');
  const [lastName, setLastName] = useState(ownerDetails?.last_name || '');
  //const [email, setEmail] = useState(ownerDetails?.email || '');
  const [address, setAddress] = useState(ownerDetails?.address || '');
  const [postalCode, setPostalcode] = useState(ownerDetails?.postal_code || '');
  const [city, setCity] = useState(ownerDetails?.city || '');
  const [companyWebsite, setCompanywebsite] = useState(
    ownerDetails?.company_website || '',
  );
  const [companyName, setCompanyName] = useState(
    ownerDetails?.company_name || '',
  );
  const [company_address, setCompanyAddress] = useState(
    ownerDetails?.company_address || '',
  );
  const [companyVat, setCompanyVAt] = useState(ownerDetails?.company_vat || '');

  const renderCountryOption = item => (
    <TouchableOpacity
      style={{padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}}
      onPress={() => {
        setSelectedCountry(item);
        setCountryModalVisible(false);
      }}>
      <Text style={{color: 'black'}}>{`${item.name} (${item.code})`}</Text>
    </TouchableOpacity>
  );

  const renderCountryModal = () => (
    <Modal
      transparent={true}
      animationType="slide"
      visible={countryModalVisible}
      onRequestClose={() => setCountryModalVisible(false)}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 20,
          }}>
          <FlatList
            data={Countries}
            keyExtractor={item => item.id}
            renderItem={({item}) => renderCountryOption(item)}
          />
        </View>
      </View>
    </Modal>
  );

  const handleImageSelection = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 900,
        height: 900,
        cropping: true,
        includeBase64: true,
      });
      const response = await uploadProfileImage(image?.path);
      console.log('response from image', response);
      Toast.show('Profile Picture Uploaded Successfully!');
      setSelectedImage(image?.path);
    } catch (error) {
      console.log('Image selection error:', error);
    }
  };

  const handlePublish = async () => {
    //navigation.navigate('BoatingInformation');

    try {
      const requiredFields = [
        {field: 'First Name', value: firstName},
        {field: 'Last Name', value: lastName},
        //{field: 'Email', value: email},
        {field: 'Phone Number', value: phoneNumber},
        {field: 'Gender', value: selectedOptions[0]},
        {field: 'Day of Birth', value: selectedDay},
        {field: 'Month of Birth', value: selectedMonth},
        {field: 'Year of Birth', value: selectedYear},
        {field: 'Address', value: address},
        {field: 'Postal Code', value: postalCode},
        {field: 'City', value: city},
        {field: 'Languages Spoken', value: selectedLanguage.length},
        {field: 'Company Name', value: companyName},
        {field: 'Company Address', value: company_address},
        {field: 'Company VAT', value: companyVat},
        // {field: 'Company Website', value: companyWebsite},
      ];

      const missingFields = requiredFields.filter(field => !field.value);

      if (missingFields.length > 0) {
        const missingFieldNames = missingFields
          .map(field => field.field)
          .join(', ');
        Toast.show(`Please fill in all required fields: ${missingFieldNames}`);
        return;
      }
      dispatch(setLoading(true));
      const formattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;

      const response = await updateProfileOwner(
        firstName,
        lastName,
        // email,
        phoneNumber,
        selectedOptions[0],
        formattedDate,
        address,
        postalCode,
        city,
        selectedLanguage,
        companyName,
        company_address,
        companyVat,
        companyWebsite,
      );
      if (response) {
        console.log('first', response);

        navigation.navigate('BoatingInformation');
      }
    } catch (error) {
      console.log('Error publishing:', error);
      Toast.show('Error Occured while Saving');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomHeader
          label={'Manage Profile'}
          showLabel
          styleIcon={{width: 15, height: 15}}
          showImg={true}
          source={require('../../assets/images/bckIcon.png')}
          backgroundColor={Colors.white}
          elevation={5}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.paddingView}>
          <Text style={styles.h1Text}>Personal Information</Text>
          {selectedImage ? (
            <Image source={{uri: selectedImage}} style={styles.dpIcon} />
          ) : userInfo?.profile_pic !== 'none' ? (
            <Image
              source={{uri: userInfo?.profile_pic}}
              style={styles.dpIcon}
            />
          ) : (
            <Image
              source={require('../../assets/images/dp.png')}
              style={styles.dpIcon}
            />
          )}

          <Text style={[styles.h2Text, {marginTop: 4}]}>Change your photo</Text>
          <Text style={styles.h3Text}>Minimum size: 260px x 260px</Text>
          <Savebtn
            customStyle={{
              alignSelf: 'center',
              width: '70%',
              marginVertical: 23,
            }}
            btnStlye={{alignSelf: 'center'}}
            label={'Select an image'}
            onPress={handleImageSelection}
          />
          <CustomInput
            customStyle={[styles.customInput]}
            label={'First name'}
            value={firstName}
            onChangeText={text => {
              setFirstName(text);
              console.log('firstt', firstName);
            }}
          />
          <CustomInput
            customStyle={[styles.customInput]}
            label={'Surname'}
            value={lastName}
            onChangeText={text => {
              setLastName(text);
              console.log('lastt', lastName);
            }}
          />
          {/* <CustomInput
            customStyle={[styles.customInput]}
            label={'Email'}
            onChangeText={text => {
              setEmail(text);
              console.log('email', email);
            }}
          /> */}
          <CustomDropdown
            label="Gender"
            options={Gender}
            selectedValue={selectedOptions}
            onSelect={value => {
              console.log('values selected', value);
              setSelectedOptions(value);
            }}
            //   initialValue={ownerDetails?.gender}
          />

          <View style={styles.container2}>
            <Text style={styles.title}>Date of Birth</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.dateOption}
                onPress={() => setDayModalVisible(true)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Text style={{color: 'black'}}>{selectedDay || 'Day'}</Text>
                  <Image
                    source={require('../../assets/images/downIcon.png')}
                    style={{width: 10, height: 10, alignSelf: 'center'}}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
              {renderModal(
                days,
                setSelectedDay,
                selectedDay,
                dayModalVisible,
                setDayModalVisible,
              )}

              <TouchableOpacity
                style={styles.dateOption}
                onPress={() => setMonthModalVisible(true)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  {console.log('inini', selectedMonth)}
                  <Text style={{color: 'black'}}>
                    {isNaN(selectedMonth)
                      ? selectedMonth
                      : getMonthName(selectedMonth) || 'Month'}
                  </Text>
                  <Image
                    source={require('../../assets/images/downIcon.png')}
                    style={{width: 10, height: 10, alignSelf: 'center'}}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
              {renderModal(
                months,
                setSelectedMonth,
                selectedMonth,
                monthModalVisible,
                setMonthModalVisible,
              )}

              <TouchableOpacity
                style={styles.dateOption}
                onPress={() => setYearModalVisible(true)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Text style={{color: 'black'}}>{selectedYear || 'Year'}</Text>
                  <Image
                    source={require('../../assets/images/downIcon.png')}
                    style={{width: 10, height: 10, alignSelf: 'center'}}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
              {renderModal(
                years,
                setSelectedYear,
                selectedYear,
                yearModalVisible,
                setYearModalVisible,
              )}
            </View>
          </View>

          <CustomDropdown
            label="Languages Spoken"
            options={Languages}
            selectedValue={selectedLanguage}
            onSelect={value => {
              console.log('Language selected', value);
              setSelectedLanguage(value);
            }}
          />

          <Text style={styles.title}>Telephone</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => setCountryModalVisible(true)}
              style={{
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                width: '49%',
                borderColor: '#CED4DA',
              }}>
              <Text style={{color: 'black'}} numberOfLines={1}>
                {selectedCountry ? `${selectedCountry.name}` : 'Select Country'}
              </Text>
            </TouchableOpacity>

            {renderCountryModal()}

            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                borderColor: '#CED4DA',
                width: '49%',
                color: 'black',
                fontSize: 12,
              }}
              placeholder="+971 | Phone Number"
              placeholderTextColor={'black'}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          <CustomInput
            customStyle={[styles.customInput]}
            label={'Address'}
            onChangeText={text => {
              setAddress(text);
            }}
            value={address}
          />

          <CustomInput
            customStyle={[styles.customInput]}
            label={'Postal Code'}
            onChangeText={text => {
              setPostalcode(text);
            }}
            value={postalCode}
          />

          <CustomInput
            customStyle={[styles.customInput]}
            label={'City'}
            onChangeText={text => {
              setCity(text);
            }}
            value={city}
          />

          <Text style={styles.company}>Company</Text>
          <CustomInput
            customStyle={[styles.customInput]}
            label={'Company'}
            onChangeText={text => {
              setCompanyName(text);
            }}
            value={companyName}
          />

          <CustomInput
            customStyle={[styles.customInput]}
            label={'Address'}
            onChangeText={text => {
              setCompanyAddress(text);
            }}
            value={company_address}
          />

          <CustomInput
            customStyle={[styles.customInput]}
            label={'Add VAT'}
            onChangeText={text => {
              setCompanyVAt(text);
            }}
            value={companyVat}
          />
          <CustomInput
            customStyle={[styles.customInput]}
            label={'Website'}
            onChangeText={text => {
              setCompanywebsite(text);
            }}
            value={companyWebsite}
          />
          <Savebtn
            label={'Save'}
            onPress={() => {
              handlePublish();
            }}
          />
          <Space height={500} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default PersonalInformation;
