import React from 'react';
import { useForm } from 'react-hook-form';

import { Input, Flex, FormLabel, Box, InputGroup, Button, FormControl } from '@chakra-ui/core';

const ApiRequestForm = ({ submitFcn }) => {
  const { handleSubmit, register } = useForm();

  return (
    <Flex
      w={['90%', '90%', '80%', '992px']}
      onSubmit={handleSubmit(submitFcn)}
      as="form"
      p={3}
      my={4}

      boxShadow="2px 2px 2px 2px rgba(0,0,0,0.3)"
      rounded="lg"
      align="center"
      fontFamily="Quicksand"
      color="gray.500"
      wrap="wrap"
      fontSize="sm"
    >
      <Box m={5}>
        <FormLabel htmlFor="startDate">&nbsp;Start date</FormLabel>
        <FormControl isRequired>
          <InputGroup>
            <Input w="180px" name="startDate" type="date" aria-label="startDate" ref={register()} />
          </InputGroup>
        </FormControl>
      </Box>

      <Box m={5}>
        <FormLabel htmlFor="endDate">&nbsp; End date</FormLabel>
        <FormControl isRequired>
          <InputGroup>
            <Input w="180px" name="endDate" type="date" aria-label="endDate" ref={register()} />
          </InputGroup>
        </FormControl>
      </Box>

      <Box m={5}>
        <FormLabel htmlFor="startHour">&nbsp;Start hour</FormLabel>
        <FormControl isRequired>
          <InputGroup>
            <Input
              placeholder="0"
              max={23}
              min={0}
              w="90px"
              name="startHour"
              type="number"
              aria-label="startHour"
              ref={register()}
            />
          </InputGroup>
        </FormControl>
      </Box>

      <Box m={5}>
        <FormLabel htmlFor="endHour">&nbsp;Start hour</FormLabel>
        <FormControl isRequired>
          <InputGroup>
            <Input
              placeholder="23"
              max={23}
              min={0}
              w="90px"
              name="endHour"
              type="number"
              aria-label="endHour"
              ref={register()}
            />
          </InputGroup>
        </FormControl>
      </Box>

      <Button
        type="submit"
        boxShadow="sm"
        m={5}
        _hover={{ boxShadow: 'md' }}
        _active={{ boxShadow: 'lg' }}
      >
        Refresh
      </Button>
    </Flex>
  );
};

export default ApiRequestForm;
