import React from 'react';
import { useState } from 'react';
import Button from 'components/Button';
import UsersList from 'components/UsersList';
import { fetchUsers } from 'redux/users/users-operations';
import AddUserForm from 'components/AddUserForm';
import FilterUsers from 'components/FilterUsers';
import { useDispatch } from 'react-redux';

export default function UsersPage() {
  const dispatch = useDispatch();

  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);

  const showUsers = () => {
    setIsListShown(true);
    dispatch(fetchUsers());
  };

  const showForm = () => {
    setIsFormShown(true);
  };

  const closeForm = () => {
    setIsFormShown(false);
  };

  return (
    <div>
      {!isListShown ? (
        <Button text="Show users" clickHandler={showUsers} />
      ) : (
        <>
          <FilterUsers />
          <UsersList />
          {isFormShown ? (
            <AddUserForm closeForm={closeForm} />
          ) : (
            <Button text="Add User" clickHandler={showForm} />
          )}
        </>
      )}
    </div>
  );
}
