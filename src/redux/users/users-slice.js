import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUsers,
  deleteUser,
  addUser,
  updateUser,
} from './users-operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    error: null,
    isLoading: false,
  },
  extraReducers: {
    [fetchUsers.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    },
    [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = state.users.filter(({ id }) => id !== action.payload);
    },
    [deleteUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addUser.pending](state) {
      state.isLoading = false;
      state.error = null;
    },
    [addUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = [...state.users, action.payload];
    },
    [addUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateUser.pending](state) {
      state.isLoading = false;
      state.error = null;
    },
    [updateUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log('action.payload', action.payload);
      const index = state.users.findIndex(
        user => user.id === action.payload.id
      );
      state.users[index] = action.payload;
    },
    [addUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
