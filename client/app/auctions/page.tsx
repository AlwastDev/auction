"use client";

import {useState} from "react";
import {Range} from "@/components/range/range";
import {
  FilterContainer,
  SearchSection,
  FilterTitles,
  FilterMainTitle,
  FilterSecondTitle, SubmitFilterContainer, FilterInputs, FilterInput, Dash, SubmitFilterButton
} from "@/app/auctions/auctions.styled";


export default function Page() {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1000)

  return (
    <SearchSection>
      <FilterContainer>
        <FilterTitles>
          <FilterMainTitle>
            Фильтр:
          </FilterMainTitle>
          <FilterSecondTitle>
            Ставка, грн:
          </FilterSecondTitle>
        </FilterTitles>
        <Range
          min={0}
          max={1000}
          onChange={({ min, max }) => {
            setMinValue(min);
            setMaxValue(max);
          }}
          minValue={minValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          setMinValue={setMinValue}
        />
        <SubmitFilterContainer>
          <FilterInputs>
            <FilterInput value={minValue} />
            <Dash />
            <FilterInput value={maxValue} />
          </FilterInputs>
          <SubmitFilterButton>ok</SubmitFilterButton>
        </SubmitFilterContainer>
      </FilterContainer>
    </SearchSection>
  );
}