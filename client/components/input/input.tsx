'use client';

import { FC, InputHTMLAttributes } from 'react';

import * as S from './input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  gap?: string;
  width?: string;
  height?: string;
}

export const Input: FC<InputProps> = ({ label, gap, ...rest }) => {
  return (
    <S.InputWrapper gap={gap} $isLabel={!!label}>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.Input id={label} {...rest} />
    </S.InputWrapper>
  );
};
