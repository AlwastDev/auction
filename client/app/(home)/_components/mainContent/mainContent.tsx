'use client';
import { FC, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toast } from 'sonner';
import { getPaginatedAuctions } from '@/store/GetAuctionsSlice';

import { formatDate, replaceUrl } from '@/lib/utils';

import { Pagination } from '@/components/pagination/pagination';

import * as S from './mainContent.styled';
import { ArrowRight } from 'lucide-react';

export const MainContent: FC<{ pageNumber: number }> = ({ pageNumber }) => {
  const { replace } = useRouter();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(pageNumber);
  const { auctions, totalPage, minRate, maxRate, error, loading } = useAppSelector((state) => state.auctions);

  useEffect(() => {
    dispatch(getPaginatedAuctions({ page, limit: 3, minRate, maxRate }));
  }, [page, minRate, maxRate]);

  const onNextPage = () => {
    replace(replaceUrl({ page: page + 1, minRate, maxRate }), {
      scroll: false,
    });
    setPage(page + 1);
  };

  const onPreviousPage = () => {
    replace(replaceUrl({ page: page + 1, minRate, maxRate }), {
      scroll: false,
    });
    setPage(page - 1);
  };

  const setPageNumber = (pageNumber: number) => () => {
    replace(replaceUrl({ page: page + 1, minRate, maxRate }), {
      scroll: false,
    });
    setPage(pageNumber);
  };

  return (
    <S.ContentSection>
      {!!auctions && !error.length && (
        <>
          <S.AuctionsList>
            {auctions.map((item, index) => (
              <S.AuctionListElement key={item.id}>
                <S.AuctionImage src={item.images[0].source} alt={`Лот ${index}`} width={296} height={270} />
                <S.AuctionContentContainer>
                  <S.AuctionDescription>{item.description}</S.AuctionDescription>
                  <S.AuctionDescription>{formatDate(item.createdAt)}</S.AuctionDescription>
                </S.AuctionContentContainer>
                <ArrowRight fontSize={40} />
              </S.AuctionListElement>
            ))}
          </S.AuctionsList>
          <S.PaginationContainer>
            <Pagination
              currentPage={page}
              onPreviousPage={onPreviousPage}
              onNextPage={onNextPage}
              setPageNumber={setPageNumber}
              lasPage={totalPage}
            />
          </S.PaginationContainer>
        </>
      )}
    </S.ContentSection>
  );
};
