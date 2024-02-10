'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 760px;
  padding-bottom: 30px;
  background-color: ${colors.white};
  box-shadow: 0 4px 12px 0 rgba(179, 182, 186, 1);
  border-radius: 16px;
`;

export const HeadWrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
`;

export const HeadCase = styled.span<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50%;
  color: ${({ $isActive }) => ($isActive ? colors.black : colors.gray)};
  background-color: ${({ $isActive }) => ($isActive ? colors.blue : 'transparent')};
  font-weight: 700;
  font-size: 26px;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
