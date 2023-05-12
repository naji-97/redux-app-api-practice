import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('fetchUser', async (_, thunkAPI) => {
 const { rejectWithValue  } = thunkAPI;
 try {
  const res = await axios.get('https://randomuser.me/api/?results=5')
  console.log(res.data);
  return res.data.results;
 } catch (error) {
  return rejectWithValue(error);
 }
}
)

const usersSlice = createSlice({
 name: 'users',
 initialState: {
  users: [
  ],
  isLoading: false,
  error: null
 },
 extraReducers: (builder) => {
  builder
   .addCase(fetchUser.pending, (state) => {
    state.isLoading = true;
   })
   .addCase(fetchUser.fulfilled, (state, action) => {
    state.isLoading = false;
    state.users = action.payload;
    console.log(state.users);
   })
   .addCase(fetchUser.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
   })


 }
}
)


export const usersReducer = usersSlice.reducer;
export default usersSlice.reducer;
