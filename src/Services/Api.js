import axios from 'axios';
import Constants from './constants'; // Importing the constants object
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BankAccountCard from '../screens/Payout/BankAccountCard';
import {Platform} from 'react-native';
const {API_BASE_URL} = Constants;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const sendGoogleSignInToServer = async (idToken, device_push_token) => {
  const user_type = 'owner';

  try {
    const response = await api.post('/users/login/google', {
      idToken,
      user_type,
      device_push_token,
    });
    Toast.show('User LoggedIn Successfull!');
    console.log('rponse ftom google login via server', response?.data);
    return response.data;
  } catch (error) {
    if (error?.data?.message == undefined) {
      Toast.show('Unable to Login, please contact admin');
    } else {
      Toast.show(error?.data?.message);
    }
    console.log('error from google server', error?.data?.message);
    throw error;
  }
};

const sendAppleSignInToServer = async (idToken, device_push_token) => {
  const user_type = 'owner';
  console.log('device_push_token', device_push_token);
  try {
    const response = await api.post('/users/login/apple', {
      idToken,
      user_type,
      device_push_token,
    });
    Toast.show('User Logged In Successfully!');
    console.log('Response from Apple login via server', response?.data);

    return response.data;
  } catch (error) {
    if (error?.data?.message === undefined) {
      Toast.show('Unable to Login, please contact admin');
    } else {
      Toast.show(error?.data?.message);
    }
    console.log('Error from Apple server', error?.data?.message);
    throw error;
  }
};

export const signUpUser = async (
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
) => {
  try {
    const response = await api.post('/users/owner/signup', {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_no: phoneNumber,
      user_type: 'owner',
      password,
    });
    Toast.show(response?.data?.message);
    console.log('Response from sign up API:', response?.data);
    return response.data;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error from sign up API:', error?.response?.data?.message);
    throw error;
  }
};

