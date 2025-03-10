import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Baseurl = process.env.NEXT_PUBLIC_API_URL;

const initialState = {
  allCategorys:
    typeof window !== "undefined" && localStorage.getItem("allCategorys")
      ? JSON.parse(localStorage.getItem("allCategorys")).sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      )
      : [],
  categoryLoading: true,
};

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/category/all`;
      const resp = await axios(url);
      return resp.data.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.allCategorys = action.payload.sort((a, b) =>
          a.priority - b.priority
        )
        localStorage.setItem(
          "allCategorys",
          JSON.stringify(state.allCategorys)
        );
        state.categoryLoading = false;
      })
      .addCase(getCategory.rejected, (state) => {
        state.categoryLoading = true;
      });
  },
});

export const { } = CategorySlice.actions;
export default CategorySlice.reducer;
