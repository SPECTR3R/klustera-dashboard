import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Flex } from '@chakra-ui/core';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

const Routes = () => (
  <Flex direction="column" align="center" justify="space-between" minHeight=" 100vh" m={0}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact component={AuthPage} path="/" />
        <PrivateRoute exact component={MainPage} path="/mainPage" />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Flex>
);
export default Routes;
