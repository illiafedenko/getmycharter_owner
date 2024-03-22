import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import Space from '../../components/Space';
import Toast from 'react-native-simple-toast';
import BottomView from '../../components/BottomView/BottomView';
import OptionsSelector from '../../components/OptionSelector/OptionSelector';
import {useNavigation} from '@react-navigation/native';
import {createYacht} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import SuccessModal from '../../components/CustomModal/SuccessModal';
import {configureLayoutAnimations} from 'react-native-reanimated/lib/typescript/reanimated2/core';

const YanchtStep13 = ({route}) => {
  const dispatch = useDispatch();
  const [timebtwnbkng, setTimeBtwnBooking] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    AllowdedItems,
    YachatFeatures,
    addressData,
    title,
    yachtImages,
    cancelType,
    description,
    insuraneType,
    yachtSpecData,
    advanceNoticeTime,
    multipleBooking,
    timebtwnBooking,
    captainedfishing,
    operateYacht,
    duration,
    pricePerHour,
  } = route?.params;
  console.log('asdasd', yachtImages);
  console.log(
    'images',
    yachtImages.map(image => {
      console.log('incisw', image);
      console.log('imagesdata', image.path);
      console.log('imageFile', image.mime);
    }),
  );
  console.log('captainedfishing', captainedfishing);
  // console.log(
  //   'AllowdedItems',
  //   AllowdedItems,
  //   'YachatFeatures',
  //   YachatFeatures,
  //   'addressData',
  //   addressData,
  //   'title',
  //   title,
  //   'yachtImages',
  //   yachtImages,
  //   'cancelType',
  //   cancelType,
  //   'description',
  //   description,
  //   'insuraneType',
  //   insuraneType,
  //   'yachtSpecData',
  //   yachtSpecData,
  //   'advanceNoticeTime',
  //   advanceNoticeTime,
  //   'multipleBooking',
  //   multipleBooking,
  //   'captainedfishing',
  //   captainedfishing,
  //   'operateYacht',
  //   operateYacht,
  //   'duration',
  //   duration,
  // );
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    {
      id: 1,
      text: 'Renter pays',
    },
    {
      id: 2,
      text: 'I pay',
    },

    // Add more options as needed
  ];
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSelect = option => {
    setSelectedOption(option);
    console.log('first', selectedOption?.text);
  };
  const handleNext = async () => {
    const durationValues = duration.map(item => parseInt(item.text));
    // console.log('travelDurations', durationValues);
    const allowedItemsTexts = AllowdedItems.map(item => item.text);

    //const operaterText = operateYacht.map(item => item.text);
    const operaterText = operateYacht.map(item => {
      if (item.text === 'Certified captain operates my yacht') {
        return 'captain';
      } else if (item.text === 'Renter operates my yacht') {
        return 'renter';
      } else {
        return item.text;
      }
    });

    console.log('yacht', yachatFeaturesTexts);
    const yachatFeaturesTexts = YachatFeatures.map(feature =>
      feature.text.toLowerCase(),
    );
    console.log('yacht', yachatFeaturesTexts);

    let formattedTime = 'null';

    if (
      timebtwnBooking?.text &&
      timebtwnBooking?.text.toLowerCase() !== 'none'
    ) {
      const [amount, unit] = timebtwnBooking.text.split(' ');

      if (unit === 'mins') {
        formattedTime = `00:${amount}`;
      } else if (unit === 'hour' || unit === 'hours') {
        formattedTime = `${Number(amount)}:00`;
      }

      console.log('time_between_bookings', formattedTime);
    } else if (timebtwnBooking?.text?.toLowerCase() == 'none') {
      console.log('none bookng', timebtwnBooking?.text);
      formattedTime = 'none';
    } else {
      console.log('time_between_bookingstime', timebtwnBooking);
    }
    if (!selectedOption) {
      Toast.show('Please select an option');
      return;
    }

    // Prepare data to be sent in the API call
    const apiData = new FormData();
    apiData.append('yatch_insurance_type', insuraneType);
    apiData.append('title', title);
    apiData.append('description', description);
    apiData.append('country', addressData?.country);
    apiData.append(
      'street_address_1',
      addressData?.streetAddress1?.description,
    );
    apiData.append('latitude', addressData?.streetAddress1?.latitude);
    apiData.append('longitude', addressData?.streetAddress1?.longitude);
    apiData.append('street_address_2', addressData?.streetAddress2);
    apiData.append('city', addressData?.city);
    apiData.append('state_or_province', addressData?.stateProvince);
    apiData.append('zip_or_postal', addressData?.postalCode);
    apiData.append(
      'cancellation_policy',
      cancelType.charAt(0).toLowerCase() + cancelType.slice(1),
    );
    allowedItemsTexts.forEach((value, index) => {
      apiData.append(`allowed_items[${index}]`, value);
    });
    yachatFeaturesTexts.forEach((value, index) => {
      apiData.append(`yatch_features[${index}]`, value);
    });
    apiData.append('year_specs', yachtSpecData?.year);
    apiData.append('made_by_specs', yachtSpecData?.madeBy);
    apiData.append('model_specs', yachtSpecData?.modal);
    apiData.append('type_specs', yachtSpecData?.type);
    apiData.append('length_specs', yachtSpecData?.length);
    apiData.append('category_specs', yachtSpecData?.category);
    apiData.append('psngr_capacity_specs', yachtSpecData?.passengerCapacity);
    apiData.append('motor_power', yachtSpecData?.noofCabins);
    apiData.append('no_of_cabins', yachtSpecData?.motorPower);
    apiData.append('time_availability', '08:00-18:00');
    apiData.append(
      'fuel_payer',
      selectedOption?.text == 'Renter pays' ? 'renter' : 'owner',
    );

    durationValues.forEach((value, index) => {
      apiData.append(`travel_durations[${index}]`, value);
    });

    operaterText.forEach((value, index) => {
      apiData.append(`operators[${index}]`, value);
    });

    apiData.append('advance_notice_hours', advanceNoticeTime?.text);
    apiData.append(
      'per_day_bookings',
      multipleBooking?.text === 'No' ? 'one' : 'multiple',
    );
    apiData.append('price_per_hour', pricePerHour);
    apiData.append(
      'time_between_bookings',
      formattedTime ?? timebtwnBooking?.text,
    );
    apiData.append('allow_instant_booking', true);

    for (let i = 0; i < yachtImages.length; i++) {
      apiData.append('images', {
        uri: yachtImages[i].path,
        name: yachtImages[i].mime,
        type: `image/jpg`,
      });
    }
    try {
      dispatch(setLoading(true));
      // Make the API call
      const response = await createYacht(apiData);
      console.log('API Response:', response);
      setIsModalVisible(true);
    } catch (error) {
      console.error('API Error:', error);
      // Handle error
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/backIcon.png')}
        onPress={() => navigation.goBack()}
        label={'New Yachts'}
        styleIcon={{width: wp(7), height: hp(10)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
        showImg={true}
      />
      <CardInfo
        title={'Who Pays for fuel?'}
        labelStyle={{textAlign: 'center', marginVertical: hp(5)}}
      />
      <Space height={hp(8)} />
      <OptionsSelector
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        optionStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
          paddingHorizontal: 15,
          marginVertical: 10,
          borderWidth: 1,
          borderRadius: 5,
        }}
        optionTextStyle={{
          top: 10,
          left: 30,
        }}
        showCheckbox={true}
      />
      <BottomView
        onBackPress={() => {
          navigation.goBack();
        }}
        onNextPress={handleNext}
        showback={true}
      />
      <SuccessModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        label={'Success'}
        btnTitle={'ok'}
        source={require('../../assets/images/success.gif')}
        Description={'Yancht Added Successfully!'}
        onPressLeft={() => {
          closeModal();
          navigation.navigate('Yacht');
        }}
        showLeftBtn={true}
      />
    </View>
  );
};

export default YanchtStep13;
