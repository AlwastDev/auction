import styled, { keyframes } from 'styled-components';

import { colors } from '@/lib/colors';

const rotateLoader = keyframes`
    from {
        transform: rotate(1deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-top: 3px solid ${colors.blue};
  border-left: 3px solid ${colors.blue};
  border-bottom: 3px solid ${colors.blue};
  border-right: none;
  border-radius: 50%;
  animation: ${rotateLoader} 1s ease infinite;
`;
