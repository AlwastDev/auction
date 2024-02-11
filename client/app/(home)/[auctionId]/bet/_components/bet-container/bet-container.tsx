'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Auction } from '@/lib/models';

import { Input } from '@/components/input/input';
import { Button } from '@/components/button/button';
import { colors } from '@/lib/colors';

import * as S from './bet-container.styled';
import { toast } from 'sonner';
import { createRate } from '@/lib/services/rate-service';
import { revalidate } from '@/actions/revalidate';

interface BetContainerProps {
  auction: Auction;
}

export const BetContainer: FC<BetContainerProps> = ({ auction }) => {
  const router = useRouter();

  const [rate, setRate] = useState<number>(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (auction.lastRate.rate >= rate) {
      return toast.error('The rate is lower than the last rate');
    }

    await createRate(auction.id, rate).then((response) => {
      if (response) {
        revalidate(`/${auction.id}`);
        setTimeout(() => router.push(`/${auction.id}`), 500);
      }
    });
  };

  return (
    <S.Container onSubmit={handleSubmit}>
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
