import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  message: '',
};

export const getMessage = createAsyncThunk('message/getMessage', async () => {
  try {
    const response = await fetch('/api/v1/greetings/random');
    const data = await response.json();
    console.log(data);
    return data.greeting;
  } catch (error) {
    return error.message;
  }
});

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.fulfilled, (state, action) => {
        state.error = null;
        state.message = action.payload;
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
