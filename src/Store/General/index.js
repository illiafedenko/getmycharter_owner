import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'general',
  initialState: {
    appLoading: false,
  },

  reducers: {
    setLoading: (state, action) => {
      state.appLoading = action.payload;
    },
  },
});

export const {setLoading} = slice.actions;

export default slice.reducer;
