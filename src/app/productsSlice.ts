import { createSlice } from "@reduxjs/toolkit";
import Product from "../Product";

const productsSlice = createSlice({
  name: "products",
  initialState: [] as Product[],
  reducers: {
    //Add a type to the action. It has 'any' type
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer } = productsSlice;
export const { addProduct, removeProduct } = actions;
export default reducer;
