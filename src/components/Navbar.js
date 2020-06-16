import React from 'react';

import { Flex, useColorMode, Box, Divider } from '@chakra-ui/core';

import { useLocation } from 'react-router-dom';
import { GiExitDoor } from 'react-icons/gi';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import LogoKlustera from '../components/LogoKlustera';

import RoundButton from '../components/RoundButton';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  return (
    <>
      <Flex w={['90%', '90%', '80%', '992px']} height="50px" align="center" justify="space-between">
        <a href="https://klustera.com/" target="blank">
          <LogoKlustera color={colorMode === 'light' ? '#1a202c' : 'white'} />
        </a>
        <Box>
          {location.pathname !== '/' && (
            <RoundButton tooltip="logout" icoDay={GiExitDoor} link="/" />
          )}
          <RoundButton
            tooltip="Toggle color"
            icoDay={IoMdMoon}
            icoNigth={IoMdSunny}
            fcn={toggleColorMode}
          />
        </Box>
      </Flex>
      <Divider
        m={0}
        p={0}
        orientation="horizontal"
        w={['90%', '90%', '80%', '992px']}
        borderColor="gray.200"
      />
    </>
  );
};

export default Navbar;
