import { redirect } from 'next/navigation';

import { api } from '@/lib/services/api';
import { Logo } from '@/components/logo/logo';

import * as S from './layout.styled';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const isAuth = await api.isExistAccessToken();

  if (isAuth) {
    redirect('/');
  }

  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <main>{children}</main>
    </>
  );
}
