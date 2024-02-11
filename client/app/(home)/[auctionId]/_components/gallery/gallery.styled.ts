'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Gallery = styled.div`
  display: flex;
  gap: 20px;
`;

export const ImageCard = styled.div`
  width: 290px;
  height: 320px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${colors.blue};
`;
