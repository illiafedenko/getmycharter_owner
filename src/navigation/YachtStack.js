// YachtStack.js

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YachtScreen from '../screens/Yanchts/YachtScreen';
import AddYacht from '../screens/AddYacht/AddYacht';
import Addphotos from '../screens/AddPhotos/Addphotos';
import Pricing from '../screens/Pricing/Pricing';
import CacellationPolicy from '../screens/CancellationPolicy/CancellationPolicy';
import CancellationPolicy from '../screens/CancellationPolicy/CancellationPolicy';
import Equipment from '../screens/Equipment/Equipment';

const Stack = createNativeStackNavigator();

const YachtStack = () => (
  <Stack.Navigator initialRouteName="AddYacht">
    <Stack.Screen
      name="YachtStack"
      component={YachtScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="AddYacht"
      component={AddYacht}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Addphotos"
      component={Addphotos}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="Pricing"
      component={Pricing}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="CancellationPolicy"
      component={CancellationPolicy}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Equipment"
      component={Equipment}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default YachtStack;
