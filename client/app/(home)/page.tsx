import { Sidebar } from './_components/sidebar/sidebar';

import * as S from './page.styled';

export default async function Page() {
  // const auctions = await getAuction('11341351-fa9e-48fd-a86e-c7d99b7cb580');

  // await createAuction('sadsadsad', 1000);

  // console.log(auctions);

  return (
    <S.SearchSection>
      <Sidebar />
      <S.ContentSection></S.ContentSection>
    </S.SearchSection>
  );
}
