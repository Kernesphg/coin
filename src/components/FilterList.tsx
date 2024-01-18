import { FC, useState } from 'react';

import { Arrow } from '../assets/icons/Arrow';
import { filterProps } from '../types/componentsTypes/filterTypes';

export const FilterList: FC<filterProps> = ({ data, renderItem, renderCurrentItem }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className=" w-full h-full">
      <div
        className={`transition-all flex cursor-pointer items-center justify-between p-4 pr-5 w-full border-solid box-border border-2 bg-secondary hover:bg-secondary_hover border-border rounded-3xl ${
          isVisible && 'rounded-b-none'
        }`}
        onClick={() => setIsVisible(!isVisible)}>
        <div className="flex gap-3">{renderCurrentItem}</div>
        <div className="w-5">
          <Arrow isVisible={isVisible} />
        </div>
      </div>
      {isVisible && (
        <div
          onClick={() => setIsVisible(false)}
          className="flex-col absolute rounded-b-3xl w-full max-h-[300px] border-border border-2 border-solid bg-secondary overflow-auto drop-shadow-2xl px-3">
          {data.map(renderItem)}
        </div>
      )}
    </div>
  );
};
