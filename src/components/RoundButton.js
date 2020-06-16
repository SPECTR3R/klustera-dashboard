import React from 'react';

import { useColorMode, IconButton, Box, Tooltip } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const RoundButton = ({ icoDay, icoNigth = icoDay, fcn, link, tooltip }) => {
  const { colorMode } = useColorMode();

  return (
    <Tooltip hasArrow label={tooltip} placement="bottom">
      <Box as={Link} to={link}>
        <IconButton
          rounded="full"
          onClick={fcn}
          as={colorMode === 'light' ? icoDay : icoNigth}
          bg={colorMode === 'light' ? 'white' : 'gray.800'}
          _hover={{ bg: `${colorMode === 'light' ? 'gray.200' : 'gray.700'}` }}
          w={35}
          p={3}
          m={'2px'}
        />
      </Box>
    </Tooltip>
  );
};

export default RoundButton;
