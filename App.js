import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import MainNavigator from './src/navigation/MainNavigation';
import {AuthProvider} from './src/AuthProvider';
import store from './src/Store/store';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  requestUserPermission,
  NotificationListner,
} from './src/utils/notificationService';

const App = () => {
  const checkApplicationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      } catch (error) {
        console.log('erroe', error);
      }
    }
  };
  useEffect(() => {
    NotificationListner();
    requestUserPermission();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
    View.defaultProps = View.defaultProps || {};
    View.defaultProps.allowFontScaling = false;
    checkApplicationPermission();
  }, []);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1015371492244-fb0umldr8aj8lh7o230atshp8t4gjg95.apps.googleusercontent.com',
    });
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <AuthProvider>
          <SafeAreaProvider>
            <MainNavigator />
          </SafeAreaProvider>
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
