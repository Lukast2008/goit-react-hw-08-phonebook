import React from 'react';
import { useState } from 'react';
import { userSingup } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export default function SignUp() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userSingup({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>

      <button>Sign Up</button>
    </form>
  );
}
