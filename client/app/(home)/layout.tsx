'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { api } from '@/lib/services/api';
import { Logo } from '@/components/logo/logo';
import { Button } from '@/components/button/button';

import * as S from './layout.styled';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuth = api.isExistAccessToken();

  console.log(isAuth);

  if (!isAuth) {
    redirect('/sign-in');
  }

  return (
    <>
      <S.Header>
        <Logo />
        <S.ButtonContainer>
          <Link href="/">
            <Button onClick={() => api.removeAccessTokenFromHeader()}>Выход</Button>
          </Link>
        </S.ButtonContainer>
      </S.Header>
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
