import React, { useState } from 'react';

import ApiRequestForm from '../components/ApiRequestForm';
import KPIsContainer from '../components/KPIsContainer';
import FootprintContainer from '../components/FootprintContainer';

import { Flex } from '@chakra-ui/core';
import { GET_KPIS, FETCH_DAILY_FOOTPRINT } from '../services/ApiService';
import { useAuth } from '../services/AuthService';

const MainPage = () => {
  const { token } = useAuth();
  const [kpis, setKpis] = useState(null);
  const [dailyFootprint, setDailyFootprint] = useState(null);

  const onSubmit = async queryData => {
    queryData.token = token;

    //'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJhYjEzNTBmNi05ZmVkLTQxNjktOWVmZi0xZmJhZTMzNTU1ZWUiLCJleHAiOjE1OTIzNTAxNzN9.IX0J6DELBLmH9KUb4YaUvFUG4dHY8RUwnzITWcuHYjs';
    console.log(token);
    setKpis(await GET_KPIS(queryData));

    setDailyFootprint(await FETCH_DAILY_FOOTPRINT(queryData));
  };

  return (
    <Flex align="center" justify="center" direction="column">
      <ApiRequestForm submitFcn={onSubmit} />
      {kpis && <KPIsContainer data={kpis} />}
      {dailyFootprint && <FootprintContainer data={dailyFootprint} />}
    </Flex>
  );
};

export default MainPage;
