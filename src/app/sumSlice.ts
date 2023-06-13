import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const sumSlice = createSlice({
  name: "sum",
  initialState: 1000.0 as number,
  reducers: {
    reduceSum: (state, action: PayloadAction<number>) => {
      return (state -= action.payload);
    },
  },
});

const { actions, reducer } = sumSlice;

export const { reduceSum } = actions;

export default reducer;
