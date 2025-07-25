import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://e-pharmacy-backend-34d4.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const requestAllsOder = createAsyncThunk(
  "user/allsOder",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;
      if (token) {
        setAuthHeader(token);
      }
      const data = await axios.get("/api/cart/");
      // console.log(data.data.data.basket);
      // clearAuthHeader();
      return data.data.data.basket;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToCartRequest = createAsyncThunk(
  "user/addToCart",
  async (product, thunkAPI) => {
    const { id, quantity } = product;
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;
      if (token) {
        setAuthHeader(token);
      }
      const data = await axios.put(
        `/api/cart/update?id=${id}&quantity=${quantity}`
      );
      console.log(data.data.data);
      // clearAuthHeader();
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const orderRequest = createAsyncThunk(
  "user/order",
  async (order, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;
      if (token) {
        setAuthHeader(token);
      }
      const data = await axios.post(`/api/cart/checkout`, order);
      console.log(data.data.data);
      // clearAuthHeader();
      // return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
