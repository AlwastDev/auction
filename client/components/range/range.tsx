'use client';

import { FC, useCallback, useEffect, useRef } from 'react';

import { Container, RangeInput, Slider } from './range.styled';

interface RangeProps {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
}

export const Range: FC<RangeProps> = ({ min, max, maxValue, minValue, setMinValue, setMaxValue }) => {
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  useEffect(() => {
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxValue);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxValue, getPercent]);

  return (
    <Container>
      <RangeInput
        type="range"
        min={min}
        max={max}
        value={minValue}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxValue - 1);
          setMinValue(value);
          minValRef.current = value;
        }}
        style={{ ...(minValue > max - 100 && { zIndex: '5' }) }}
        $position="left"
      />
      <RangeInput
        type="range"
        min={min}
        max={max}
        value={maxValue}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minValue + 1);
          setMaxValue(value);
          maxValRef.current = value;
        }}
        $position="right"
      />

      <Slider>
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
      </Slider>
    </Container>
  );
};
