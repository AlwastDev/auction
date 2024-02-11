'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Header = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${colors.gray};
  z-index: 2;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
