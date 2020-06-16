import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from '../services/AuthService';
import { useHistory } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';

const PrivateRoute = ({ component, ...options }) => {
  const history = useHistory();
  const { user } = useAuth();
  if (!user) {
    history.push('/');
    return <Route {...options} component={AuthPage} />;
  } else {
    return <Route {...options} component={component} />;
  }
};
export default PrivateRoute;
