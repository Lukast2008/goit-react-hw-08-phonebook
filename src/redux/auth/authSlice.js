import { userSingup, login, logout, authRefresh } from './authOperations';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  token: null,
  user: {
    name: '',
    email: '',
  },
  isFetchingCurrentUser: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  extraReducers: {
    [userSingup.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [userSingup.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [userSingup.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.isLoading = false;
      state.token = null;
    },
    [logout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authRefresh.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authRefresh.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.isFetchingCurrentUser = false;
    },
    [authRefresh.rejected](state, action) {
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
