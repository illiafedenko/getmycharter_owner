import React, {useState, useEffect, useContext} from 'react';
import {Modal, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/Splash';
import ChatScreen from '../screens/chat';
import SearchScreen from '../screens/Search/index';
import YachtScreen from '../pages/yacht';
import BookScreen from '../pages/book';
import DetailPriceScreen from '../pages/detailed_price';
import PaymentScreen from '../pages/payment';

import BookingScreen from '../screens/bookings';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingScreen from '../pages/setting';
import NotificationScreen from '../screens/Notification/Notification';
import EmailScreen from '../screens/Email/Email';
import HomeScreen from '../screens/Home/HomeScreen';
import BottomTab from './BottomTab';
import PayoutPreference from '../screens/Payout/PayoutPreference';
import PayoutForms from '../screens/PayoutForm/PayoutPreference';
import PayoutHistory from '../screens/PayoutHistory/PayoutHistory';
import NewYanctScreen from '../screens/Yanchts/NewYanctScreen';
import YanchtStep1 from '../screens/Yanchts/YanchtStep1';
import Profile from '../screens/profile';
import BookingDetailScreen from '../screens/Bookings/BookingDetailScreen';
import BookingContact from '../screens/Bookings/BookingContact';
import YanchtStep2 from '../screens/Yanchts/YanchtStep2';
import YanchtStep3 from '../screens/Yanchts/YanchtStep3';
import YanchtStep4 from '../screens/Yanchts/YanchtStep4';
import YanchtStep5 from '../screens/Yanchts/YanchtStep5';
import YanchtStep6 from '../screens/Yanchts/YanchtStep6';
import YanchtStep7 from '../screens/Yanchts/YanchtStep7';
import YanchtStep8 from '../screens/Yanchts/YanchtStep8';
import YanchtStep9 from '../screens/Yanchts/YanchtStep9';
import YanchtStep10 from '../screens/Yanchts/YanchtStep10';
import YanchtStep11 from '../screens/Yanchts/YanchtStep11';
import YanchtStep12 from '../screens/Yanchts/YanchtStep12';
import YanchtStep13 from '../screens/Yanchts/YanchtStep13';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import Loader from '../components/CustomLoader/Loader';
import {useSelector} from 'react-redux';
import EditCalendar from '../screens/Yanchts/EditCalendar';
import AppWrapper from '../components/AppWrapper/Wrapper';
import SignUpScreen from '../screens/SignUp/SignUp';
import SignInScreen from '../screens/SignIn/SignIn';
import Login from '../screens/Login/Login';

const Stack = createNativeStackNavigator();

const MainNavigator = ({parentNavigator}) => {
  const isLoading = useSelector(state => state.general.appLoading);
  return (
    <AppWrapper>
      <StatusBar
        //  hidden={hiddenSB}
        translucent
        // barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        <>
          <Stack.Navigator
            initialRouteName={'Splash'}
            screenOptions={{headerShown: false}}>
            <>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen
                name="Notification"
                component={NotificationScreen}
              />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="Login" component={Login} />
              {/* <Stack.Screen name="Email" component={EmailScreen} /> */}
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="BottomTab" component={BottomTab} />
              {/* <Stack.Screen name="Register" component={RegisterScreen} />
            
              <Stack.Screen name="Favourite" component={FavouriteScreen} />
              <Stack.Screen name="Message" component={MessageScreen} /> */}

              <Stack.Screen name="Chat" component={ChatScreen} />
              {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
              <Stack.Screen name="Payout" component={PayoutPreference} />
              <Stack.Screen name="PayoutForm" component={PayoutForms} />
              <Stack.Screen name="PayoutHistory" component={PayoutHistory} />
              <Stack.Screen name="NewYanct" component={NewYanctScreen} />
              <Stack.Screen name="YanchtStep1" component={YanchtStep1} />
              <Stack.Screen name="YanchtStep2" component={YanchtStep2} />
              <Stack.Screen name="YanchtStep3" component={YanchtStep3} />
              <Stack.Screen name="YanchtStep4" component={YanchtStep4} />
              <Stack.Screen name="YanchtStep5" component={YanchtStep5} />
              <Stack.Screen name="YanchtStep6" component={YanchtStep6} />
              <Stack.Screen name="YanchtStep7" component={YanchtStep7} />
              <Stack.Screen name="YanchtStep8" component={YanchtStep8} />
              <Stack.Screen name="YanchtStep9" component={YanchtStep9} />
              <Stack.Screen name="YanchtStep10" component={YanchtStep10} />
              <Stack.Screen name="YanchtStep11" component={YanchtStep11} />
              <Stack.Screen name="YanchtStep12" component={YanchtStep12} />
              <Stack.Screen name="YanchtStep13" component={YanchtStep13} />
              <Stack.Screen name="Calendar" component={EditCalendar} />
              <Stack.Screen name="DetailScreen" component={DetailScreen} />
              <Stack.Screen
                name="BookingDetailScreen"
                component={BookingDetailScreen}
              />
              <Stack.Screen name="BookingContact" component={BookingContact} />
              <Stack.Screen name="Search" component={SearchScreen} />
              {/* <Stack.Screen name="Info" component={YachtScreen} /> */}
              <Stack.Screen name="Book" component={BookScreen} />
              <Stack.Screen
                name="DetailedPrice"
                component={DetailPriceScreen}
              />
              <Stack.Screen name="Payment" component={PaymentScreen} />
              <Stack.Screen name="Booking" component={BookingScreen} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
              <Stack.Screen name="ProfileCom" component={ProfileScreen} />
              <Stack.Screen name="Setting" component={SettingScreen} />
            </>
          </Stack.Navigator>
        </>
        <Modal statusBarTranslucent visible={isLoading} transparent>
          <Loader />
        </Modal>
      </NavigationContainer>
    </AppWrapper>
  );
};

export default MainNavigator;
