import { createSlice } from "@reduxjs/toolkit";
import {
  currentNearestStore,
  currentReviews,
  currentStores,
  loginRequest,
  registrationRequest,
} from "./operations.js";

const userSlise = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
      phoneNumber: null,
    },
    nearest: [],
    reviews: [],
    stores: [],
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationRequest.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phoneNumber = action.payload.phoneNumber;
        state.token = action.payload.accessToken;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phoneNumber = action.payload.phoneNumber;
        state.token = action.payload.accessToken;
      })
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
      })
      .addCase(currentReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(currentReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(currentStores.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentStores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.stores = action.payload;
      })
      .addCase(currentStores.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlise.reducer;
