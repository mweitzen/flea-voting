import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'text/plain';

export const submitEmail = createAsyncThunk(
  'marketing/submitEmail',
  async (email, thunkApi) => {
    const response = await axios.post('https://script.google.com/macros/s/AKfycbyykLEzIWb6n-fGzxmDgNpu-b7yimPOsNSY1vvt8eZsynkiyADn/exec', JSON.stringify({ route: 'marketing', payload: {email} }))

    return response.data
  }
)

export const marketingSlice = createSlice({
  name: 'marketing',
  initialState: {
    email: null
  },
  extraReducers: {
    [submitEmail.fulfilled]: (state, action) => {
      state.email = action.payload.email
    }
  }
})

export default marketingSlice.reducer;
