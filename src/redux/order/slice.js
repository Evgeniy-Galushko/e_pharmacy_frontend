import { createSlice } from "@reduxjs/toolkit";
import { addToCartRequest, requestAllsOder } from "./operations.js";

const orderSlise = createSlice({
  name: "order",
  initialState: {
    basket: [],
    updateBasket: {},
    order: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestAllsOder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestAllsOder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.basket = action.payload;
      })
      .addCase(requestAllsOder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addToCartRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCartRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.order = action.payload;
      })
      .addCase(addToCartRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlise.reducer;
