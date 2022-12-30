import React from 'react';
import { Link } from 'react-router-dom';
import { tokenSelector } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const token = useSelector(tokenSelector);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {token && (
        <li>
          <Link to="/users">UsersPage</Link>
        </li>
      )}
    </ul>
  );
}
