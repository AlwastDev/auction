'use client';

import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDebounceValue } from 'usehooks-ts';

import { Range } from '@/components/range/range';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { changeMaxRate, changeMinRate } from '../../../../store/getAuctionsSlice';
import { replaceUrl } from '@/lib/utils';
import { FilterInput } from './_components/filter-input';

import * as S from './sidebar.styled';

export const Sidebar: FC<{ minRateValue: number; maxRateValue: number; pageNumber: number }> = ({
  minRateValue,
  maxRateValue,
  pageNumber,
}) => {
  const { replace } = useRouter();
  const dispatch = useAppDispatch();
  const { minRate, maxRate } = useAppSelector((state) => state.auctions);
  const [rate, setRate] = useState<{
    minRate: number;
    maxRate: number;
  }>({
    minRate,
    maxRate,
  });
  const [debouncedMinRate] = useDebounceValue(rate.minRate, 500);
  const [debouncedMaxRate] = useDebounceValue(rate.maxRate, 500);

  const onChangeMinRate = (value: number) => {
    setRate({ minRate: value, maxRate: rate.maxRate });
  };

  const onChangeMaxRate = (value: number) => {
    setRate({ maxRate: value, minRate: rate.minRate });
  };

  useEffect(() => {
    debouncedMinRate !== minRate && dispatch(changeMinRate({ minRate: debouncedMinRate as number }));
    debouncedMaxRate !== maxRate && dispatch(changeMaxRate({ maxRate: debouncedMaxRate as number }));
    (debouncedMinRate !== minRate || debouncedMaxRate !== maxRate) &&
      replace(replaceUrl({ page: pageNumber, minRate: debouncedMinRate, maxRate: debouncedMaxRate }), {
        scroll: false,
      });
  }, [debouncedMaxRate, debouncedMinRate]);

  useLayoutEffect(() => {
    dispatch(changeMinRate({ minRate: minRateValue as number }));
    dispatch(changeMaxRate({ maxRate: maxRateValue as number }));
  }, []);

  useLayoutEffect(() => {
    setRate({
      minRate: minRate,
      maxRate: maxRate,
    });
  }, [minRate, maxRate]);

  return (
    <S.FilterContainer>
      <S.FilterTitles>
        <S.FilterMainTitle>Filter:</S.FilterMainTitle>
        <S.FilterSecondTitle>Rate, UAH</S.FilterSecondTitle>
      </S.FilterTitles>
      <Range
        min={0}
        max={99998}
        minValue={rate.minRate}
        maxValue={rate.maxRate}
        setMaxValue={onChangeMaxRate}
        setMinValue={onChangeMinRate}
      />
      <S.SubmitFilterContainer>
        <FilterInput pageNumber={pageNumber} />
      </S.SubmitFilterContainer>
    </S.FilterContainer>
  );
};
