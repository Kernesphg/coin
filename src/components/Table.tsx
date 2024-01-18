import { FC, useEffect, useState } from 'react';
import { TableRow } from './TableRow';
import { coin } from '../types/dataTypes/coins';
import { tableProps } from '../types/componentsTypes/tableTypes';
import { Loading } from './UI/Loading/Loading';
import { Pagination } from './Pagination';
import { FilterList } from './FilterList';
import { changeProperty } from '../types/componentsTypes/filterTypes';

export const Table: FC<tableProps> = ({ data, columns, currentFiat, searchValue }) => {
  const limitItems: number = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [firstItem, setFirstItem] = useState<number>(0);
  const [lastItem, setLastItem] = useState<number>(10);
  const [pagesCount, setPagesCount] = useState<number>(0);

  console.log(data);

  useEffect(() => {
    if (!searchValue) {
      setPagesCount(Math.round(data.result.length / limitItems));
    } else {
      setPagesCount(
        Math.round(
          data.result.filter((element) => {
            return element.name.toLowerCase().includes(searchValue.toLowerCase());
          }).length / limitItems,
        ),
      );
    }
  });

  useEffect(() => {
    setFirstItem(0);
    setLastItem(limitItems);
  }, [searchValue]);

  const changeProperties: changeProperty[] = [
    { label: 'час', value: 'priceChange1h' },
    { label: 'день', value: 'priceChange1d' },
    { label: 'неделя', value: 'priceChange1w' },
  ];
  const [currentValue, setCurrentValue] = useState<changeProperty>({
    label: 'час',
    value: 'priceChange1h',
  });

  return (
    <div className="bg-secondary px-12 py-7 rounded-3xl border-border border-solid border-2">
      <table className="min-w-full text-left text-sm font-light   ">
        <thead className="border-b text-xl dark:border-neutral-500 ">
          <tr>
            {columns.map((th: { value: string; label: string }) => (
              <th className="px-6 py-4">
                <div className="flex gap-3 items-center ">
                  {th.label}
                  {th.value === 'change' && (
                    <div className="w-[150px] relative">
                      <FilterList
                        data={changeProperties}
                        renderCurrentItem={<p>{currentValue.label}</p>}
                        renderItem={(column: changeProperty) => {
                          return (
                            <div
                              onClick={() => setCurrentValue(column)}
                              className="flex gap-3 w-full items-center p-3 border-border border-solid border-b-2 hover:bg-secondary_hover cursor-pointer">
                              <p>{column.label}</p>
                            </div>
                          );
                        }}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.result.length === 0 ? (
            <div className="w-full flex justify-center">
              <Loading />
            </div>
          ) : (
            data.result
              .filter((element) => {
                return element.name.toLowerCase().includes(searchValue.toLowerCase());
              })
              .slice(firstItem, lastItem)
              .map((element: coin) => (
                <TableRow
                  currentFiat={currentFiat}
                  element={element}
                  priceChange={currentValue.value}
                />
              ))
          )}
        </tbody>
      </table>
      <div className="w-full mt-8 flex justify-center">
        <Pagination
          setCurrentPage={setCurrentPage}
          setFirstItem={setFirstItem}
          setLastItem={setLastItem}
          currentPage={currentPage}
          firstItem={firstItem}
          lastItem={lastItem}
          limitItems={limitItems}
          pagesCount={pagesCount}
          setPagesCount={setPagesCount}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};
