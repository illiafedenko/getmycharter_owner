import {configureStore} from '@reduxjs/toolkit';
import userInfoSlice from './Profile/userInfoSlice';
import General from './General';
import bankDetailsSlice from './BankDetails/bankDetailsSlice';

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    general: General,
    bankDetails: bankDetailsSlice,
  },
});

export default store;
