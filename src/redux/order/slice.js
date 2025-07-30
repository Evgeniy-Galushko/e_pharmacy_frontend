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
      state.error = null;
    },
    updateOrderQuantity(state, action) {
      const { _id, quantity } = action.payload;

      const foundObject = state.basket.filter((basket) => basket._id === _id);
      console.log(foundObject);
      const remainingObjects = state.basket.filter(
        (basket) => basket._id !== _id
      );
      const newObjekt = [{ ...foundObject[0], quantity: quantity }];

      const newArray = [...remainingObjects, newObjekt[0]];
      // console.log(newArray);
      state.basket = newArray;
    },
  },
});

export const { resetError, updateOrderQuantity } = orderSlise.actions;

export default orderSlise.reducer;
