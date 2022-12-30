import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('http://localhost:8080/users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('http://localhost:8080/users', user);
      console.log('data', data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user, { rejectWithValue }) => {
    try {
      await axios.put(`http://localhost:8080/users/${user.id}`, user);

      return user;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
