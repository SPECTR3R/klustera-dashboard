import React from 'react';

import { useColorMode, IconButton, Box } from '@chakra-ui/core';

const IconContainer = ({ icoDay, icoNigth = icoDay, fcn, link, tooltip }) => {
  const { colorMode } = useColorMode();

  return (
    <Box display="inline">
      <IconButton
        as={colorMode === 'light' ? icoDay : icoNigth}
        bg="none"
        w={30}
        h={30}
        />
    </Box>
  );
};

export default IconContainer;
