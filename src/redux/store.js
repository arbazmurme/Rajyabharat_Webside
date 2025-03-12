import { configureStore } from "@reduxjs/toolkit";
import categoryreducer from "./category/CategorySlice";
import districtReducer from "./district/districtSlice";
import newsreducer from "./news/NewsSlice";

export const store = configureStore({
  reducer: {
    category: categoryreducer,
    news: newsreducer,
    districts: districtReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
