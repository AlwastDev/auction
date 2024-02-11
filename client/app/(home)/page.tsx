import { Sidebar } from './_components/sidebar/sidebar';

import * as S from './page.styled';

export default async function HomePage() {
  return (
    <S.SearchSection>
      <Sidebar />
      <S.ContentSection></S.ContentSection>
    </S.SearchSection>
  );
}
