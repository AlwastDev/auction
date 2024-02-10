import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Input = styled.input<{ width?: string; height?: string }>`
  padding: 10px 20px;
  height: ${(props) => props.height ?? '56px'};
  width: ${(props) => props.width ?? '424px'};
  border-radius: 6px;
  border: 1px solid ${colors.gray};
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;

  &::placeholder {
    color: ${colors.gray};
  }
`;
