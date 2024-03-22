import {Dimensions, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import {Colors} from '../utils/Colors';
import {FontSize} from '../utils/FontSize';
import fonts from '../assets/fonts';
import YachtScreen from '../screens/Yanchts/YachtScreen';
import MessageScreen from '../screens/Messages/MessageScreen';
import BookingScreen from '../screens/Bookings/BookingScreen';
import Profile from '../screens/profile';
import YachtStack from './YachtStack';
import DashboardStack from './DashboardStack';
import SettingStack from './SettingStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const tabBarHeight = Dimensions.get('window').height * 0.08; // Adjust the multiplier as needed

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: Colors.mainBlue,
        tabBarInactiveTintColor: '#AFAFB4',
        tabBarStyle: [
          {
            borderTopWidth: 1,
            elevation: 4,
            backgroundColor: '#FFFFFF',
            shadowRadius: 5,
            shadowColor: '#000000',
            shadowOpacity: 0.1,
            position: 'absolute',
            ...Platform.select({
              android: {
                height: 45,
              },
              ios: {
                height: 85,
              },
            }),
            //height: tabBarHeight,
          },
        ],
        tabBarLabelStyle: {
          fontSize: FontSize.vtiny,
          fontFamily: fonts.regularInter,
          color: Colors.black,
          opacity: 0.7,
          // marginTop: 2,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/dashboardIcon.png')
                  : require('../assets/images/dashboardIcon.png')
              }
              style={{
                width: 23,
                height: 23,
                resizeMode: 'contain',
                //    tintColor: focused ? 'black' : '#003580',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/messageIcon.png')
                  : require('../assets/images/messageIcon.png')
              }
              style={{
                width: 23,
                height: 23,
                resizeMode: 'contain',
                //  tintColor: focused ? 'black' : '#003580',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add yacht"
        component={YachtStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/yachtAdd.png')
                  : require('../assets/images/yachtAdd.png')
              }
              style={{
                height: 52,
                width: 70,
                resizeMode: 'contain',
                alignSelf: 'center',
                bottom: 15,
                marginTop: 10, // Space from the top of the icon
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/BookingIcon.png')
                  : require('../assets/images/BookingIcon.png')
              }
              style={{
                width: 23,
                height: 23,
                resizeMode: 'contain',
                // tintColor: focused ? 'black' : '#003580',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/settingIcon.png')
                  : require('../assets/images/settingIcon.png')
              }
              style={{
                width: 23,
                height: 23,
                resizeMode: 'contain',
                //  tintColor: focused ? 'black' : '#003580',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
