import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Container = styled.div`
  position: relative;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 5px;
  }

  .slider__track {
    background-color: #fff;
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: #000;
    z-index: 2;
  }

  .slider__left-value,
  .slider__right-value {
    color: #06121a;
    font-size: 12px;
    margin-top: 20px;
  }

  .slider__left-value {
    left: 6px;
  }

  .slider__right-value {
    right: -4px;
  }
`;

export const RangeInput = styled.input<{ position: 'left' | 'right' }>`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;
  z-index: ${({ position }) => (position === 'left' ? 3 : 4)};

  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  &::-webkit-slider-thumb {
    background-color: ${colors.black};
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  &::-moz-range-thumb {
    background-color: ${colors.black};
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
