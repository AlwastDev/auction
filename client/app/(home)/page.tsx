import { Sidebar } from './_components/sidebar/sidebar';
import { MainContent } from './_components/mainContent/mainContent';

import * as S from './page.styled';

interface PageProps {
  searchParams: {
    page?: number;
    minRate?: number;
    maxRate?: number;
  };
}

export default async function HomePage({ searchParams }: PageProps) {
  return (
    <S.SearchSection>
      <Sidebar
        minRateValue={Number(searchParams.minRate) || 1}
        maxRateValue={Number(searchParams.maxRate) || 99998}
        pageNumber={Number(searchParams.page) || 1}
      />
      <MainContent pageNumber={Number(searchParams.page) || 1} />
    </S.SearchSection>
  );
}
