'use client';

import Link from 'next/link';

import { Logo } from '@/components/logo/logo';
import { onLogout } from '@/lib/services/auth-service';
import { Button } from '@/components/button/button';

import * as S from './header.styled';

export const Header = () => {
  return (
    <S.Header>
      <Logo />
      <S.ButtonContainer>
        <Link href="/">
          <Button onClick={onLogout}>Exit</Button>
        </Link>
      </S.ButtonContainer>
    </S.Header>
  );
};
