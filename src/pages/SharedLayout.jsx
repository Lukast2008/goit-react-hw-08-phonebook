import React from 'react';
import AppBar from 'components/AppBar';
import { tokenSelector } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  const token = useSelector(tokenSelector);
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
