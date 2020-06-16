import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../services/AuthService';

import {
  Input,
  Stack,
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

  const onSubmit = async credentials => {
    console.log(credentials);
    const response = await auth.login(credentials);
    if (response.err) {
      console.log(response.err.message);
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
              name="Username"
              type="text"
              placeholder="Username"
              aria-label="Username"
              ref={register()}
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="lock" />} />
            <Input
              name="Password"
              type="password"
              placeholder="Password"
              aria-label="Password"
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
      </Stack>
    </form>
  );
};

export default LoginForm;
