import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Main from './pages/Main';

//components
import { Flex } from '@chakra-ui/core';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => (
  <Flex direction="column" align="center" justify="center">
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <PrivateRoute exact component={Main} path="/main" />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Flex>
);
export default Routes;
