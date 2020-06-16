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
    const response = await auth.login(credentials);

    if (response.err) {
      console.log(response.err.message + 'joli');
    } else {
      console.log(response);
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
      </Stack>
    </form>
  );
};

export default LoginForm;
