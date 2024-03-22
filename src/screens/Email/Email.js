// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Modal,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import {styles} from './styles';
// import CustomHeader from '../../components/CustomHeader/CustomHeader';
// import {Colors} from '../../utils/Colors';
// import Space from '../../components/Space';
// import {hp, wp} from '../../utils/Dimensions';
// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
// import Toast from 'react-native-simple-toast';
// import {showToast} from '../../components/CustomToast/showToast';

// const EmailScreen = ({navigation}) => {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [isValidEmail, setIsValidEmail] = useState(true);

//   const handleContinue = () => {
//     if (email.trim() === '') {
//       Toast.show('Please Enter Your Email');
//       setIsValidEmail(false); // Mark email as invalid if it's empty
//     } else if (!validateEmail(email)) {
//       Toast.show('Please Enter a Valid Email Address.');
//       setIsValidEmail(false); // Mark email as invalid if it's not in the correct format
//     } else {
//       setLoading(true);

//       setLoading(false);
//       navigation.navigate('Password', {email: email});
//     }
//   };
//   const validateEmail = email => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   return (
//     <View style={styles.mainContainer}>
//       <CustomHeader
//         backgroundColor={Colors.white}
//         source={require('../../assets/images/backIcon.png')}
//         onPress={() => navigation.goBack()}
//         styleIcon={{width: wp(7), height: hp(10)}}
//         height={hp(11)}
//         elevation={5}
//         showLabel={true}
//         showImg={true}
//       />
//       <View style={styles.mg5}>
//         <Text style={styles.texth1}>Enter your email address</Text>

//         <Space height={hp(2)} />
//         <Text style={styles.texth2}>
//           We'll use this to sign you in or to create an account if you don't
//           have one yet.
//         </Text>
//         <CustomInput
//           label={'Email address'}
//           onChangeText={text => {
//             setEmail(text);
//           }}
//         />
//         <CustomButton
//           title="Continue"
//           labelColor={Colors.white}
//           bgColor={Colors.Blue}
//           bdColor={Colors.Blue}
//           onPress={handleContinue}
//           loading={loading}
//         />
//       </View>
//     </View>
//   );
// };

// export default EmailScreen;
