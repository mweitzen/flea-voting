import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'

export const getVideoInfo = createAsyncThunk(
  'videos/getVideoInfo',
  async () => {
    const response = await axios.get('https://script.google.com/macros/s/AKfycbyykLEzIWb6n-fGzxmDgNpu-b7yimPOsNSY1vvt8eZsynkiyADn/exec?route=videos')

    return response.data
  }
)

export const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    data: []
  },
  extraReducers: {
    [getVideoInfo.fulfilled]: (state, action) => {
      state.data = action.payload.videos
    }
  }
})

export default videoSlice.reducer;
