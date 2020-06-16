import React from 'react';
import LoginForm from '../components/LoginForm';
import Turtle from '../components/Turtle';

import { Flex } from '@chakra-ui/core';

const AuthPage = () => {
  return (
    <Flex h="300px" w={['90%', '90%', '80%', '992px']} justify="space-around" align="center">
      <Turtle size="200px"></Turtle>
      <LoginForm></LoginForm>
    </Flex>
  );
};

export default AuthPage;
