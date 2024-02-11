import { ChangeEvent, FC, useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { changeMaxRate, changeMinRate } from '@/store/GetAuctionsSlice';
import { replaceUrl } from '@/lib/utils';

import * as S from '@/app/(home)/_components/sidebar/sidebar.styled';

export const FilterInput: FC<{ pageNumber: number }> = ({ pageNumber }) => {
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

  const onChangeMinRate = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value)) {
      setRate({ minRate: +e.target.value, maxRate: rate.maxRate });
    }
  };

  const onChangeMaxRate = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value)) {
      setRate({ maxRate: +e.target.value, minRate: rate.minRate });
    }
  };

  const onSetRate = () => {
    if (rate.minRate < rate.maxRate) {
      dispatch(changeMinRate({ minRate: rate.minRate }));
      dispatch(changeMaxRate({ maxRate: rate.maxRate }));
      replace(replaceUrl({ page: pageNumber, minRate: rate.minRate, maxRate: rate.maxRate }), {
        scroll: false,
      });
    } else {
      toast.error('Value in second input must be greater');
    }
  };

  useLayoutEffect(() => {
    setRate({
      minRate,
      maxRate,
    });
  }, [minRate, maxRate]);

  return (
    <>
      <S.FilterInputs>
        <S.FilterInput type="text" value={rate.minRate} onChange={onChangeMinRate} />
        <S.Dash />
        <S.FilterInput type="text" value={rate.maxRate} onChange={onChangeMaxRate} />
      </S.FilterInputs>
      <S.SubmitFilterButton onClick={onSetRate}>ok</S.SubmitFilterButton>
    </>
  );
};
