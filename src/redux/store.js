import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesSlice";
import searchReducer from "./searchSlice";

export default configureStore({
  reducer: {
    countries: countriesReducer,
    search: searchReducer,
  },
});
