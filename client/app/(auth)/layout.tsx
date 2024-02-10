import { Logo } from '@/components/logo/logo';

import * as S from './layout.styled';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
