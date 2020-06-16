import React, { useState, useContext, createContext } from 'react';

import handleAsync from '../services/handleAsync';

//Axios config
import axios from 'axios';
const baseURL = 'https://voldemort.klustera.com';
const service = axios.create({ baseURL });

// Create auth context
const authContext = createContext();
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [token, setToken] = useState(null);
  const login = async credentials => {
    const response = await handleAsync(() => service.get('/login', { auth: credentials }));
    setToken(response.token);
    return response;
  };

  const logout = async credentials => {
    setToken(null);
  };

  return {
    token,
    login,
    logout,
  };
}
