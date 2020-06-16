import React from 'react';

import { Flex, Text, Divider, useColorMode } from '@chakra-ui/core';

const Footer = () => {
  return (
    <>
      <Divider
        m={0}
        p={0}
        orientation="horizontal"
        w={['90%', '90%', '80%', '992px']}
        borderColor="gray.200"
      />
      <Flex m={0} w={['90%', '90%', '80%', '992px']} h="85px" align="center" justify="center">
        <Text textAlign="center">2020 SPECTRER-B</Text>
      </Flex>
    </>
  );
};

export default Footer;
