import qs from 'query-string';

import { api } from '@/lib/services/api';
import { Auction } from '@/lib/models';
import { toast } from 'sonner';

const route = 'auctions';

export const getAuctions = async (page: number, limit: number, minRate?: number, maxRate?: number) => {
  const url = qs.stringifyUrl(
    {
      url: `${route}`,
      query: { page, limit, minRate, maxRate },
    },
    { skipEmptyString: true },
  );

  const { data: auctions } = await api.get<Auction[]>(url);

  if (!auctions) {
    throw new Error('Auth error');
  }

  return auctions;
};

export const createAuction = async (description: string, initialRate: number, images: string[]) => {
  const response = await api.post(`${route}`, { description, initialRate, images });

  if (!response || !response.data) {
    throw new Error('Auth error');
  }

  toast.success('The auction was successfully created');
};

export const editAuction = async (id: string, description: string, initialRate: number, images: string[]) => {
  const response = await api.put(`${route}`, { id, description, initialRate, images });

  if (!response || !response.data) {
    throw new Error('Auth error');
  }

  toast.success('The auction was successfully edited');
};
