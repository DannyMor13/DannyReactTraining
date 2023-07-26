import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import Product from "../Product";
import { RootState } from "./store";

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
export const selectProducts = (state: RootState) => state.products;
export default reducer;

export const selectTotalPrice = createSelector(selectProducts, (products) => {
  return products.reduce(
    (totalPrice, product) => totalPrice + product.price,
    0
  );
});
