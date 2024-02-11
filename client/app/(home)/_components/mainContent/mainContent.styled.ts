import styled from 'styled-components';
import { colors } from '@/lib/colors';
import Image from 'next/image';
import Link from 'next/link';

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

export const AuctionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 54px;
  width: 100%;
`;

export const AuctionListElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const AuctionInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 44px;
`;

export const AuctionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const AuctionDescription = styled.p`
  margin: 0;
  font-size: 23px;
  font-weight: 400;
`;

export const AuctionImage = styled(Image)`
  display: block;
  position: static;
  border-radius: 10px;
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 44px;
  right: 61px;
`;

export const ListItemLink = styled(Link)`
  display: block;
  justify-self: end;
`;
