import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Baseurl = process.env.NEXT_PUBLIC_API_URL

const initialState = {
  subcategorytotal:typeof window !== "undefined" && localStorage.getItem("subcategorytotal")
    ? JSON.parse(localStorage.getItem("subcategorytotal")).sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      )
    : [],
  subCatthumb: "",
  isSubCatthumbLoading: true,
  isSubCatLoading: true,
  deleteSubCatLoading: true,
  checkSlugurl: true,
};

export const getSubCategory = createAsyncThunk(
  "subCategory/getSubCategory",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/subcategory/all`;
      const resp = await axios(url);
      return resp.data.subcategories;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

const SubCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubCategory.pending, (state) => {
        state.isSubCatLoading = true;
      })
      .addCase(getSubCategory.fulfilled, (state, action) => {
        state.subcategorytotal = action.payload.sort((a, b) =>
          a.createdAt > b.createdAt ? 1 : -1
        );

        typeof window !== "undefined" && localStorage.setItem(
          "subcategorytotal",
          JSON.stringify(state.subcategorytotal)
        );
        state.isSubCatLoading = false;
      })
      .addCase(getSubCategory.rejected, (state) => {
        state.isSubCatLoading = true;
      });
  },
});

export const {} = SubCategorySlice.actions;
export default SubCategorySlice.reducer;
