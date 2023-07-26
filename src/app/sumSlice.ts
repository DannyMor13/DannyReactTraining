import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

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
export const selectSum = (state: RootState) => state.sum;

export default reducer;
