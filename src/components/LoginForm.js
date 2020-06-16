import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../services/AuthService';

import {
  Input,
  Stack,
  Text,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
} from '@chakra-ui/core';

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  const auth = useAuth();
  const history = useHistory();
  const [errMsg, setErrMsg] = useState('');

  const onSubmit = async credentials => {
    const response = await auth.login(credentials);
    if (typeof response === 'string') {
      setErrMsg(response);
    } else {
      history.push('/mainPage');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="question" />} />
            <Input
              name="username"
              type="text"
              placeholder="username"
              aria-label="username"
              ref={register()}
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="lock" />} />
            <Input
              name="password"
              type="password"
              placeholder="password"
              aria-label="password"
              ref={register()}
            />
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="sm"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          Get access
        </Button>
        <Text textAlign="center" color="red.600">
          {errMsg}
        </Text>
      </Stack>
    </form>
  );
};

export default LoginForm;
