import React from 'react';
import { Flex } from '@chakra-ui/core';
import RenderKPIs from '../components/RenderKPIs';

const KPIsContainer = ({ data }) => {
  const { kpis } = data;

  return (
    <Flex
      w={['90%', '90%', '80%', '992px']}
      p={3}
      align="center"
      align-content="space-around"
      justify="space-around"
      wrap="wrap"
      fontFamily="Quicksand"
      color="gray.500"
      fontSize="sm"
    >
      {RenderKPIs(kpis)}
    </Flex>
  );
};

export default KPIsContainer;


