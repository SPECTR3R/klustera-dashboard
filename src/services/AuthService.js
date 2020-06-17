import React, { useState, useContext, createContext } from 'react';

import handleAsync from '../services/handleAsync';
import axios from 'axios';

const baseURL = 'https://voldemort.klustera.com';
const service = axios.create({ baseURL });

const authContext = createContext();
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

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
