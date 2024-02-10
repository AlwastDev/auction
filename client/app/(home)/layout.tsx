import { redirect } from 'next/navigation';

import { api } from '@/lib/services/api';
import { Logo } from '@/components/logo/logo';
import { ButtonContainer } from './_components/button-container/button-container';

import * as S from './layout.styled';

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const isAuth = await api.isExistAccessToken();

  if (!isAuth) {
    redirect('/sign-in');
  }

  return (
    <>
      <S.Header>
        <Logo />
        <ButtonContainer />
      </S.Header>
      <main>{children}</main>
    </>
  );
}
