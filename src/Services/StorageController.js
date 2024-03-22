import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useOwnStorage = () => {
  const saveLoginPref = async (token, email, password) => {
    //console.log('getting this',token,username,password)
    try {
      await AsyncStorage.setItem('AccessToken', token);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);

      console.log('token saved');
    } catch (error) {
      console.log('error', error);
    }
  };

  const setValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('item saved');
      return true;
    } catch (error) {
      console.log('error:', error);
      return error;
    }
  };

  const getValue = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log('token_ingerlogin:', value);
      if (value !== null) {
        return value;
      } else {
        return undefined;
      }
    } catch (e) {
      console.log('error', e);
      return null;
    }
  };

  const removeItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {}
  };

  const updateToken = async token => {
    try {
      await AsyncStorage.setItem('apiToken', token);
      console.log('Token Updated');
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateUserID = async userID => {
    try {
      await AsyncStorage.setItem('user_id', userID.toString());
      console.log('user_id Updated');
    } catch (error) {
      console.log('error', error);
    }
  };

  const getLoginPref = async () => {
    try {
      const token = await AsyncStorage.getItem('apiToken');
      console.log('token_ingerlogin:', token);
      if (token !== null) {
        return token;
      } else {
        return undefined;
      }
    } catch (e) {
      console.log('error', e);
      return null;
    }
  };

  const saveGoogleAuthData = async (googleToken, googleUserData) => {
    try {
      await AsyncStorage.setItem('GoogleToken', googleToken);
      await AsyncStorage.setItem(
        'GoogleUserData',
        JSON.stringify(googleUserData),
      );

      console.log('Google authentication data saved');
    } catch (error) {
      console.log('Error saving Google authentication data:', error);
    }
  };

  const getGoogleAuthData = async () => {
    try {
      const googleToken = await AsyncStorage.getItem('GoogleToken');
      const googleUserData = await AsyncStorage.getItem('GoogleUserData');

      if (googleToken && googleUserData) {
        return {
          token: googleToken,
          userData: JSON.parse(googleUserData),
        };
      } else {
        return null;
      }
    } catch (error) {
      console.log('Error retrieving Google authentication data:', error);
      return null;
    }
  };
  const saveAppleAuthData = async (appleToken, nonce) => {
    try {
      await AsyncStorage.setItem('AppleToken', appleToken);
      await AsyncStorage.setItem('AppleNonce', nonce);
      console.log('Apple authentication data saved');
    } catch (error) {
      console.log('Error saving Apple authentication data:', error);
    }
  };

  const getAppleAuthData = async () => {
    try {
      const appleToken = await AsyncStorage.getItem('AppleToken');
      const nonce = await AsyncStorage.getItem('AppleNonce');

      if (appleToken && nonce) {
        return {
          token: appleToken,
          nonce: nonce,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.log('Error retrieving Apple authentication data:', error);
      return null;
    }
  };

  const isUserLoggedInWithGoogle = async () => {
    try {
      const googleToken = await AsyncStorage.getItem('GoogleToken');
      return !!googleToken; // Returns true if GoogleToken exists, else false
    } catch (error) {
      console.log('Error checking Google login:', error);
      return false;
    }
  };

  const isUserLoggedInWithApple = async () => {
    try {
      const appleToken = await AsyncStorage.getItem('AppleToken');
      return !!appleToken; // Returns true if AppleToken exists, else false
    } catch (error) {
      console.log('Error checking Apple login:', error);
      return false;
    }
  };

  const getEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      if (email !== null) {
        return email;
      } else {
        return undefined;
      }
    } catch (error) {
      return null;
    }
  };

  const getPassword = async () => {
    try {
      const password = await AsyncStorage.getItem('password');
      if (password !== null) {
        return password;
      } else {
        return undefined;
      }
    } catch (error) {
      return null;
    }
  };

  const logout = async (isLoggedInWithGoogle, isLoggedInWithApple) => {
    try {
      if (isLoggedInWithGoogle) {
        console.log('logged out from Google');
        await GoogleSignin.revokeAccess(); // Revoke access from Google
        await GoogleSignin.signOut(); // Sign the user out from Google
        // Clear any Google authentication data stored locally
        await AsyncStorage.removeItem('GoogleToken');
      } else if (isLoggedInWithApple) {
        console.log('logged out from Apple');
        // Clear any Apple authentication data stored locally
        await AsyncStorage.removeItem('AppleToken');
        await AsyncStorage.removeItem('AppleNonce');
      } else {
        console.log('logout from email, password');
        await AsyncStorage.removeItem('AccessToken');
        await AsyncStorage.removeItem('apiToken');
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('password');
      }

      console.log('Logout successful');
      await AsyncStorage.removeItem('fcmToken');

      return true;
    } catch (error) {
      console.log('Error during logout:', error);
      return false;
    }
  };

  return {
    saveLoginPref,
    setValue,
    getValue,
    removeItem,
    updateToken,
    updateUserID,
    getLoginPref,
    saveGoogleAuthData,
    getGoogleAuthData,
    saveAppleAuthData,
    getAppleAuthData,
    getEmail,
    getPassword,
    logout,
    isUserLoggedInWithGoogle,
    isUserLoggedInWithApple,
  };
};

export default useOwnStorage;
