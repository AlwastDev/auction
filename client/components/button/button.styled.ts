import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Button = styled.button<{ width?: string; height?: string }>`
  height: ${(props) => props.height ?? '60px'};
  width: ${(props) => props.width ?? '240px'};
  border-radius: 6px;
  border: 0;
  background-color: ${colors.blue};
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.black};
`;
