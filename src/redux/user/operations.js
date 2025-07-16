import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://e-pharmacy-backend-34d4.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registrationRequest = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const data = await axios.post("/api/user/register", user);
      // console.log(data.data);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentNearestStore = createAsyncThunk(
  "user/currentNearest",
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = state.auth.token;
      // if (token) {
      //   setAuthHeader(token);
      // }
      const data = await axios.get("/api/stores/nearest");
      // console.log(data.data.data);
      // setAuthHeader(data.data.token);
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentReviews = createAsyncThunk(
  "user/currentReviews",
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = state.auth.token;
      // if (token) {
      //   setAuthHeader(token);
      // }
      const data = await axios.get("/api/customer-reviews/");
      // console.log(data.data.data);
      // setAuthHeader(data.data.token);
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentStores = createAsyncThunk(
  "user/currentStores",
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = state.auth.token;
      // if (token) {
      //   setAuthHeader(token);
      // }
      const data = await axios.get("/api/stores/");
      // console.log(data.data.data);
      // setAuthHeader(data.data.token);
      return data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
