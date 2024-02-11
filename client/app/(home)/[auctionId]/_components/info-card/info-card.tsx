import { FC } from 'react';

import { dateToString } from '@/lib/utils';

import * as S from './info-card.styled';

interface InfoCardProps {
  description: string;
  rate: number;
  createdAt: Date;
}

export const InfoCard: FC<InfoCardProps> = ({ description, rate, createdAt }) => {
  return (
    <S.InfoCard>
      <div>
        <S.Header>Description</S.Header>
        <S.Text>{description}</S.Text>
      </div>
      <div>
        <S.Header>Minimum rate</S.Header>
        <S.Text>{rate}</S.Text>
      </div>
      <div>
        <S.Header>Creation date</S.Header>
        <S.Text>{dateToString(createdAt)}</S.Text>
      </div>
    </S.InfoCard>
  );
};
