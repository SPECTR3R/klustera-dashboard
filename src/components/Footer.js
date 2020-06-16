import React from 'react';

import { Flex, Text, Divider, useColorMode } from '@chakra-ui/core';

const Footer = () => {
  return (
    <>
      <Flex
        pos="fixed"
        bottom="0"
        m={0}
        w={['90%', '90%', '80%', '992px']}
        h="65px"
        align="center"
        justify="center"
        borderTop="solid 1px"
        borderColor="gray.200"

      >
        <Text>2020 SPECTRER-B</Text>
      </Flex>
    </>
  );
};

export default Footer;
