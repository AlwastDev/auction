'use client';

import { FC, InputHTMLAttributes } from 'react';

import * as S from './input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

export const Input: FC<InputProps> = (props) => {
  return <S.Input {...props}>{props.children}</S.Input>;
};
