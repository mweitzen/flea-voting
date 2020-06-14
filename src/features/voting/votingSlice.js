import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'text/plain';

export const castVotes = createAsyncThunk(
  'voting/castVotes',
  async (votes, thunkApi) => {
    const response = await axios.post('https://script.google.com/macros/s/AKfycbyykLEzIWb6n-fGzxmDgNpu-b7yimPOsNSY1vvt8eZsynkiyADn/exec', JSON.stringify({ route: 'voting', payload: {votes} }))
    if (!response.data.error) {
      localStorage.setItem('serialsVoter', true)
    }
    return response.data
  }
)

export const votingSlice = createSlice({
  name: 'voting',
  initialState: {
    loading: false,
    data: null
  },
  extraReducers: {
    [castVotes.pending]: (state, action) => {
      state.loading = true
    },
    [castVotes.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [castVotes.rejected]: (state, action) => {
      state.loading = false
      return null
    }
  }
});

export default votingSlice.reducer;
