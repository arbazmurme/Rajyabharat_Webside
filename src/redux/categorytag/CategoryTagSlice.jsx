import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Baseurl = process.env.NEXT_PUBLIC_API_URL;

const initialState = {
  categoryTagtotal:
    typeof window !== "undefined" && localStorage.getItem("categoryTagtotal")
      ? JSON.parse(localStorage.getItem("categoryTagtotal"))
      : [],
  catTagthumb: "",
  isCatTagthumbLoading: true,
  iscategoryTagLoading: true,
  deletecategoryTagLoading: true,
  checkSlugurl: true,
};

export const getCategoryTag = createAsyncThunk(
  "categoryTag/getCategoryTag",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/categorytag/all`;
      const resp = await axios(url);
      return resp.data.categorytags;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

const CategoryTagSlice = createSlice({
  name: "categoryTag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryTag.pending, (state) => {
        state.iscategoryTagLoading = true;
      })
      .addCase(getCategoryTag.fulfilled, (state, action) => {
        state.categoryTagtotal = action.payload;

        typeof window !== "undefined" &&
          localStorage.setItem(
            "categoryTagtotal",
            JSON.stringify(state.categoryTagtotal)
          );
        state.iscategoryTagLoading = false;
      })
      .addCase(getCategoryTag.rejected, (state) => {
        state.iscategoryTagLoading = true;
      });
  },
});

export const {} = CategoryTagSlice.actions;
export default CategoryTagSlice.reducer;
