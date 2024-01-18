import { useState, useEffect } from 'react';
import { Table } from '../../components/Table';
import { FilterList } from '../../components/FilterList';
import { SearchInput } from '../../components/UI/SearchInput';
import { fiat } from '../../types/dataTypes/fiats';
import { coinData } from '../../types/dataTypes/coins';
import { getCoins } from '../../api/axios';
import { Loading } from '../../components/UI/Loading/Loading';

const coinTableColumns = [
  {
    label: 'Обозначение',
    value: 'name',
  },
  {
    label: 'Цена',
    value: 'price',
  },
  {
    label: 'Изменение за: ',
    value: 'change',
  },
];

export const MarketPage = () => {
  const [coins, setCoins] = useState<coinData>({
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
  const [fiats, setFiats] = useState<fiat[]>([]);

  const [currentFiat, setCurrentFiat] = useState({
    name: 'USD',
    rate: 0,
    symbol: '$',
    imageUrl: 'https://static.coinstats.app/flags/USD_r.png',
  });

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getCoins(currentFiat, setFiats, setCoins);
  }, [currentFiat]);

  return (
    <div>
      <h2 className="text-5xl text-center mb-10 font-bold">Изучайте цены и графики</h2>
      <div className="">
        <div className="flex justify-between align-middle gap-10 mb-5">
          <div className="w-[300px] relative">
            <FilterList
              data={fiats}
              renderCurrentItem={
                <>
                  <img className="w-7" src={currentFiat.imageUrl} alt={currentFiat.name} />
                  <p>{currentFiat.name}</p>
                </>
              }
              renderItem={(fiat) => {
                return (
                  <div
                    onClick={() => setCurrentFiat(fiat)}
                    className="flex gap-3 w-full items-center p-3 border-border border-solid border-b-2 hover:bg-secondary_hover cursor-pointer">
                    <img className="w-7" src={fiat.imageUrl} alt={fiat.name} />
                    <p>{fiat.name}</p>
                  </div>
                );
              }}
            />
          </div>
          <div className="w-[600px]">
            <SearchInput setSearchValue={(value: string) => setSearchValue(value)} />
          </div>
        </div>
        <Table
          searchValue={searchValue}
          currentFiat={currentFiat}
          columns={coinTableColumns}
          data={coins}
        />
      </div>
    </div>
  );
};
