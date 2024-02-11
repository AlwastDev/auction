import { configureStore } from '@reduxjs/toolkit';

import auction from './reducers/auction/auction-slice';

export const makeStore = () => {
  return configureStore({
    reducer: { auction },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
