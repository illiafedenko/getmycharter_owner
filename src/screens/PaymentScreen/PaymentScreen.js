import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';
import Savebtn from '../../components/Savebtn/Savebtn';
import Toast from 'react-native-simple-toast';
import {
  updateCompanyFiles,
  updatePaymentMethod,
  updatePaymentSettings,
} from '../../Services/Api';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../Store/General';
import ImagePicker from 'react-native-image-crop-picker';
import {selectOwnerDetails} from '../../Store/Profile/userInfoSlice';

const PaymentScreen = () => {
  const ownerDetails = useSelector(selectOwnerDetails);
  console.log('ownerDetails from payment', ownerDetails);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const paymentMethods = [
    {label: 'Credit Card', value: 'credit_card'},
    {label: 'Debit Card', value: 'debit_card'},
    {label: 'PayPal', value: 'paypal'},

    // Add more payment methods as needed
  ];
  const paymentPercant = [
    {label: '5%', value: '5'},
    {label: '10%', value: '10'},
    {label: '20%', value: '20'},
    {label: '30%', value: '30'},
    {label: '40%', value: '40'},
    {label: '50%', value: '50'},
    // Add more payment methods as needed
  ];

  const numdays = [
    {label: '5', value: '5'},
    {label: '10', value: '10'},
    {label: '20', value: '20'},
    {label: '30', value: '30'},

    // Add more payment methods as needed
  ];
  const [accountHolderName, setAccountHolderName] = useState(
    ownerDetails?.account_holder_name || '',
  );
  const [selectedOptions, setSelectedOptions] = useState(
    ownerDetails?.payment_method || null,
  );
  const [iban, setIban] = useState(ownerDetails?.iban || '');

  const [selectedCompanyImage, setSelectedCompanyImage] = useState(null);
  const [downPaymentPercent, setDownPaymentPercent] = useState(
    ownerDetails?.down_payment_percent || '',
  );
  const [daysBeforePayment, setDaysBeforePayment] = useState(
    ownerDetails?.days_before_payment || '',
  );
  const handlePaymentPress = () => {
    if (!selectedOptions) {
      Toast.show('Please Select Payment Method');
      return;
    }
    if (!accountHolderName.trim()) {
      // If the field is empty, show a toast message
      Toast.show('Please enter the bank account holder name');
      return;
    }
    dispatch(setLoading(true));
    updatePaymentMethod(selectedOptions, accountHolderName)
      .then(response => {
        // console.log('res from pay', response?.data);
        dispatch(setLoading(false));
      })
      .catch(error => {
        // Handle errors, you can show an error message using a toast or other UI components
        Toast.show('Failed to update payment method');
        console.log('Error updating payment method', error);
        dispatch(setLoading(false));
      });
  };

  const handleCompanyFilesPress = () => {
    if (!selectedCompanyImage) {
      Toast.show('Please choose a company file');
      return;
    }
    const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/;
    if (!iban.trim() || !ibanRegex.test(iban.trim())) {
      Toast.show('Please enter a valid IBAN');
      return;
    }

    dispatch(setLoading(true));

    // Create FormData object to send file and IBAN
    const formData = new FormData();
    formData.append('image', {
      name: selectedCompanyImage.filename || 'image.jpg',
      type: selectedCompanyImage.mime,
      uri: selectedCompanyImage.path,
    });
    formData.append('iban', iban);

    // Make the API call to update company files
    updateCompanyFiles(formData)
      .then(response => {
        Toast.show('Company files updated successfully');
        console.log('Company files updated successfully', response?.data);
        dispatch(setLoading(false));
      })
      .catch(error => {
        console.log('Error updating company files', error);
        Toast.show('Failed to update company files');
        dispatch(setLoading(false));
      });
  };

  const handleCompanyImageSelection = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 900,
        height: 900,
        cropping: true,
        includeBase64: true,
      });
      setSelectedCompanyImage(image);
    } catch (error) {
      console.log('Company image selection error:', error);
    }
  };

  const handlePaymentSettingsPress = () => {
    console.log('ok', downPaymentPercent);
    if (!downPaymentPercent || !daysBeforePayment) {
      Toast.show('Please fill in Down Payment and Days Before');
      return;
    }

    dispatch(setLoading(true));
    updatePaymentSettings({
      down_payment_percent: downPaymentPercent,
      days_before_payment: daysBeforePayment,
    })
      .then(response => {
        Toast.show('Payment settings updated successfully');
        console.log('Payment settings updated successfully', response?.data);
        dispatch(setLoading(false));
        navigation.navigate('ChangePassword');
      })
      .catch(error => {
        console.log('Error updating payment settings', error);
        Toast.show('Failed to update payment settings');
        dispatch(setLoading(false));
      });
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        label={'Manage Profile'}
        showLabel
        styleIcon={{width: 15, height: 15}}
        showImg={true}
        source={require('../../assets/images/bckIcon.png')}
        backgroundColor={Colors.white}
        elevation={5}
        height={'12%'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.paddingView}>
          <Text style={styles.h1Text}>Payment Method</Text>
          <Text style={[styles.h4]}>
            These details will be used to pay you once your boat has been
            chartered
          </Text>
          <CustomDropdown
            options={paymentMethods}
            selectedValue={selectedOptions}
            onSelect={value => {
              console.log('values selected', value);
              setSelectedOptions(value);
            }}
          />
          <CustomInput
            label={'Bank account holder (Name)'}
            customStyle={[styles.customInput]}
            labelStyle={styles.labelText}
            multiline={true}
            value={accountHolderName}
            onChangeText={text => setAccountHolderName(text)}
          />
          <Savebtn
            label={'Save'}
            onPress={
              () => handlePaymentPress()
              //navigation.navigate('ChangePassword')
            }
          />
          <Text style={styles.h1Text}>Company’s files</Text>
          <Text style={[styles.h4]}>
            Upload the following certificates to be granted access to our
            professional payment service.
          </Text>
          <View style={styles.mainView}>
            <TouchableOpacity
              style={styles.chooseBtn}
              onPress={handleCompanyImageSelection}>
              <Text style={styles.csnText}>Choose file</Text>
            </TouchableOpacity>
            <Text style={styles.nofile}>
              {selectedCompanyImage?.mime || 'no file chosen'}
            </Text>
          </View>
          <CustomInput
            label={'IBAN'}
            customStyle={[styles.customInput]}
            labelStyle={styles.labelText}
            multiline={true}
            value={iban}
            onChangeText={text => setIban(text)}
          />

          <Savebtn
            label={'Save'}
            onPress={
              () => handleCompanyFilesPress()
              //navigation.navigate('ChangePassword')
            }
          />
          <Text style={styles.h1Text}>Payment settings</Text>
          <CustomDropdown
            options={paymentPercant}
            label={'Down payment percentage wanted'}
            selectedValue={downPaymentPercent}
            onSelect={value => {
              console.log('values selected', value);
              setDownPaymentPercent(value);
            }}
          />
          <CustomDropdown
            options={numdays}
            label={'Number of days before balance payment'}
            selectedValue={daysBeforePayment}
            onSelect={value => {
              console.log('values selected', value);
              setDaysBeforePayment(value);
            }}
          />
          <Savebtn label={'Save'} onPress={handlePaymentSettingsPress} />
          <Space height={180} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
