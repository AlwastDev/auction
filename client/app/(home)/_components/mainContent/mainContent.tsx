'use client';
import { FC, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getPaginatedAuctions } from '@/store/GetAuctionsSlice';

import { formatDate, replaceUrl } from '@/lib/utils';

import { Pagination } from '@/components/pagination/pagination';

import * as S from './mainContent.styled';
import { ArrowRight } from 'lucide-react';
import { Loader } from '@/components/loader/loader';
import { AuctionPrice } from './mainContent.styled';

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
    replace(replaceUrl({ page: page - 1, minRate, maxRate }), {
      scroll: false,
    });
    setPage(page - 1);
  };

  const setPageNumber = (pageNumber: number) => () => {
    replace(replaceUrl({ page: pageNumber, minRate, maxRate }), {
      scroll: false,
    });
    setPage(pageNumber);
  };

  console.log(auctions);
  return (
    <>
      {loading && <Loader />}
      <S.ContentSection>
        {!!auctions && !error.length && (
          <>
            <S.AuctionsList>
              {auctions.map((item, index) => (
                <S.AuctionListElement key={item.id}>
                  <S.AuctionInfoContainer>
                    <S.AuctionImage src={item.images[0].source} alt={`Лот ${index}`} width={296} height={270} />
                    <S.AuctionContentContainer>
                      <S.AuctionDescription>{item.description}</S.AuctionDescription>
                      <S.AuctionDescription>{formatDate(item.createdAt)}</S.AuctionDescription>
                      <S.AuctionPrice>{item.lastRate.rate} UAN</S.AuctionPrice>
                    </S.AuctionContentContainer>
                  </S.AuctionInfoContainer>
                  <S.ListItemLink href={`/${item.id}`}>
                    <ArrowRight size={42} />
                  </S.ListItemLink>
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
    </>
  );
};
