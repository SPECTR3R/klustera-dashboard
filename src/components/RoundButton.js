import React from 'react';

import { useColorMode, IconButton, Box, Tooltip } from '@chakra-ui/core';

const RoundButton = ({ icoDay, icoNigth = icoDay, fcn, link, tooltip }) => {
  const { colorMode } = useColorMode();

  return (
    <Tooltip hasArrow label={tooltip} placement="bottom">
      <Box display="inline">
        <IconButton
          rounded="full"
          onClick={fcn}
          as={colorMode === 'light' ? icoDay : icoNigth}
          bg={colorMode === 'light' ? 'white' : 'gray.800'}
          _hover={{ bg: `${colorMode === 'light' ? 'gray.200' : 'gray.700'}` }}
          w={50}
          h={50}
          p={2}
          mx={'5px'}
        />
      </Box>
    </Tooltip>
  );
};

export default RoundButton;
