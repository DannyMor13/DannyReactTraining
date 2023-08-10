import { configureStore } from "@reduxjs/toolkit";
import sumSlice from "./sumSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    sum: sumSlice,
    products: cartSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
