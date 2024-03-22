import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import BottomView from '../../components/BottomView/BottomView';
import AddressForm from './AddressForm';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

const YanchtStep2 = ({route}) => {
  const {insuraneType} = route.params;
  console.log('ys2', insuraneType);
  const navigation = useNavigation();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [addressData, setAddressData] = useState({
    country: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    stateProvince: '',
    postalCode: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    country: '',
    streetAddress1: '',
    city: '',
    stateProvince: '',
    postalCode: '',
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Function to update address data
  const updateAddressData = (field, value) => {
    setAddressData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Function to validate the form fields
  const validateFields = () => {
    const errors = {};
    Object.keys(addressData).forEach(key => {
      if (!addressData[key]) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Function to handle navigation to next step
  const navigateToNextStep = () => {
    const isValid = validateFields();
    if (isValid) {
      navigation.navigate('YanchtStep3', {
        addressData: addressData,
        insuraneType: insuraneType,
      });
    } else {
      const emptyFields = Object.keys(validationErrors);
      const emptyFieldNames = emptyFields.filter(
        field => validationErrors[field],
      );

      if (emptyFieldNames.length > 0) {
        // Construct message for the toast with empty fields
        const toastMessage = `Please fill in the following fields: ${emptyFieldNames.join(
          ', ',
        )}`;
        Toast.show(toastMessage);
      }
      // Highlight empty fields
      emptyFieldNames.forEach(field => {
        // Implement the logic to highlight or indicate the empty field
        // For instance, if you have refs for each input field:
        // Assuming you have refs set up in AddressForm and assigned to each input field
        // fieldRefs[field].current.setStyle(...);
        // Or set a state variable to handle highlighting styles for each field
        // and use that state to dynamically update the styles in AddressForm
      });
    }
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/backIcon.png')}
        onPress={() => navigation.goBack()}
        label={'New Yacht'}
        styleIcon={{width: wp(7), height: hp(10)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
        showImg={true}
      />

      <CardInfo
        title={'Where is your yacht?'}
        desc={
          'To protect your privacy policy, we only show your yacht’s exact location to guests once you’ve confirmed their trip.'
        }
      />
      <AddressForm
        updateAddressData={updateAddressData}
        validationErrors={validationErrors}
      />

      {!isKeyboardOpen && (
        <BottomView
          onBackPress={() => {
            navigation.goBack();
          }}
          onNextPress={navigateToNextStep}
          showback={true}
        />
      )}
    </View>
  );
};

export default YanchtStep2;
