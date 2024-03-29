'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Button = styled.button<{
  width?: string;
  height?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: ${(props) => props.height ?? '60px'};
  width: ${(props) => props.width ?? '240px'};
  border-radius: ${(props) => props.$borderRadius ?? '15px'};
  border: 0;
  background-color: ${(props) => props.$backgroundColor ?? colors.blue};
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.black};
  cursor: pointer;
`;
