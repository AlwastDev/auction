import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { Auction } from '@/lib/models';
import { getAuctions, IGetAuctionsResponse } from '@/lib/services/auction-service';

interface IAuctionsRequestProps {
  page: number;
  limit?: number;
  minRate?: number;
  maxRate?: number;
}

interface IInitialState {
  auctions: Auction[];
  totalPage: number;
  minRate: number;
  maxRate: number;
  loading: boolean;
  error: string;
}

const InitialState: IInitialState = {
  auctions: [],
  totalPage: 0,
  minRate: 1,
  maxRate: 99998,
  loading: false,
  error: '',
};

const createGallerySlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const auctionsSlice = createGallerySlice({
  name: 'auctions',
  initialState: InitialState,
  reducers: (create) => {
    const createThunk = create.asyncThunk.withTypes<{
      rejectValue: string;
    }>();

    return {
      changeMinRate: create.reducer<{ minRate: number }>((state, { payload: { minRate } }) => {
        state.minRate = minRate;
      }),
      changeMaxRate: create.reducer<{ maxRate: number }>((state, { payload: { maxRate } }) => {
        state.maxRate = maxRate;
      }),
      getPaginatedAuctions: createThunk<IGetAuctionsResponse, IAuctionsRequestProps>(
        async ({ page, limit = 3, minRate, maxRate }, thunkAPI) => {
          try {
            return await getAuctions(page, limit, minRate, maxRate);
          } catch (e) {
            return thunkAPI.rejectWithValue('Api Error');
          }
        },
        {
          pending: (state) => {
            state.loading = true;
          },
          fulfilled: (state, { payload }) => {
            state.auctions = payload.rows;
            state.totalPage = payload.totalPage;
          },
          rejected: (state, { payload }) => {
            state.error = payload as string;
          },
          settled: (state) => {
            state.loading = false;
          },
        },
      ),
    };
  },
});

export const { getPaginatedAuctions, changeMaxRate, changeMinRate } = auctionsSlice.actions;

export default auctionsSlice.reducer;
