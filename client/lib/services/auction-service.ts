import qs from 'query-string';
import { toast } from 'sonner';

import { api } from '@/lib/services/api';
import { Auction, AuctionStatus, Image } from '@/lib/models';

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

  if (!response || !response.data) {
    toast.error(response.message);
  }

  return response.data as IGetAuctionsResponse;
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

export const createAuction = async (description: string, images: Image[], initialRate: number) => {
  const response = await api.post(`${route}`, { description, initialRate, images });

  if (!response || !response.data) {
    toast.error(response.message);
    return response;
  }

  toast.success('The auction was created successfully');

  return response;
};

export const editAuction = async (
  id: string,
  description: string,
  status: AuctionStatus,
  images: Image[],
  initialRate: number,
) => {
  const response = await api.patch(`${route}/${id}`, { description, status, images, initialRate });

  if (!response || !response.data) {
    toast.error(response.message);
    return response;
  }

  toast.success('The auction was changed successfully');

  return response;
};
