// DashboardStack.js

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YachtScreen from '../screens/Yanchts/YachtScreen';
import AddYacht from '../screens/AddYacht/AddYacht';
import Addphotos from '../screens/AddPhotos/Addphotos';
import Pricing from '../screens/Pricing/Pricing';
import CacellationPolicy from '../screens/CancellationPolicy/CancellationPolicy';
import CancellationPolicy from '../screens/CancellationPolicy/CancellationPolicy';
import Equipment from '../screens/Equipment/Equipment';
import HomeScreen from '../screens/Home/HomeScreen';
import ManageListings from '../screens/ManageListings/ManageListings';
import ManageCalendar from '../screens/ManageCalendar/ManageListings';
import EditCalendar from '../screens/Yanchts/EditCalendar';

const Stack = createNativeStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ManageListings"
      component={ManageListings}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ManageCalendar"
      component={ManageCalendar}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="EditCalendar"
      component={EditCalendar}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default DashboardStack;
