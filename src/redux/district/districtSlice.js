import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Baseurl = process.env.NEXT_PUBLIC_API_URL;

export const fetchDistricts = createAsyncThunk(
  "category/getCategory",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/category/all`;
      const resp = await axios(url, {
        credentials: "include",
      });
      return resp.data.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);


const districtSlice = createSlice({
  name: "districts",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDistricts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDistricts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDistricts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default districtSlice.reducer;
