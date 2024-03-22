import React from 'react';
import {View, Platform, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {hp} from '../../utils/Dimensions';
interface Props {
  children: any;
}

const AppWrapper = ({children}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        //paddingTop: Platform.OS === 'ios' ? hp(3) : hp(0),
        //  paddingBottom: Platform.OS === 'ios' ? 0 : 10, // Adjust as needed
        //   backgroundColor: 'red', // Set your desired background color
      }}>
      {/* <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{flexGrow: 1}}> */}
      {children}
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default AppWrapper;
