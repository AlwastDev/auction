'use client';

import styled from 'styled-components';

import { colors } from '@/lib/colors';

export const Header = styled.h2`
    font-weight: 700;
    font-size: 60px;
    line-height: 120%;
    text-align: center;
    color: ${colors.black}
}`;

export const ContentSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 15px;
  width: 100%;
  min-height: 500px;
  background-color: ${colors.blue};
  padding: 63px 30px 134px;
  margin-bottom: 30px;
  z-index: 0;
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 44px;
  right: 61px;
`;

export const BetList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  width: 96%;
  padding: 0;
  margin: 0 auto;
`;

export const BetListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 100%;
`;

export const ListItemInfo = styled.p`
  display: block;
  font-size: 23px;
  font-weight: 500;
`;
