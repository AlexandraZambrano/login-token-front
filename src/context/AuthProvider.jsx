import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  // Function to update the state when a user logs in
  const login = (role) => {
    setLoggedIn(true);
    setUserRole(role);
  };

  // Function to update the state when a user logs out
  const logout = () => {
    setLoggedIn(false);
    setUserRole('');
  };

  console.log('I have no idea')

  return (
    <AuthContext.Provider value={{ loggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;