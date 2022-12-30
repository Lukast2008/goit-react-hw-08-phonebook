import React from 'react';
import { tokenSelector } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const token = useSelector(tokenSelector);
  return <>{token ? children : <Navigate to="/login" />}</>;
}
