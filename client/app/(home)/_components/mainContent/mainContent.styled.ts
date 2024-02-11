import styled from 'styled-components';
import { colors } from '@/lib/colors';
import Image from 'next/image';

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
`;

export const AuctionListElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

export const AuctionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 44px;
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
