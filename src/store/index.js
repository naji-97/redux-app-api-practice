import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/userSlice';

const store = configureStore({
 reducer:{
  user:usersReducer,
 }
})

export default store