"use client";
import styled from "styled-components";

import { colors } from '@/lib/colors';

export const SearchSection = styled.section`
  display: flex;
  gap: 43px;
  margin-top: 125px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  border-radius: 15px;
  background-color: ${colors.blue};
  width: 441px;
`;

export const FilterTitles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 55px;
  width: 100%;
  margin-bottom: 28px;
`;

export const FilterMainTitle = styled.h2`
  font-size: 23px;
  font-weight: 700;
  display: block;
`;

export const FilterSecondTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  display: block;
`

export const FilterInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 260px;
`;

export const SubmitFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 28px;
`;

export const SubmitFilterButton = styled.button`
  display: block;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 6px 20px;
  font-size: 23px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const FilterInput = styled.input`
  width: 115px;
  padding: 6px 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 23px;
  font-weight: 500;
`;

export const Dash = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${colors.black};
`;