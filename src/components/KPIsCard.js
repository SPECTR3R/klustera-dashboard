import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
import IconContainer from '../components/IconContainer';

const KPIsCard = ({ cardInfo }) => {
  const [cardTitle, cardIcon, cardValue] = cardInfo;
  return (
    <Flex
      boxShadow="2px 2px 2px 2px rgba(0,0,0,0.3)"
      rounded="lg"
      justify=" space-around"
      align="center"
      w="200px"
      py={3}
      m={4}
    >
      <IconContainer icoDay={cardIcon} />
      <Flex direction="column" justify="center" aling="flex-end">
        <Text display="inline" as="h4" fontSize="md" textAlign="right" fontFamily="Quicksand">
          {cardTitle}
        </Text>
        <Text as="p" fontSize="2xl" textAlign="right" fontFamily="Quicksand">
          {cardValue}
        </Text>
      </Flex>
    </Flex>
  );
};

export default KPIsCard;
