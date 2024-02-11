import qs from 'query-string';

import { api } from '@/lib/services/api';
import { Auction, AuctionStatus } from '@/lib/models';

const route = 'auctions';

export interface IGetAuctionsResponse {
  rows: Auction[];
  totalPage: number;
}

export const getAuctions = async (
  page: number,
  limit: number,
  minRate?: number,
  maxRate?: number,
): Promise<IGetAuctionsResponse> => {
  const url = qs.stringifyUrl(
    {
      url: `/${route}`,
      query: { page, limit, minRate, maxRate, getLastRate: true, getMainImage: true },
    },
    { skipEmptyString: true },
  );

  const response = await api.get<IGetAuctionsResponse>(url);

  if (!response.data.data) {
    throw new Error('Auth error');
  }

  return response.data.data;
};

export const getAuction = async (id: string): Promise<Auction> => {
  const url = qs.stringifyUrl(
    {
      url: `${route}/${id}`,
      query: { getLastRate: true, getImages: true },
    },
    { skipEmptyString: true },
  );

  const {
    data: { data: auction },
  } = await api.get<Auction>(url);

  if (!auction) {
    throw new Error('Auth error');
  }

  return auction;
};

export const createAuction = async (description: string, initialRate: number) => {
  const response = await api.post(`${route}`, { description, initialRate, status: AuctionStatus.CREATED });

  if (!response || !response.data) {
    throw new Error('Auth error');
  }

  return response;
};

export const editAuction = async (id: string, description: string) => {
  const response = await api.patch(`${route}/${id}`, { description });

  if (!response || !response.data) {
    throw new Error('Auth error');
  }

  return response;
};
