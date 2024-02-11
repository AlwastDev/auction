'use client';

import { FC, useEffect, useState } from 'react';

import { Pagination } from '@/components/pagination/pagination';
import { getRates } from '@/lib/services/rate-service';
import { Rate } from '@/lib/models';
import { formatDate } from '@/lib/utils';
import { Loader } from '@/components/loader/loader';

import * as S from './bet-history.styled';

export const BetHistory: FC<{ auctionId: string }> = ({ auctionId }) => {
  const [paginationInfo, setPaginationInfo] = useState<{
    page: number;
    lastPage: number;
    loading: boolean;
    items: Rate[];
  }>({
    page: 1,
    lastPage: 1,
    loading: false,
    items: [],
  });

  useEffect(() => {
    setPaginationInfo({ ...paginationInfo, loading: true });
    (async () => {
      try {
        const response = await getRates(auctionId, paginationInfo.page);
        setPaginationInfo({
          items: response.rows,
          lastPage: response.totalPage,
          loading: false,
          page: paginationInfo.page,
        });
      } catch (_e) {
        setPaginationInfo({
          items: [],
          lastPage: 1,
          loading: false,
          page: 1,
        });
      }
    })();
  }, [paginationInfo.page]);

  const onNextPage = () => {
    setPaginationInfo({
      ...paginationInfo,
      page: paginationInfo.page + 1,
    });
  };

  const onPreviousPage = () => {
    setPaginationInfo({
      ...paginationInfo,
      page: paginationInfo.page - 1,
    });
  };

  const onSetPage = (pageNumber: number) => () => {
    setPaginationInfo({
      ...paginationInfo,
      page: pageNumber,
    });
  };

  return (
    <>
      {paginationInfo.loading && <Loader />}
      <S.Header>Bet history</S.Header>
      <S.ContentSection>
        {paginationInfo.items.length && (
          <>
            <S.BetList>
              {paginationInfo.items.map((item) => {
                return (
                  <S.BetListItem key={item.id}>
                    <S.ListItemInfo>{item?.userName}</S.ListItemInfo>
                    <S.ListItemInfo>{formatDate(item.updatedAt)}</S.ListItemInfo>
                    <S.ListItemInfo>{item.rate} UAN</S.ListItemInfo>
                  </S.BetListItem>
                );
              })}
            </S.BetList>
            <S.PaginationContainer>
              <Pagination
                currentPage={paginationInfo.page}
                onPreviousPage={onPreviousPage}
                onNextPage={onNextPage}
                setPageNumber={onSetPage}
                lasPage={paginationInfo.lastPage}
              />
            </S.PaginationContainer>
          </>
        )}
      </S.ContentSection>
    </>
  );
};
