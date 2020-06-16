import React from 'react';
import LoginForm from '../components/LoginForm';
import Turtle from '../components/Turtle';

import { Flex, Box, Text, useColorMode, Tooltip } from '@chakra-ui/core';

const AuthPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box my={'50px'} w={['90%', '90%', '80%', '992px']}>
      <Text mb={'50px'} fontSize="2xl" fontFamily="Quicksand" fontWeight="bold">
        This is a demo of Klustera's data statistics viewer. Please, provide your credentials in the
        form below.
      </Text>
      <Flex h="100%" justify="space-around" align="center" wrap="wrap">
        <LoginForm mx={'50px'}></LoginForm>
        <Tooltip hasArrow label="Visit developer's site"    placement="top">
          <Box as="a" href="https://adrio.now.sh/" target="_blank">
            <Turtle size="230px" color={colorMode === 'light' ? 'gray.800' : 'white'}></Turtle>
          </Box>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default AuthPage;
