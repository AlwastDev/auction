import { configureStore } from '@reduxjs/toolkit';

import auctionReducer from './getAuctionsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auctions: auctionReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
