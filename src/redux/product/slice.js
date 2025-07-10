import { createSlice } from "@reduxjs/toolkit";

const productSlise = createSlice({
  name: "product",
  initialState: {
    product: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase((state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlise.reducer;
