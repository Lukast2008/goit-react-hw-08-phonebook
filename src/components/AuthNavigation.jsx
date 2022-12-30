import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
