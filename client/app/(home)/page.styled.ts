'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const SearchSection = styled.section`
  display: flex;
  gap: 43px;
  margin-top: 125px;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 15px;
  width: 100%;
  min-height: 500px;
  background-color: ${colors.blue};
  padding: 63px 30px;
`;
