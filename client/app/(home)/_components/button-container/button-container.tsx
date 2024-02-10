'use client';

import Link from 'next/link';

import { api } from '@/lib/services/api';
import { Button } from '@/components/button/button';

import * as S from './button-container.styled';

export const ButtonContainer = () => {
  return (
    <S.ButtonContainer>
      <Link href="/">
        <Button onClick={() => api.removeAccessTokenFromHeader()}>Выход</Button>
      </Link>
    </S.ButtonContainer>
  );
};
