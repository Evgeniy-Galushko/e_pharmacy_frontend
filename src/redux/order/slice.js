import { createSlice } from "@reduxjs/toolkit";

const orderSlise = createSlice({
  name: "order",
  initialState: {
    basket: [],
    updateBasket: {},
    order: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase((state, action) => {
      state.basket = action.payload;
    });
  },
});

export default orderSlise.reducer;
