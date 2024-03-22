// SettingStack.js

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YachtScreen from '../screens/Yanchts/YachtScreen';
import AddYacht from '../screens/AddYacht/AddYacht';
import Addphotos from '../screens/AddPhotos/Addphotos';
import Pricing from '../screens/Pricing/Pricing';
import CacellationPolicy from '../screens/CancellationPolicy/CancellationPolicy';
import CancellationPolicy from '../screens/CancellationPolicy/CancellationPolicy';
import Equipment from '../screens/Equipment/Equipment';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import ManageProfile from '../screens/ManageProfile/ManageProfile';
import PersonalInformation from '../screens/PersonalInformation/PersonalInformation';
import BoatingInformation from '../screens/BoatingInformation/BoatingInformation';
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen';
import ChangePassword from '../screens/ChangePassword/ChangePassword';
import HelpScreen from '../screens/HelpScreen/HelpScreen';
import ManageListings from '../screens/ManageListings/ManageListings';

const Stack = createNativeStackNavigator();

const SettingStack = () => (
  <Stack.Navigator initialRouteName="SettingScreen">
    <Stack.Screen
      name="SettingScreen"
      component={SettingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ManageProfile"
      component={ManageProfile}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="PersonalInformation"
      component={PersonalInformation}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="BoatingInformation"
      component={BoatingInformation}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="PaymentScreen"
      component={PaymentScreen}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="HelpScreen"
      component={HelpScreen}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="ManageListings"
      component={ManageListings}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default SettingStack;
