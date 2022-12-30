import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userSingup = createAsyncThunk(
  'users/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', userData);
      token.set(data.token);
      return data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (usersData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', usersData);
      token.set(data.token);
      return data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      token.unset();
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const authRefresh = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.token;
    if (!tokenLS) {
      rejectWithValue();
      return;
    }
    token.set(tokenLS);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);
