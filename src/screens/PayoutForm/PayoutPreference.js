import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import BankForm from './BankForm';
import Toast from 'react-native-simple-toast';
import SuccessModal from '../../components/CustomModal/SuccessModal';
import {useNavigation} from '@react-navigation/native';
import {addBankAccountDetails, getBankDetails} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';
import {setBankDetails} from '../../Store/BankDetails/bankDetailsSlice';

const PayoutForms = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const [bankFormState, setBankFormState] = useState({
    nameOnAccount: '',
    accountType: '',
    routingNumber: '',
    accountNumber: '',
    billingStreetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleBankFormChange = (fieldName, value) => {
    setBankFormState(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const getEmptyFields = () => {
    const emptyFieldsArray = [];

    for (const key in bankFormState) {
      if (
        bankFormState.hasOwnProperty(key) &&
        bankFormState[key].trim() === ''
      ) {
        emptyFieldsArray.push(key);
      }
    }

    return emptyFieldsArray;
  };

  const handleBankFormSubmit = async () => {
    const emptyFields = getEmptyFields();

    if (emptyFields.length > 0) {
      Toast.show(
        `Please fill in the following fields: ${emptyFields.join(', ')}`,
      );
      return;
    }

    try {
      dispatch(setLoading(true));
      await addBankAccountDetails(bankFormState);
      const response = await getBankDetails();
      console.log('response from get bank', response);
      dispatch(setBankDetails(response));
      setIsModalVisible(true);
    } catch (error) {
      // Handle errors from the API call
      console.log('Error adding bank account information', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <CustomHeader
        source={require('../../assets/images/backIcon.png')}
        backgroundColor={Colors.white}
        label={'Payout Preferences'}
        onPress={() => navigation.goBack()}
        showImg={true}
        height={hp(11)}
        styleIcon={{width: wp(7), height: hp(10)}}
        elevation={5}
        showLabel={true}
      />
      <BankForm
        formData={bankFormState}
        onChange={handleBankFormChange}
        onSubmit={handleBankFormSubmit}
      />

      <SuccessModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        label={'Success'}
        btnTitle={'ok'}
        source={require('../../assets/images/success.gif')}
        Description={'Bank Account Information Added Successfully!'}
        onPressLeft={() => {
          closeModal(), navigation.navigate('Payout');
        }}
        showLeftBtn={true}
      />
    </ScrollView>
  );
};

export default PayoutForms;
