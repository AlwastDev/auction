'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${colors.gray};
  margin-bottom: 30px;
`;
