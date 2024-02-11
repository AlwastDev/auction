import qs from 'query-string';
import { toast } from 'sonner';

import { api } from '@/lib/services/api';
import { Rate } from '@/lib/models';

const route = 'rates';

interface IGetRatesResponse {
  rows: Rate[];
  totalPage: number;
}

export const getRates = async (auctionId: string): Promise<IGetRatesResponse> => {
  const url = qs.stringifyUrl(
    {
      url: `/${route}/${auctionId}`,
    },
    { skipEmptyString: true },
  );

  const response = await api.get<IGetRatesResponse>(url);

  if (!response || !response.data) {
    toast.error(response.message);
  }

  return response.data as IGetRatesResponse;
};

export const createRate = async (auctionId: string, rate: number) => {
  const response = await api.post<Rate>(`${route}/${auctionId}`, { rate });

  if (!response || !response.data) {
    toast.error(response.message);
  }

  return response.data;
};
