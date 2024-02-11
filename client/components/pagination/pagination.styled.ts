import styled from 'styled-components';
import { colors } from '@/lib/colors';
import { bool } from 'prop-types';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PaginationButton = styled.button<{ active: 'active' | '' }>`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  ${({ active }) =>
    active === 'active'
      ? `
    background-color: ${colors.black};
    color: ${colors.white};
  `
      : `
    background-color: ${colors.white};
    color: ${colors.black};
  `}
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;

  &:hover {
    background-color: ${colors.gray};
  }
`;

export const PaginationSwitchButton = styled.button<{ disabled: boolean }>`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  background-color: ${colors.darkBlue};
  color: ${colors.black};
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s;

  ${({ disabled }) =>
    !disabled &&
    `
    cursor: pointer;
    &:hover {
      background-color: ${colors.blue};
    }
  `}
`;
