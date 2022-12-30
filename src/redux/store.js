import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/users-slice';
import { filterReducer } from './filter/filter-slice';
import authReducer from 'redux/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistRed = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
    auth: persistRed,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
