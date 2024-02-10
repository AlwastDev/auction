import { FC } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/button/button';

import * as S from './wrapper.styled';

interface WrapperProps {
  children: React.ReactNode;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

export const Wrapper: FC<WrapperProps> = ({ children, handleSubmit, disabled }) => {
  const pathname = usePathname();
  const router = useRouter();

  const buttonLabel = pathname === '/sign-in' ? 'Login' : 'Register';

  return (
    <S.Wrapper>
      <S.HeadWrapper>
        <S.HeadCase $isActive={pathname === '/sign-in'} onClick={() => router.push('/sign-in')}>
          Login
        </S.HeadCase>
        <S.HeadCase $isActive={pathname === '/sign-up'} onClick={() => router.push('/sign-up')}>
          Registration
        </S.HeadCase>
      </S.HeadWrapper>
      <form>
        <S.LoginWrapper>{children}</S.LoginWrapper>
        <S.ButtonWrapper>
          <Button type="submit" disabled={disabled} onClick={(e) => handleSubmit(e)}>
            {buttonLabel}
          </Button>
        </S.ButtonWrapper>
      </form>
    </S.Wrapper>
  );
};
