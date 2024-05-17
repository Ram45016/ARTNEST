// UserContext.js

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const login = () => {
    // Implement your login logic here
    setIsUserLoggedIn(true);
  };

  const logout = () => {
    // Implement your logout logic here
    setIsUserLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isUserLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
