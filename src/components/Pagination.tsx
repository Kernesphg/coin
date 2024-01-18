import { FC, useEffect, useState } from 'react';
import { Button } from './UI/Button';

export const Pagination: FC<any> = ({
  setCurrentPage,
  currentPage,
  setFirstItem,
  setLastItem,
  firstItem,
  lastItem,
  limitItems,
  pagesCount,
  searchValue,
  setPagesCount, //сделать переход на конкретную страницу
}) => {
  const pages: number[] = Array.from({ length: pagesCount }, (_v, i) => i + 1);
  let [firstCountPage, setFirstCountPage] = useState<number>(0);
  let [lastCountPage, setLastCountPage] = useState<number>(5);
  useEffect(() => {
    setFirstCountPage(0);
    setLastCountPage(5);
    setCurrentPage(1);
  }, [searchValue]);

  const getNextPage = () => {
    if (currentPage === pagesCount) {
      return;
    }
    setCurrentPage((currentPage += 1));
    setFirstItem((firstItem = lastItem));
    setLastItem((lastItem += limitItems));
    if (currentPage === lastCountPage) {
      setFirstCountPage((firstCountPage += 1));
      setLastCountPage((lastCountPage += 1));
      return;
    }
  };
  const getPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage -= 1));
      setFirstItem((firstItem -= limitItems));
      setLastItem((lastItem -= limitItems));
    }

    const stopActive = lastCountPage - 4;

    if (currentPage === stopActive && stopActive !== 1) {
      setFirstCountPage((firstCountPage -= 1));
      setLastCountPage((lastCountPage -= 1));
      return;
    }
  };

  return (
    <div className="transition-all flex gap-3">
      <Button click={() => getPrevPage()} label="<" isActive={currentPage === 1 ? false : true} />
      {pages.slice(firstCountPage, lastCountPage).map((el) => (
        <Button isActive={el === currentPage ? true : false} label={el.toString()} />
      ))}
      <Button
        click={() => getNextPage()}
        label=">"
        isActive={currentPage === pagesCount ? false : true}
      />
    </div>
  );
};
