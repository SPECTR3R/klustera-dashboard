import React from 'react';
import { Flex } from '@chakra-ui/core';
import KPIsCard from '../components/KPIsCard';

const KPIsContainer = ({ data }) => {
  //const { kpis } = data;
  return (
    <Flex
      w={['90%', '90%', '80%', '992px']}
      p={3}
      boxShadow="2px 2px 2px 2px rgba(0,0,0,0.3)"
      rounded="lg"
      align="center"
      justify="space-around"
      fontFamily="Quicksand"
      color="gray.500"
      wrap="wrap"
      fontSize="sm"
    >
      <KPIsCard />
    </Flex>
  );
};

export default KPIsContainer;
