import { coin, coinData } from '../dataTypes/coins';
import { fiat } from '../dataTypes/fiats';

export interface tableProps {
  searchValue: string;
  data: coinData;
  columns: { label: string; value: string }[];
  currentFiat: fiat;
}

export interface tableRowProps {
  element: coin;
  currentFiat: fiat;
  priceChange: string;
}
