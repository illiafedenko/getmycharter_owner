import {Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {styles} from './styles';
import Space from '../../components/Space';
import CustomInput from '../../components/CustomInput/CustomInput';
import fonts from '../../assets/fonts';
import Savebtn from '../../components/Savebtn/Savebtn';
import {useNavigation} from '@react-navigation/native';
import NestedOptionSelector from '../../components/NestedOptionSelector/NestedOptionSelector';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {pricingYacht} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import Toast from 'react-native-simple-toast';

const Pricing = ({route}) => {
  const {yachtId} = route.params;
  console.log('yachtID from pricing', yachtId);
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const optionsData = [
    {
      id: 1,
      text: 'No',
      additionalText: 'This yacht can only be booked once a day.',
      // subOptions: [
      //   {
      //     id: 11,
      //     text: 'Sub-Option 1-1',
      //     additionalText: 'Sub-Additional Text 1-1',
      //   },
      //   {
      //     id: 12,
      //     text: 'Sub-Option 1-2',
      //     additionalText: 'Sub-Additional Text 1-2',
      //   },
      // ],
    },
    {
      id: 2,
      text: 'Yes',
      additionalText: 'How much time do you need in between bookings?',
      subOptions: [
        {
          id: 21,
          text: 'None',
          //     additionalText: 'Sub-Additional Text 2-1',
        },
        {
          id: 22,
          text: '30 mins',
          //   additionalText: 'Sub-Additional Text 2-2',
        },
        {
          id: 23,
          text: '1 hour',
          //   additionalText: 'Sub-Additional Text 2-2',
        },
        {
          id: 24,
          text: '2 hours',
          //   additionalText: 'Sub-Additional Text 2-2',
        },
      ],
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const handleSave = async () => {
    // Validate price and selectedOption
    if (!price || !selectedOption) {
      setError('Please set the price and select an option');
      return;
    } else if (selectedOption.text === 'Yes' && !selectedSubOption) {
      Toast.show('Please select a sub-option');
      return;
    }
    let formattedTime = 'null';

    if (
      selectedOption?.text === 'Yes' &&
      selectedSubOption?.text &&
      selectedSubOption?.text?.toLowerCase() !== 'none'
    ) {
      const [amount, unit] = selectedSubOption?.text?.split(' ');

      if (unit === 'mins') {
        formattedTime = `00:${amount}`;
      } else if (unit === 'hour' || unit === 'hours') {
        formattedTime = `${Number(amount)}:00`;
      }

      console.log('time_between_bookings', formattedTime);
    } else if (selectedSubOption?.text?.toLowerCase() == 'none') {
      console.log('none bookng', selectedSubOption?.text);
      formattedTime = 'none';
    } else {
      console.log('time_between_bookingstime', selectedSubOption?.text);
    }
    // API call data
    const apiData = {
      yatchId: yachtId,
      progress: '60',
      time_between_bookings: formattedTime,
      price_per_hour: price,
    };

    try {
      dispatch(setLoading(true));
      const response = await pricingYacht(apiData);

      // Handle API response
      if (response && response.status === 201) {
        // Navigate to the next screen
        navigation.replace('CancellationPolicy', {
          yachtId: response?.data?.yatch?._id,
        });
      } else {
        Toast.show('Failed to save data. Please try again.');
      }
    } catch (error) {
      console.log('API call error:', error);
      Toast.show('An error occurred. Please try again.');
    } finally {
      dispatch(setLoading(false));
    }
  };

  const saveYacht = async data => {
    try {
      // Make API call
      const response = await api.post('/yatchs/create/third-screen', data);

      return response;
    } catch (error) {
      throw error;
    }
  };
  const handleSelect = (option, subOption) => {
    setSelectedOption(option);
    setSelectedSubOption(subOption);
    console.log('Selected Option:', option);
    console.log('Selected Sub-Option:', subOption);
    // You can perform additional actions based on the selected option and sub-option
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        label={'Pricing'}
        elevation={5}
        showLabel={true}
        showImg={false}
      />
      <KeyboardAwareScrollView>
        <View style={styles.mainCon}>
          <Space height={15} />
          <Text style={styles.instructionText}>Reference price</Text>
          <Text style={styles.dragText}>
            Set a base rental price for your boat. This should be the lowest
            price you are willing to accept for rentals. You will then be able
            to add custom price periods
          </Text>
          <Text style={[styles.instructionText, {marginVertical: 23}]}>
            Price and options
          </Text>
          <CustomInput
            customStyle={[styles.customInput]}
            label={'Price /hour .'}
            placeholder={'(0 AED)'}
            keyboardType={'numeric'}
            onChangeText={text => {
              setPrice(text);
              setError('');
            }}
            labelStyle={{
              color: '#383C40',
              fontSize: 12,
              fontFamily: fonts.boldInter,
            }}
          />
          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

          <Text style={[styles.instructionText, {marginVertical: 5}]}>
            Earn more from your boat by allowing multiple bookings on the same
            day.
          </Text>
          <NestedOptionSelector
            options={optionsData}
            onSelect={handleSelect}
            selectedOption={selectedOption}
            selectedSubOption={selectedSubOption}
            setSelectedOption={setSelectedOption}
            setSelectedSubOption={setSelectedSubOption}
            optionStyle={{marginVertical: 10}}
            optionTextStyle={{fontSize: 16}}
          />
          <Savebtn
            customStyle={{marginBottom: 230}}
            onPress={handleSave}
            label={'Save'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Pricing;
