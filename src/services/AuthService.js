import React, { useState, useContext, createContext } from 'react';

import handleAsync from '../services/handleAsync';

//Axios config
import axios from 'axios';
const baseURL = 'https://voldemort.klustera.com';
const service = axios.create({
  baseURL,
  withCredentials: true,
});

const authContext = createContext();

// Context provider component
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
  const [user, setUser] = useState(null);

  const login = async credentials => {
    console.log(credentials);
    const response = await handleAsync(() => service.post('/login', credentials));
    setUser(response.user);
    return response;
  };

  return {
    user,
    login,
  };
}
