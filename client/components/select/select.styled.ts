'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Select = styled.select<{ width?: string; height?: string }>`
  border-radius: 6px;
  border: 1px solid ${colors.gray};
  height: ${(props) => props.height ?? '56px'};
  width: ${(props) => props.width ?? '460px'};
  padding: 10px 20px;
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: ${colors.black};
`;
