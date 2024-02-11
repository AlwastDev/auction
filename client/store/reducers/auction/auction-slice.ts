import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const auctionSlice = createSlice({
  name: 'auctionSlice',
  initialState: {
    isOwner: false,
  },
  reducers: {
    switchState: (state, action: PayloadAction<boolean>) => {
      state.isOwner = action.payload;
    },
  },
});

export const { switchState } = auctionSlice.actions;

export default auctionSlice.reducer;
