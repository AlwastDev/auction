'use client';

import { ButtonHTMLAttributes, FC } from 'react';

import * as S from './button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return <S.Button {...props}>{props.children}</S.Button>;
};
