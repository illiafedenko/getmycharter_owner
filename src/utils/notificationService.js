import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';

// import PushNotification from 'react-native-push-notification'
let token = null;

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
}

async function getFCMToken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('old fcm Token==========>>>>>>>>>', fcmToken);
  if (!fcmToken) {
    try {
      let fcmToken = await messaging().getToken();
      token = fcmToken;
      if (fcmToken != null) {
        console.log('new FCMToken=========>>>>>>>', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log('fcmToken generation error=======', error);
    }
  } else {
    token = fcmToken;
  }
}

export const NotificationListner = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
  messaging().onMessage(async remoteMessage => {
    console.log('notification on foregound state...,', remoteMessage);
  });

  notifee.onForegroundEvent(({type, detail}) => {
    console.log('onForegroundEvent```', detail, type);
    switch (type) {
      case EventType.PRESS:
        console.log('onforeground------------------->', detail);
        break;
    }
  });
};
export {token};
