import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import Product from "../Product";
import { RootState } from "./store";

const cartSlice = createSlice({
  name: "cart",
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

const { actions, reducer } = cartSlice;
export const { addProduct, removeProduct } = actions;
export const selectProducts = (state: RootState) => state.products;
export default reducer;

//That's really cool but not necessary since you can keep the totalPrice as a property of cart instead of looping over it every time.
export const selectTotalPrice = createSelector(selectProducts, (products) => {
  return products.reduce(
    (totalPrice, product) => totalPrice + product.price,
    0
  );
});
