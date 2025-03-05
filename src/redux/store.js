import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Athentication/AuthSlice";
import categoryreducer from "./category/CategorySlice";
import subCategoryreducer from "./subcategory/SubCategorySlice";
import universaltagreducer from "./universaltag/universalTagSlice";
import categoryTagreducer from "./categorytag/CategoryTagSlice";
import newsreducer from "./news/NewsSlice";
import reporterreducer from "./reporters/ReporterSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    category: categoryreducer,
    subCategory: subCategoryreducer,
    universaltag: universaltagreducer,
    categoryTag: categoryTagreducer,
    news: newsreducer,
    reporter: reporterreducer,
  },
});
