import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Baseurl = process.env.NEXT_PUBLIC_API_URL

const initialState = {
  universalTags: typeof window !== "undefined" && localStorage.getItem("universalTags")
    ? JSON.parse(localStorage.getItem("universalTags")).sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      )
    : [],
  uniTagthumb: "",
  isUniTagthumbLoading: true,
  universalTagLoading: true,
  deleteUniTagLoading: true,
  checkSlugurl: true,
};

export const getUniversalTag = createAsyncThunk(
  "universaltag/getUniversalTag",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/universaltag/all`;
      const resp = await axios(url);
      return resp.data.universaltags;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

const UniversalTagSlice = createSlice({
  name: "universaltag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUniversalTag.pending, (state) => {
        state.universalTagLoading = true;
      })
      .addCase(getUniversalTag.fulfilled, (state, action) => {
        state.universalTags = action.payload.sort((a, b) =>
          a.createdAt > b.createdAt ? 1 : -1
        );

        typeof window !== "undefined" && localStorage.setItem(
          "universalTags",
          JSON.stringify(state.universalTags)
        );
        state.universalTagLoading = false;
      })
      .addCase(getUniversalTag.rejected, (state) => {
        state.universalTagLoading = true;
      });
  },
});

export const {} = UniversalTagSlice.actions;
export default UniversalTagSlice.reducer;
