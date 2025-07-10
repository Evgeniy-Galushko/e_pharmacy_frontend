import { createSlice } from "@reduxjs/toolkit";

const userSlise = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
      phoneNumber: null,
    },
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase((state, action) => {
      state.user.name = action.payload.name;
    });
  },
});

export default userSlise.reducer;
