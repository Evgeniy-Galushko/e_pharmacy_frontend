import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const requestForMedicines = createAsyncThunk(
  "product/requestMedicines",
  async (request, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = state.auth.token;
      // if (token) {
      //   setAuthHeader(token);
      // }
      const data = await axios.get("/api/products/");
      // console.log(data.data.data);
      // setAuthHeader(data.data.token);
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestById = createAsyncThunk(
  "product/requestById",
  async (id, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = state.auth.token;
      // if (token) {
      //   setAuthHeader(token);
      // }
      const data = await axios.get(`/api/products/${id}`);
      // console.log(data.data.data);
      // setAuthHeader(data.data.token);
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
