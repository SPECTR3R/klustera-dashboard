import React from 'react';
import { Flex } from '@chakra-ui/core';
import RenderKPIs from '../components/RenderKPIs';

const KPIsContainer = ({ data }) => {
  const { kpis } = data;
  console.log(kpis);

  return (
    <Flex
      w={['90%', '90%', '80%', '992px']}
      p={3}
      boxShadow="2px 2px 2px 2px rgba(0,0,0,0.3)"
      rounded="lg"
      align="center"
      align-content="space-around"
      justify="space-around"
      wrap="wrap"
      fontFamily="Quicksand"
      color="gray.500"
      fontSize="sm"
      my={4}
    >
      {RenderKPIs(kpis)}
    </Flex>
  );
};

export default KPIsContainer;
