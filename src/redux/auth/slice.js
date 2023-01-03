import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action){
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      console.log("pending")
    },
    [register.fulfilled](state, action) {
      console.log(action.payload)
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = false;
      console.log("fulfilled")
    },
    // [register.rejected](state, action) {
      
    //   state.isLoggedIn = false;
    //   console.log("rejected")
    // },




    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;