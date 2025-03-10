import { configureStore } from "@reduxjs/toolkit";
import categoryreducer from "./category/CategorySlice";
import newsreducer from "./news/NewsSlice";

export const store = configureStore({
  reducer: {
    category: categoryreducer,
    news: newsreducer,
  },
});
