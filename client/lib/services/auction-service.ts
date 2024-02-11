import qs from 'query-string';
import { toast } from 'sonner';

import { api } from '@/lib/services/api';
import { Auction, AuctionStatus } from '@/lib/models';

const route = 'auctions';

export const getAuctions = async (page: number, limit: number, minRate?: number, maxRate?: number) => {
  const url = qs.stringifyUrl(
    {
      url: `/${route}`,
      query: { page, limit, minRate, maxRate, getLastRate: true, getMainImage: true },
    },
    { skipEmptyString: true },
  );

  const response = await api.get<Auction[]>(url);

  if (!response || !response.data) {
    toast.error(response.message);
  }

  return response.data;
};

export const getAuction = async (id: string) => {
  const url = qs.stringifyUrl(
    {
      url: `${route}/${id}`,
      query: { getLastRate: true, getImages: true },
    },
    { skipEmptyString: true },
  );

  const response = await api.get<Auction>(url);

  if (!response || !response.data) {
    toast.error(response.message);
  }

  return response.data;
};

export const createAuction = async (description: string, initialRate: number) => {
  const response = await api.post(`${route}`, { description, initialRate, status: AuctionStatus.CREATED });

  if (!response || !response.data) {
    return toast.error(response.message);
  }

  return response;
};

export const editAuction = async (id: string, description: string) => {
  const response = await api.patch(`${route}/${id}`, { description });

  if (!response || !response.data) {
    return toast.error(response.message);
  }

  return response;
};
