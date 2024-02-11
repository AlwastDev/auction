import { FC } from 'react';
import Link from 'next/link';

import { Button } from '@/components/button/button';

import * as S from './actions.styled';

interface ActionsProps {
  auctionId: string;
  userIsOwner: boolean;
}

export const Actions: FC<ActionsProps> = ({ auctionId, userIsOwner }) => {
  return (
    <S.Actions>
      {userIsOwner ? (
        <Link href={`/${auctionId}/edit`}>
          <Button>Edit auction</Button>
        </Link>
      ) : (
        <Link href={`/${auctionId}/bet`}>
          <Button>Place a bet</Button>
        </Link>
      )}
    </S.Actions>
  );
};
