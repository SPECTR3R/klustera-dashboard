import axios from 'axios';
import handleAsync from '../services/handleAsync';

const baseURL = 'https://voldemort.klustera.com';

const service = axios.create({
  baseURL,
});

export const GET_KPIS = async queryData => {
  const { startDate, endDate, startHour, endHour, token } = queryData;

  const endPoint = `/get_kpis/1159/${startDate}/${endDate}/${
    startHour.length < 2 ? '0' + startHour : startHour
  }/${endHour.length < 2 ? '0' + endHour : endHour}`;

  return await handleAsync(() =>
    service.get(endPoint, {
      headers: { 'Content-Type': 'application/json', 'x-access-token': token.trim() },
    })
  );
};


export const FETCH_DAILY_FOOTPRINT = async queryData => {
  const { startDate, endDate, startHour, endHour, token } = queryData;

  const endPoint = `/fetch_daily_footprint/1159/${startDate}/${endDate}/${
    startHour.length < 2 ? '0' + startHour : startHour
  }/${endHour.length < 2 ? '0' + endHour : endHour}`;

  return await handleAsync(() =>
    service.get(endPoint, {
      headers: { 'Content-Type': 'application/json', 'x-access-token': token.trim() },
    })
  );
};