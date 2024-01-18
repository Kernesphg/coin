import { Dispatch, SetStateAction } from 'react';
import { fiat } from '../types/dataTypes/fiats';
import axios from 'axios';
import { coinData } from '../types/dataTypes/coins';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 'u00DlkweBjHAALL3BhqY9AjhNzMY87F5iYtFnyAtH+g=',
  },
};

const fetchFiats = async (setFiats: {
  (value: SetStateAction<fiat[]>): void;
  (arg0: any): void;
  (arg0: any): void;
  imageUrl?: string | undefined;
  name?: string | undefined;
  rate?: number | undefined;
  symbol?: string | undefined;
}) => {
  const res = await axios.get('https://openapiv1.coinstats.app/fiats', options);
  setFiats(res.data);
};

export const getCoins = (
  currentFiat: fiat,
  setFiats: {
    (value: SetStateAction<fiat[]>): void;
    (arg0: any): void;
    imageUrl?: string;
    name?: string;
    rate?: number;
    symbol?: string;
  },
  setCoins: { (value: SetStateAction<coinData>): void; (arg0: any): any },
) => {
  setCoins({
    result: [],
    meta: {
      hasNextPage: false,
      hasPreviousPage: false,
      itemCount: 0,
      limit: 0,
      page: 0,
      pageCount: 0,
    },
  });
  const url = `https://openapiv1.coinstats.app/coins?limit=1000${
    currentFiat.name !== 'USD' ? '&currency=' + currentFiat.name : '&currency=USD'
  }`;
  axios.get(url, options).then((res) => setCoins(res.data));

  fetchFiats(setFiats);
};
