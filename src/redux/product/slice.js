import { createSlice } from "@reduxjs/toolkit";
import { requestById, requestForMedicines } from "./operations.js";

const productSlise = createSlice({
  name: "product",
  initialState: {
    products: [],
    oneMedicine: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestForMedicines.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestForMedicines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(requestForMedicines.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(requestById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.oneMedicine = action.payload;
      })
      .addCase(requestById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlise.reducer;
