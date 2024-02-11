'use client';

import * as S from './bet-history.styled';

export const BetHistory = () => {
  return (
    <>
      <S.Header>Bet history</S.Header>
      <S.ContentSection></S.ContentSection>
      {/* <S.PaginationContainer>
        <Pagination
          currentPage={1}
          onPreviousPage={() => {}}
          onNextPage={() => {}}
          setPageNumber={(val) => {}}
          lasPage={1}
        />
      </S.PaginationContainer> */}
    </>
  );
};
