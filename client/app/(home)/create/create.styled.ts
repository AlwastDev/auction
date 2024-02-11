'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const DeleteImageBtn = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: 2;
  opacity: 0;
  display: flex;
  align-self: center;
`;

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

export const Gallery = styled.div`
  display: flex;
  gap: 30px;
`;

export const ImageCard = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  &::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 16px;
    width: 200px;
    height: 200px;
    z-index: 1;
    background-color: ${colors.transparent};
  }
  &::after {
    content: '';
  }

  &:hover::before {
    transition: background-color 0.2s ease-in-out;
    background-color: ${colors.darkGray};
  }
  &:hover ${DeleteImageBtn} {
    transition: opacity 0.2s ease-in-out;
    opacity: 1;
  }
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  object-fit: cover;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`;
