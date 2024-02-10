'use client';

import { useState } from 'react';

import { Range } from '@/components/range/range';

import * as S from './sidebar.styled';

export const Sidebar = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1000);

  return (
    <S.FilterContainer>
      <S.FilterTitles>
        <S.FilterMainTitle>Фильтр:</S.FilterMainTitle>
        <S.FilterSecondTitle>Ставка, грн:</S.FilterSecondTitle>
      </S.FilterTitles>
      <Range
        min={0}
        max={1000}
        minValue={minValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
      />
      <S.SubmitFilterContainer>
        <S.FilterInputs>
          <S.FilterInput type="text" defaultValue={minValue} />
          <S.Dash />
          <S.FilterInput type="text" defaultValue={maxValue} />
        </S.FilterInputs>
        <S.SubmitFilterButton>ok</S.SubmitFilterButton>
      </S.SubmitFilterContainer>
    </S.FilterContainer>
  );
};
