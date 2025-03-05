import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Baseurl = process.env.NEXT_PUBLIC_API_URL;

const initialState = {
  newsTotal: [],
  latestNews: [],

  latestNewsFive: [],
  latestNewsSix: [],
  latestFourNews: [],
  latestNewxtFourNews: [],
  technologyNews: [],
  sliderNews: [],
  technologyNewsFour: [],

  travellingNewsThree: [],
  travellingNewsOne: [],
  foodNewsThree: [],
  foodNewsOne: [],
  healthNewsThree: [],
  healthNewsOne: [],

  newsSlider: "",
  newsthumb: "",
  newsicon: "",

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
      const resp = await axios(url);
      return resp.data.news;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const newsUpdate = createAsyncThunk(
  "newsAdmin/newsUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/news/newsupdate/${formData.newsid}`;
      const resp = await axios.put(url, formData, config);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("news Not create");
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
        state.latestNews = state.newsTotal.slice(0, 12);
        state.latestNewsFive = state.newsTotal.slice(0, 5);
        state.latestNewsSix = state.newsTotal.slice(0, 6);
        state.latestFourNews = state.newsTotal.slice(1, 5);
        state.latestNewxtFourNews = state.newsTotal.slice(6, 10);
        state.technologyNews = state.newsTotal.filter(
          (news) => news.categoryId === "642ff5f1444bae4057baff43"
        );
        state.technologyNewsFour = state.newsTotal
          .filter((news) => news.categoryId === "642ff5f1444bae4057baff43")
          .slice(0, 4);
        state.travellingNewsThree = state.newsTotal
          .filter((news) => news.categoryId === "642ff5f1444bae4057baff43")
          .slice(0, 3);
        state.travellingNewsOne = state.newsTotal
          .filter((news) => news.categoryId === "642ff5f1444bae4057baff43")
          .slice(0, 1);
        state.foodNewsThree = state.newsTotal
          .filter((news) => news.categoryId === "642fcfeb444bae4057bafd2c")
          .slice(0, 3);
        state.foodNewsOne = state.newsTotal
          .filter((news) => news.categoryId === "642fcfeb444bae4057bafd2c")
          .slice(0, 1);
        state.healthNewsThree = state.newsTotal
          .filter((news) => news.categoryId === "642fcfd5444bae4057bafd29")
          .slice(0, 3);
        state.healthNewsOne = state.newsTotal
          .filter((news) => news.categoryId === "642fcfd5444bae4057bafd29")
          .slice(0, 1);
        state.sliderNews = state.newsTotal
          .filter((news) => news.sliderShow === true)
          // .slice()
          // .reverse()
          .slice(0, 5);

        state.newsLoading = false;
      })
      .addCase(getNewsAdmin.rejected, (state) => {
        state.newsLoading = true;
      });

    builder
      .addCase(newsUpdate.pending, (state) => {
        state.newsLoading = true;
      })
      .addCase(newsUpdate.fulfilled, (state, action) => {
        if (action.payload.success) {
          // state.newsTotal = state.newsTotal.filter(
          //   (news) => news._id !== action.payload.news._id
          // );
          state.newsTotal = [...state.newsTotal, action.payload.news + 1]
            .slice()
            .reverse();
        }
  
        state.newsLoading = false;
      })
      .addCase(newsUpdate.rejected, (state) => {
        state.newsLoading = true;
      });
  },
});

export const {} = NewsAdminSlice.actions;
export default NewsAdminSlice.reducer;
