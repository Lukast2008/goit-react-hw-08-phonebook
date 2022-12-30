import React from 'react';
import AuthMenu from './AuthMenu';
import AuthNavigation from './AuthNavigation';
import { tokenSelector } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';

export default function AppBar() {
  const token = useSelector(tokenSelector);
  console.log('token', token);

  return (
    <header>
      <Navigation />
      {token ? <AuthMenu /> : <AuthNavigation />}
    </header>
  );
}
