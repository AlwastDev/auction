import * as S from './pagination.styled';
import { PaginationSwitchButton } from './pagination.styled';
import { FC, useLayoutEffect, useState } from 'react';
import { getPagesArray } from '@/components/pagination/helpers';

export interface IPagination {
  currentPage: number;
  lasPage: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  setPageNumber: (newPage: number) => () => void;
}
export const Pagination: FC<IPagination> = ({ currentPage, lasPage, onPreviousPage, onNextPage, setPageNumber }) => {
  const [pages, setPages] = useState<number[]>([]);

  useLayoutEffect(() => {
    setPages(getPagesArray(currentPage, lasPage));
  }, [lasPage, currentPage]);

  return (
    <S.PaginationContainer>
      <S.PaginationSwitchButton disabled={currentPage === 1} onClick={onPreviousPage}>
        {'<'}
      </S.PaginationSwitchButton>
      {pages.map((page) => {
        return (
          <S.PaginationButton
            disabled={currentPage === page}
            onClick={setPageNumber(page)}
            active={currentPage === page ? 'active' : ''}
            key={`page-${page}`}
          >
            {page}
          </S.PaginationButton>
        );
      })}
      <S.PaginationSwitchButton disabled={currentPage === lasPage} onClick={onNextPage}>
        {'>'}
      </S.PaginationSwitchButton>
    </S.PaginationContainer>
  );
};
