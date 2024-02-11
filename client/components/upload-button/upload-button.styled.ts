'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const UploadButton = styled.input`
  width: 110px;
  height: 10px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const Label = styled.label<{
  height?: string;
  width?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
}>`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height ?? '60px'};
  width: ${(props) => props.width ?? '240px'};
  background-color: ${(props) => props.$backgroundColor ?? colors.blue};
  border-radius: ${(props) => props.$borderRadius ?? '15px'};
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 120%;
  text-transform: uppercase;
  align-self: center;
  color: ${colors.black};
`;
