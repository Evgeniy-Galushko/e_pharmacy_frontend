import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartRequest,
  deleteProductRequest,
  orderRequest,
  requestAllsOder,
} from "./operations.js";

const orderSlise = createSlice({
  name: "order",
  initialState: {
    basket: [],
    updateBasket: {},
    deleteProduct: null,
    order: null,
    placedOrder: null,
    isLoading: false,
    error: null,
    errorBasket: null,
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
        state.errorBasket = null;
        state.order = action.payload;
      })
      .addCase(addToCartRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.errorBasket = action.payload;
      })
      .addCase(orderRequest.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(orderRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.placedOrder = action.payload;
      })
      .addCase(orderRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteProductRequest.pending, (state) => {
        state.deleteProduct = null;
        state.isLoading = true;
      })
      .addCase(deleteProductRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.deleteProduct = action.payload;
      })
      .addCase(deleteProductRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  reducers: {
    resetError(state) {
      state.errorBasket = null;
    },
    updateOrderQuantity(state, action) {
      const { _id, quantity } = action.payload;
      state.basket = state.basket.map((item) => {
        if (item._id === _id) {
          return { ...item, quantity: quantity };
        }
        return item;
      });
    },
    clearDeleteProduct(state) {
      state.deleteProduct = null;
    },
  },
});

export const { resetError, updateOrderQuantity, clearDeleteProduct } =
  orderSlise.actions;

export default orderSlise.reducer;
