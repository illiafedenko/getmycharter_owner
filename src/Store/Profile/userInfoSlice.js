import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  ownerDetails: null,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    resetUserInfo: state => {
      state.data = null;
    },

    setOwnerDetails: (state, action) => {
      state.ownerDetails = action.payload;
    },
    resetOwnerDetails: state => {
      state.data = null;
    },
  },
});

export const {setUserInfo, resetUserInfo, setOwnerDetails, resetOwnerDetails} =
  userInfoSlice.actions;
export const selectUserInfo = state => state.userInfo.userInfo;
export const selectOwnerDetails = state => state.userInfo.ownerDetails;

export default userInfoSlice.reducer;
