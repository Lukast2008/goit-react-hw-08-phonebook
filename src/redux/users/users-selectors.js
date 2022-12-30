import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from 'redux/filter/filter-selectors';

export const usersSelector = state => state.users.users;
export const errorSelector = state => state.users.error;
export const loadingSelector = state => state.users.isLoading;

export const selectFilteredContacts = createSelector(
  [getFilter, usersSelector],
  (filter, users) => {
    return users.filter(user => user.name.toLowerCase().includes(filter));
  }
);
