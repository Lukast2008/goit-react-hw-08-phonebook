import AppBar from './AppBar';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout';
import Home from 'pages/Home';
import UsersPage from 'pages/UsersPage';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};
