import { FC, useState } from 'react';
import { SearchIcon } from '../../assets/icons/SearchIcon';

export const SearchInput: FC<any> = ({ setSearchValue }) => {
  const [isVisibleIcon, setIsVisibleIcon] = useState(true);

  return (
    <div className="flex relative">
      {isVisibleIcon ? (
        <div className="w-10 absolute left-3 top-2.5">
          <SearchIcon />
        </div>
      ) : (
        <></>
      )}

      <input
        onChange={(event) => setSearchValue(event.target.value)}
        onFocus={() => setIsVisibleIcon(false)}
        onBlur={() => setIsVisibleIcon(true)}
        className="transition-all text-base border-solid w-full box-border px-14 py-4 text-white focus:px-7 rounded-full bg-secondary  border-2 border-border"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
};
