import React from 'react';

import KPIsCard from '../components/KPIsCard';
import { FaUserCircle, FaCheck, FaGem, FaClock, FaRegSmile, FaShoppingCart } from 'react-icons/fa';
import { GiCycle } from 'react-icons/gi';
import { TiChartLine } from 'react-icons/ti';

const RenderKPIs = kpis => {
  const processedkpis = {
    'Average Stay': { value: kpis.avg_stay.substring(0, 6) + '%', icon: FaUserCircle },
    Clients: { value: kpis.clients, icon: FaGem },
    'Frequency of Visits': { value: kpis.frequency, icon: TiChartLine },
    Impacts: { value: kpis.impacts, icon: FaClock },
    'Unique Loyals': { value: kpis.loyals, icon: FaRegSmile },
    'Potential Clients': { value: kpis["potential_clients"], icon: GiCycle },
    Registers: { value: kpis.registers, icon: FaShoppingCart },
    Visits: { value: kpis.visits, icon: FaCheck },
  };
  return Object.keys(processedkpis).map((key, idx) => (
    <KPIsCard key={idx} cardInfo={[key, processedkpis[key].icon, processedkpis[key].value]} />
  ));
};

export default RenderKPIs;
