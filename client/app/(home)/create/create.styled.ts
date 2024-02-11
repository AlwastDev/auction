'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  border-radius: 6px;
  width: 100%;
  height: 80vh;
  box-shadow: 0 4px 12px 0 rgba(179, 182, 186, 1);
  padding: 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DeleteImageBtn = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: 2;
  opacity: 0;
`;

export const Gallery = styled.div`
  display: flex;
  gap: 30px;
`;

export const ImageCard = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${colors.blue};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`;
