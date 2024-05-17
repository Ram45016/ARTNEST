import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useUser } from '../UserContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { isUserLoggedIn } = useUser();

  return (
    <Route
      {...rest}
      element={isUserLoggedIn ? element : <Navigate to="/login-signup" replace />}
    />
  );
};

export default PrivateRoute;
