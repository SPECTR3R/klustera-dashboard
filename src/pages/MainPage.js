import React from 'react';

import ApiRequestForm from '../components/ApiRequestForm';
import { Flex } from '@chakra-ui/core';
import { GET_KPIS, FETCH_DAILY_FOOTPRINT } from '../services/ApiService';

import { useAuth } from '../services/AuthService';

const MainPage = () => {
  const { token } = useAuth();

  const onSubmit = async queryData => {
    queryData.token = token;
    const kpis = await GET_KPIS(queryData);
    console.log(kpis);
    const dailyFootprint = await FETCH_DAILY_FOOTPRINT(queryData);
    console.log(dailyFootprint);
  };

  return (
    <Flex align="center" justify="center" direction="column">
      <ApiRequestForm submitFcn={onSubmit} />
    </Flex>
  );
};

export default MainPage;
