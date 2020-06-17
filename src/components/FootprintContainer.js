import React from 'react';

import { Flex } from '@chakra-ui/core';
import { Bar } from 'react-chartjs-2';
import { genGraphData, graphOptions } from '../services/GraphService';

const FootprintContainer = ({ data }) => {
  const { visitors_daily: visitorsDaily } = data.results;

  const graphData = genGraphData(visitorsDaily);

  return (
    <Flex
      w={['90%', '90%', '80%', '992px']}
      h='400px'
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
      mt={4}
      mb={'30px'}

    >
      <Bar data={graphData} options={graphOptions} />
    </Flex>
  );
};

export default FootprintContainer;

//<Bar data={this.state?.data} options={options} />
