import {Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {styles} from './styles';
import Space from '../../components/Space';
import CustomInput from '../../components/CustomInput/CustomInput';
import fonts from '../../assets/fonts';
import Savebtn from '../../components/Savebtn/Savebtn';
import OptionSelector from '../../components/OptionSelector/OptionSelector';
import {useNavigation} from '@react-navigation/native';
import {hp} from '../../utils/Dimensions';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import {CancellationApi} from '../../Services/Api';

const CancellationPolicy = ({route}) => {
  const dispatch = useDispatch();
  const {yachtId} = route.params;
  console.log('yacht from Cancel', yachtId);
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    {
      id: 1,
      text: 'Flexible Cancellation Policy:',
      additionalText:
        '. Bookings can be cancelled at any time before 24 hours of the scheduled charter with a 100% refund.',
    },
    {
      id: 2,
      text: 'Moderate Cancellation Policy:',
      additionalText:
        '. Cancellation before 48 hours of the scheduled charter will result in a 100% refund.\n' +
        '. If cancellation is made between 48 and 24 hours before the charter, a 20% fee will be deducted, and the remaining 80% will be refunded.',
    },
    {
      id: 3,
      text: 'Strict Cancellation Policy:',
      additionalText:
        '. Cancellation before 24 hours of the scheduled charter will result in a 50% refund.',
    },

    // Add more options as needed
  ];
  const handleSelect = option => {
    setSelectedOption(option);
    console.log('first', option);
  };

  const handleSave = async () => {
    try {
      if (!selectedOption) {
        Toast.show('Please select a cancellation policy');
        return;
      }

      dispatch(setLoading(true));

      // Assuming CancellationApi returns a promise
      const response = await CancellationApi(
        yachtId,
        '80',
        selectedOption?.text,
      );
      console.log('first', response);

      if (response && response.status === 201) {
        Toast.show('Successfully created, Add more information!');
        console.log('response from pricing', response?.data?.yatch?._id);
        // Redirect or perform other actions on success
        navigation.replace('Equipment', {yachtId: response?.data?.yatch?._id});
      } else {
        // Handle API error
        // You can check response.data for more details on the error
        Toast.show('Error submitting Policy. Please try again.');
      }
    } catch (error) {
      console.log('API Error:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        label={'Cancellation Policy'}
        elevation={5}
        showLabel={true}
        showImg={false}
      />
      <Space height={12} />
      <View style={styles.mainCon}>
        <OptionSelector
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          showCheckbox={true}
          optionConStyle={{marginBottom: 20}}
          optionStyle={{paddingBottom: 23}}
          optionTextStyle={{paddingBottom: 10}}
          additionalstyle={{
            lineHeight: 24,
            color: '#040F0F',
            fontFamily: fonts.regularInter,
            fontSize: 12,
          }}
        />
        <Savebtn onPress={handleSave} label={'Save'} />
      </View>
    </View>
  );
};

export default CancellationPolicy;
