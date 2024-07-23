import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import api from './api';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const setToken = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        localStorage.setItem('authToken', token);
        console.log('Token set in localStorage:', token);
      } else {
        localStorage.removeItem('authToken');
      }
    };
    setToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
