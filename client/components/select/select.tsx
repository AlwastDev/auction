'use client';

import { FC, SelectHTMLAttributes } from 'react';

import * as S from './select.styled';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  values: string[];
}

export const Select: FC<SelectProps> = (props) => {
  return (
    <S.Label>
      {props.name}
      <S.Select {...props}>
        {props.values.map((value) => (
          <option key={`${props.name}_${value}_option`} value={value}>
            {value}
          </option>
        ))}
      </S.Select>
    </S.Label>
  );
};
