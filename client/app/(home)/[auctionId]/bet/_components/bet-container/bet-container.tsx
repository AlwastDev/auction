'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Auction } from '@/lib/models';

import { Input } from '@/components/input/input';
import { Button } from '@/components/button/button';
import { colors } from '@/lib/colors';

import * as S from './bet-container.styled';
import { toast } from 'sonner';

interface BetContainerProps {
  auction: Auction;
}

export const BetContainer: FC<BetContainerProps> = ({ auction }) => {
  const router = useRouter();

  const [rate, setRate] = useState<number>(1);

  const handleSubmit = async () => {
    if (auction.lastRate.rate <= rate) {
      return toast.error('The rate is lower than the last rate');
    }

    router.push(`/${auction.id}`);
  };

  return (
    <S.Container>
      <h1>Your bet</h1>
      <Input
        type="number"
        min={1}
        max={99999}
        defaultValue={rate}
        onChange={(event) => setRate(Number(event.target.value))}
      />
      <S.ButtonContainer>
        <Button width="140px" height="48px" $borderRadius="6px">
          Make a bet
        </Button>
        <Button
          type="reset"
          width="140px"
          height="48px"
          $borderRadius="6px"
          $backgroundColor={colors.red}
          onClick={() => router.push(`/${auction.id}`)}
        >
          Cancel
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};