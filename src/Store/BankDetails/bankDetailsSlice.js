import {createSlice} from '@reduxjs/toolkit';

const bankDetailsSlice = createSlice({
  name: 'bankDetails',
  initialState: {
    data: null,
  },
  reducers: {
    setBankDetails: (state, action) => {
      state.data = action.payload;
    },
    resetBankDetails: state => {
      state.data = null;
    },
  },
});

export const {setBankDetails, resetBankDetails} = bankDetailsSlice.actions;
export const selectBankInfo = state => state.bankDetails.data;

export default bankDetailsSlice.reducer;
