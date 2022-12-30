import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'redux/users/users-selectors';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from 'redux/users/users-operations';
import { useState } from 'react';
import UpdateUserForm from './UpdateUserForm';
import { getFilter } from 'redux/filter/filter-selectors';
import { selectFilteredContacts } from 'redux/users/users-selectors';

export default function UsersList() {
  const users = useSelector(usersSelector);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log('users', users);
  const dispatch = useDispatch();

  const openUpdateForm = id => {
    const user = users.find(user => user.id === id);
    setSelectedUser(user);
  };
  console.log('users in component', users);

  const filter = useSelector(getFilter);
  const filteredContacts = users.filter(user =>
    user.name.toLowerCase().includes(filter)
  );
  console.log('users in component userlist', users);
  console.log('filter', filter);
  console.log('filteredContacts', filteredContacts);

  const memoizedContacts = useSelector(selectFilteredContacts);
  console.log('memoizedContacts', memoizedContacts);

  return (
    <ul>
      {memoizedContacts &&
        memoizedContacts.map(user => (
          <li key={user.id}>
            {user.name} {user.email}
            <button type="button" onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
            <button type="button" onClick={() => openUpdateForm(user.id)}>
              Update user
            </button>
            {selectedUser && selectedUser.id === user.id && (
              <UpdateUserForm
                closeUpdateForm={() => setSelectedUser(null)}
                selectedUser={selectedUser}
              />
            )}
          </li>
        ))}
    </ul>
  );
}
