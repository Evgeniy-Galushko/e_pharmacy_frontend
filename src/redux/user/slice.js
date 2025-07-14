import { createSlice } from "@reduxjs/toolkit";
import { currentNearestStore } from "./operations.js";

const userSlise = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
      phoneNumber: null,
    },
    nearest: [],
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(currentNearestStore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentNearestStore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.nearest = action.payload;
      })
      .addCase(currentNearestStore.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlise.reducer;