const LoginSignup = async (email, password, device_push_token) => {
  console.log('device_push_token', device_push_token);
  const user_type = 'owner';

  try {
    const response = await api.post('/users/owner/login', {
      email,
      password,
      user_type,
      device_push_token,
    });
    Toast.show(response?.data?.message);
    return response.data;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error on login:', error);
    throw error;
  }
};
const createYachtStep1 = async yachtData => {
  console.log('yachtData:', yachtData);
  try {
    const token = await AsyncStorage.getItem('apiToken');
    console.log('token', token);
    const response = await api.post('/yatchs/create/first-screen', yachtData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    //  Toast.show(response?.data?.messages);
    return response;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error creating yacht:', error?.response?.data?.message);
    throw error;
  }
};

const uploadYachtPhotos = async (yachtId, photos, boatPlan) => {
  console.log('photos', photos);
  try {
    const token = await AsyncStorage.getItem('apiToken');

    const formData = new FormData();
    formData.append('progress', '40');
    formData.append('yatchId', yachtId);

    for (let i = 0; i < photos.length; i++) {
      const uri =
        Platform.OS === 'ios'
          ? `file://${photos[i].path}`
          : `${photos[i].path}`;
      formData.append('images', {
        uri: uri,
        name: 'image/jpg',
        type: `image/jpg`,
      });
    }

    const response = await api.post('/yatchs/create/second-screen', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('API Response:', response);

    Toast.show('Images uploaded Successfully!');
    return response;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error creating photo:', error?.response?.data);
    throw error;
  }
};

const pricingYacht = async data => {
  console.log('data---', data);

  try {
    const token = await AsyncStorage.getItem('apiToken');
    const response = await api.post(
      '/yatchs/create/third-screen',
      JSON.stringify(data), // Convert data to JSON string
      {
        headers: {
          'Content-Type': 'application/json', // Set content type to application/json
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log('API Response:', response);

    Toast.show('Pricing saved Successfully!');
    return response;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error Price Api:', error?.response?.data);
    throw error;
  }
};
const CancellationApi = async (yatchId, progress, cancellationPolicy) => {
  console.log(
    'ok',

    cancellationPolicy.trim(),
  );
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const policyArray = cancellationPolicy.split(' ');
    const extractedPolicy = policyArray[0].toLowerCase();
    console.log('plugin', extractedPolicy);
    const response = await api.post(
      '/yatchs/create/fourth-screen',
      {
        yatchId,
        progress,
        cancellation_policy: extractedPolicy,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log('API response policy:', response.data);
    return response;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error creating yacht:', error?.response?.data?.message);
    throw error;
  }
};

const IteminYacht = async data => {
  console.log('first', data);
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const response = await api.post('/yatchs/create/fifth-screen', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('API Response:', response);

    // Toast.show('Equipment data saved successfully!');
    return response;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error Equipment Api:', error?.response?.data);
    throw error;
  }
};

const updateYachtStatus = async (yachtId, status) => {
  try {
    // Get the user token from AsyncStorage or your authentication mechanism
    const token = await AsyncStorage.getItem('apiToken');

    // Set up the request headers with the authorization token
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    // Define the request body
    const requestBody = {
      yatchId: yachtId,
      status_to_set: status,
    };

    // Make the PATCH request
    const response = await api.patch('/yatchs/status/update', requestBody, {
      headers,
    });

    // Check if the request was successful (status code 2xx)
    if (response.status >= 200 && response.status < 300) {
      // Handle the successful response here (e.g., show a success message)
      Toast.show('Yacht status updated successfully', Toast.SHORT);
    } else {
      // Handle other status codes or errors
      Toast.show('Failed to update yacht status', Toast.LONG);
    }
  } catch (error) {
    // Handle errors (e.g., network errors, server errors)
    console.log('Error updating yacht status:', error);
    Toast.show('An error occurred while updating yacht status', Toast.LONG);
  }
};

const uploadProfileImage = async image => {
  console.log('first,', image);
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const formData = new FormData();
    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'profile.jpg',
    });

    const response = await api.post('/users/pfp', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response) {
      console.log('Image uploaded successfully:', response.data);
      return response.data;
    } else {
      console.log('Failed to upload image:', response.data);
      throw new Error('Failed to upload image');
    }
  } catch (error) {
    console.log('Error uploading image:', error);
    throw new Error('Error uploading image');
  }
};

const updatePaymentMethod = async (paymentMethod, accountHolderName) => {
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const response = await api.patch(
      '/users/owner/payment/method/update',
      {
        payment_method: paymentMethod,
        account_holder_name: accountHolderName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response) {
      console.log('response from payment response,', response?.data);
      Toast.show('Payment Information Updated Successfully');
      // Optionally, you can show a success message using a toast or other UI components
      // Toast.show('Payment method updated successfully');
    } else {
      console.log('Failed to update payment method');
      // Optionally, you can show an error message using a toast or other UI components
      // Toast.show('Failed to update payment method');
    }
  } catch (error) {
    console.log('Error updating payment method', error);
    // Handle errors, you can show an error message using a toast or other UI components
    // Toast.show('Error updating payment method');
  }
};

const updateCompanyFiles = async formData => {
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const response = await api.patch(
      '/users/owner/payment/company/update',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      },
    );

    // Handle the response as needed (you can check the status code and show a toast or perform other actions)
    if (response) {
      console.log('Company files updated successfully', response?.data);
    } else {
      console.log('Failed to update company files');
    }

    return response; // Return the response in case you need it in the component
  } catch (error) {
    console.log('Error updating company files', error);
    throw error; // Throw the error to be caught in the component
  }
};

const updatePaymentSettings = async data => {
  console.log('data for pahyment', data);
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const response = await api.patch(
      '/users/owner/payment/setting/update',
      {
        data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response) {
      console.log('response from payment settting,', response?.data);
    } else {
      console.log('Failed to update payment method');
    }
  } catch (error) {
    console.log('Error updating payment method', error);
  }
};

const changePassword = async (currentPassword, newPassword) => {
  try {
    const token = await AsyncStorage.getItem('apiToken');

    const response = await api.patch(
      '/users/owner/password/change',
      {
        current_password: currentPassword,
        new_password: newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response) {
      return response?.data;
    } else {
      console.log('Failed to change password');
    }
  } catch (error) {
    console.log(
      'Error Failed to change password',
      error?.response?.data?.message,
    );
    Toast.show(error?.response?.data?.message);
  }
};

const createYacht = async yachtData => {
  console.log('yachtData:', yachtData);
  try {
    const token = await AsyncStorage.getItem('apiToken');
    console.log('token', token);
    const response = await api.post('/yatchs/create', yachtData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    Toast.show('Yacht Created Successfully!');
    return response.data;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error creating yacht:', error?.response?.data?.message);
    throw error;
  }
};

const getYachtData = async () => {
  try {
    const token = await AsyncStorage.getItem('apiToken');
    console.log('token', token);
    const response = await api.get('/yatchs/my', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //console.log('get yachts response', response);
    return response.data;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error getting yacht data:', error?.response?.data?.message);
    throw error;
  }
};

const getownerData = async () => {
  try {
    const token = await AsyncStorage.getItem('apiToken');
    console.log('token', token);
    const response = await api.get('/users/owner/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('get ownerdata response', response?.data);
    return response.data;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error getting owner data:', error?.response?.data?.message);
    throw error;
  }
};

const getBankDetails = async () => {
  try {
    const token = await AsyncStorage.getItem('apiToken');
    console.log('token', token);
    const response = await api.get('/users/account/details/get', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('response from bank info', response?.data?.bankDetails);
    return response.data.bankDetails;
  } catch (error) {
    //Toast.show(error?.response?.data?.message);
    console.log('Error getting bank details:', error?.response?.data?.message);
    throw error;
  }
};

const deleteYacht = async yachtId => {
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const response = await api.delete(`/yatchs/delete/${yachtId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    Toast.show('Yacht Deleted Successfully!');
    return response.data;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error deleting yacht:', error?.response?.data?.message);
    throw error;
  }
};

const addBankAccountDetails = async bankFormState => {
  try {
    const token = await AsyncStorage.getItem('apiToken');

    const requestData = {
      acc_name: bankFormState?.nameOnAccount,
      acc_number: bankFormState?.accountNumber,
      acc_type: bankFormState?.accountType,
      billing_address_1: bankFormState?.billingStreetAddress1,
      billing_address_2: bankFormState?.streetAddress2,
      city: bankFormState?.city,
      routing_number: bankFormState?.routingNumber,
      state: bankFormState?.state,
      zip_or_postal_code: bankFormState?.zipCode,
    };

    const response = await api.post('/users/account/details/add', requestData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    Toast.show('Bank Account Information Added Successfully!');
    return response.data;
  } catch (error) {
    Toast.show('Error adding bank account information');
    console.log('An error occurred during the API call', error);
    throw error;
  }
};
const sendUnavailableDatesToServer = async (yachtId, selectedDates) => {
  console.log('selected dates:', selectedDates);
  try {
    const token = await AsyncStorage.getItem('apiToken');
    //console.log('token', token);

    const apiUrl = `${api.defaults.baseURL}/yatchs/edit/dates/${yachtId}`;

    const body = {
      unavailable_dates: selectedDates,
    };

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const response = await axios.patch(apiUrl, body, {headers});

    return response.data; // Assuming the response contains relevant information
  } catch (error) {
    throw error;
  }
};

const getUnavailableDatesFromApi = async yachtId => {
  try {
    const token = await AsyncStorage.getItem('apiToken');
    console.log('token', token, yachtId);
    const response = await api.get(`/yatchs/get/dates/${yachtId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('response from unavailable date info', response);
    return response?.data?.unavailable_dates;
  } catch (error) {
    //Toast.show(error?.response?.data?.message);
    console.log(
      'Error getting unavailable dates:',
      error?.response?.data?.message,
    );
    throw error;
  }
};

const getChatData = async userID => {
  console.log('first', userID);
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const response = await api.get(`/chats/convos/all/${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('response from  get ChatData', response?.data?.chatList);
    return response.data.chatList;
  } catch (error) {
    console.log('Error fetching chat data:', error);
    throw error;
  }
};

const getBookingReq = async () => {
  try {
    const token = await AsyncStorage.getItem('apiToken');
    const response = await api.get(`bookings/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('response from  get Booking Req', response?.data?.bookings);
    return response.data.bookings;
  } catch (error) {
    console.log('Error fetching Booking Request', error);
    throw error;
  }
};

const authenticateSocket = async socket => {
  const token = await AsyncStorage.getItem('apiToken');
  socket.connect();
  socket.emit('authenticate', {token: token});
};

const fetchPreviousMessages = async (senderId, receiverId, _id) => {
  console.log('chatID from api', _id);

  const token = await AsyncStorage.getItem('apiToken');
  console.log('token---', token, 'sender--', senderId, 'receiver', receiverId);
  try {
    const response = await api.get(
      `/chats/${senderId}/${receiverId}/and/${_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = response.data;

    if (data.messages) {
      return data.messages.map(msg => ({
        _id: msg.id,
        text: msg.text,
        createdAt: new Date(msg.createdAt),
        user: {
          _id: msg.sender,
        },
      }));
    }
  } catch (error) {
    console.log('Error fetching previous messages:', error);
    throw error;
  }
};

const sendMessageToServer = async (senderId, receiverId, text, yatchId) => {
  console.log(
    'yachtID--',
    yatchId,
    'senderId',
    senderId,
    'receiverId',
    receiverId,
  );

  const token = await AsyncStorage.getItem('apiToken');

  try {
    const response = await api.post(
      '/chats/message/send',
      {
        senderId,
        receiverId,
        text,
        yatchId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    Toast.show('Message Sent Successfully!');
    return response.data;
  } catch (error) {
    Toast.show(error?.response?.data?.message);
    console.log('Error sending message:', error?.response?.data?.message);
    throw error;
  }
};

const deleteAccountApiCall = async authToken => {
  const token = await AsyncStorage.getItem('apiToken');
  console.log('tokenforDelete', token);
  try {
    const response = await api.delete('/users/delete', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    Toast.show('Account Deleted Successfully!');
    console.log('Response from delete account API', response?.data);
    return response.data;
  } catch (error) {
    Toast.show('Error deleting account');
    console.log('Error from delete account API', error);
    throw error;
  }
};

const updateProfileOwner = async (
  firstName,
  lastName,
  //email,
  phoneNo,
  gender,
  dob,
  address,
  postalCode,
  city,
  languagesSpoken,
  companyName,
  companyAddress,
  companyVat,
  companyWebsite,
) => {
  try {
    const token = await AsyncStorage.getItem('apiToken');

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const requestBody = {
      first_name: firstName,
      last_name: lastName,
      // email: email,
      phone_no: phoneNo,
      gender: gender,
      dob: dob,
      address: address,
      postal_code: postalCode,
      city: city,
      languages_spoken: languagesSpoken,
      company_name: companyName,
      company_address: companyAddress,
      company_vat: companyVat,
      company_website: companyWebsite,
    };

    const response = await api.patch(
      '/users/owner/personal/update',
      requestBody,
      {
        headers,
      },
    );

    if (response) {
      Toast.show('Profile status updated successfully', Toast.SHORT);
    } else {
      Toast.show('Failed to update profile status', Toast.LONG);
    }
    return response?.data;
  } catch (error) {
    console.log('Error updating profile status:', error);
    return error.response;
  }
};

const updateBoatingLevel = async data => {
  console.log('data', data);
  try {
    const token = await AsyncStorage.getItem('apiToken');

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const requestBody = {
      data,
    };
    console.log('going');
    const response = await api.patch(
      '/users/owner/boating-experience/upload',
      data,
      {
        headers,
      },
    );
    console.log('res', response?.data);
    if (response.status >= 200 && response.status < 300) {
      Toast.show('boating status updated successfully', Toast.SHORT);
    } else {
      Toast.show('Failed to update boating status', Toast.LONG);
    }
  } catch (error) {
    console.log(
      'Error updating boating status:',
      error?.response?.data?.message,
    );
    Toast.show('An error occurred while updating boating status', Toast.LONG);
  }
};

export {
  sendGoogleSignInToServer,
  LoginSignup,
  createYachtStep1,
  uploadYachtPhotos,
  pricingYacht,
  CancellationApi,
  IteminYacht,
  updateYachtStatus,
  uploadProfileImage,
  updateProfileOwner,
  updatePaymentSettings,
  createYacht,
  getYachtData,
  deleteYacht,
  getownerData,
  addBankAccountDetails,
  getBankDetails,
  sendUnavailableDatesToServer,
  getUnavailableDatesFromApi,
  getChatData,
  getBookingReq,
  changePassword,
  updatePaymentMethod,
  updateCompanyFiles,
  sendMessageToServer,
  fetchPreviousMessages,
  updateBoatingLevel,
  authenticateSocket,
  deleteAccountApiCall,
  sendAppleSignInToServer,
};
