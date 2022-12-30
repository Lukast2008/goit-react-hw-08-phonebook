import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/users-operations';

export default function AddUserForm({ closeForm }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
    setName('');
    setEmail('');
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        type="text"
        name="name"
        onChange={e => setName(e.target.value)}
      />
      <input
        value={email}
        type="text"
        name="email"
        onChange={e => setEmail(e.target.value)}
      />
      <button>Add User</button>
    </form>
  );
}
