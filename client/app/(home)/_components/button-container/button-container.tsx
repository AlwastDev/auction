'use client';

import Link from 'next/link';

import { onLogout } from '@/lib/services/auth-service';
import { Button } from '@/components/button/button';

import * as S from './button-container.styled';

export const ButtonContainer = () => {
  return (
    <S.ButtonContainer>
      <Link href="/">
        <Button onClick={onLogout}>Выход</Button>
      </Link>
    </S.ButtonContainer>
  );
};
