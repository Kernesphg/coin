import { FC } from 'react';
import { tableRowProps } from '../types/componentsTypes/tableTypes';
import { Link } from 'react-router-dom';

export const TableRow: FC<tableRowProps> = ({ element, currentFiat, priceChange }) => {
  console.log(priceChange);
  const setCoinPage = () => {
    window.location.href = `/market/${element.id}`;
    return false;
  };

  return (
    <tr
      onClick={setCoinPage}
      key={element.id}
      className="transition-all border-b w-full border-border dark:border-neutral-500 hover:bg-secondary_hover cursor-pointer">
      <td className="whitespace-nowrap   px-6 py-7">
        <div className="flex items-center gap-5">
          <img className="w-9" src={element.icon} alt="" />
          <p className="text-xl font-bold">{element.name}</p>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <p className="text-lg font-medium">
          {element.price.toFixed(2)} {currentFiat.symbol}
        </p>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {priceChange === 'priceChange1h' && (
          <p
            className={`text-lg font-medium ${
              element.priceChange1h < 0 ? 'text-danger' : 'text-primary'
            }`}>
            {element.priceChange1h} %
          </p>
        )}
        {priceChange === 'priceChange1d' && (
          <p
            className={`text-lg font-medium ${
              element.priceChange1d < 0 ? 'text-danger' : 'text-primary'
            }`}>
            {element.priceChange1d} %
          </p>
        )}
        {priceChange === 'priceChange1w' && (
          <p
            className={`text-lg font-medium ${
              element.priceChange1w < 0 ? 'text-danger' : 'text-primary'
            }`}>
            {element.priceChange1w} %
          </p>
        )}
      </td>
    </tr>
  );
};
