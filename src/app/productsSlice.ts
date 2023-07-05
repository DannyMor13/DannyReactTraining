import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../Product";

const productsSlice = createSlice({
  name: "products",
  initialState: [] as Product[],
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer } = productsSlice;
export const { addProduct, removeProduct } = actions;
export default reducer;
