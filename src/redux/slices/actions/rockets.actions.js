import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets", 
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.spacexdata.com/v4/rockets");
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.message || "Failed to fetch rockets");
    }
  }
);
