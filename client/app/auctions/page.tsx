'use client';

import { useState } from 'react';

import { Range } from '@/components/range/range';

import {
  FilterContainer,
  SearchSection,
  FilterTitles,
  FilterMainTitle,
  FilterSecondTitle,
  SubmitFilterContainer,
  FilterInputs,
  FilterInput,
  Dash,
  SubmitFilterButton,
  ContentSection,
} from './auctions.styled';

export default function Page() {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1000);

  return (
    <SearchSection>
      <FilterContainer>
        <FilterTitles>
          <FilterMainTitle>Фильтр:</FilterMainTitle>
          <FilterSecondTitle>Ставка, грн:</FilterSecondTitle>
        </FilterTitles>
        <Range
          min={0}
          max={1000}
          minValue={minValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          setMinValue={setMinValue}
        />
        <SubmitFilterContainer>
          <FilterInputs>
            <FilterInput type="text" value={minValue} />
            <Dash />
            <FilterInput type="text" value={maxValue} />
          </FilterInputs>
          <SubmitFilterButton>ok</SubmitFilterButton>
        </SubmitFilterContainer>
      </FilterContainer>
      <ContentSection>sadf</ContentSection>
    </SearchSection>
  );
}
