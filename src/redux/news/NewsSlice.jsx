import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Baseurl = process.env.NEXT_PUBLIC_API_URL;

const initialState = {
  newsTotal: [],
  latestNews: [],
  sliderNews: [],
  brackingNewsAll: [],
  districtNews: [],
  newsByCategory: [],
  groupedNews: {},

  isnewsSliderLoading: true,
  isNewsthumbLoading: true,
  isnewsiconLoading: true,

  newsLoading: true,
  deleteNewsLoading: true,
  checkSlugurl: true,
};

export const getNewsAdmin = createAsyncThunk(
  "newsAdmin/getNewsAdmin",
  async (thunkAPI) => {
    try {  
      const url = `${Baseurl}/api/v1/news/all`;
      const resp = await axios(url);;
      return resp.data.news;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const getNewsByCategory = createAsyncThunk(
  "NewsByCategory/getNewsByCategory",
  async (categoryId, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/news/byCategory`;
      const resp = await axios.post(url, categoryId);
      return resp.data.news;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const fetchDistrictNews = createAsyncThunk(
  "districtNews/fetchDistrictNews",
  async (selectedDistrict, { rejectWithValue }) => {
    try {
      const url = `${Baseurl}/api/v1/news/byCategorydistrict-news?district=${selectedDistrict}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const NewsAdminSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsAdmin.pending, (state) => {
        state.newsLoading = true;
      })
      .addCase(getNewsAdmin.fulfilled, (state, action) => { 
        state.newsTotal = action.payload.slice().reverse();
        state.latestNews = state.newsTotal.slice(0, 7);
        state.sliderNews = action.payload
          .filter((news) => news.sliderShow === true)
          .reverse()
          .slice(0, 4);
        state.brackingNewsAll = action.payload
          .filter((news) => news.breakingNewsShow === true)
          .reverse()
          .slice(0, 6);

        state.groupedNews = action.payload.reduce((acc, item) => {
          if (!acc[item.categoryId]) {
            acc[item.categoryId] = [];
          }
          acc[item.categoryId].push(item);
          return acc;
        }, {});

        state.newsLoading = false;
      })
      .addCase(getNewsAdmin.rejected, (state) => {
        state.newsLoading = true;
      });
      builder
      .addCase(getNewsByCategory.fulfilled, (state, action) => { 
        state.newsByCategory = action.payload;
        state.newsLoading = false;
      })
      builder
      .addCase(fetchDistrictNews.fulfilled, (state, action) => {
        state.loading = false;
        state.districtNews = action.payload;
      })
  },
});

export const {} = NewsAdminSlice.actions;
export default NewsAdminSlice.reducer;
