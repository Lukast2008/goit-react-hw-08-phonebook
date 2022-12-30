import React from 'react';
import { logout } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export default function AuthMenu() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(logout())}>LogOut</button>;
}
