import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: "",
    categoryFilter: "",
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
      state.searchInput = "";
    },
  },
});

export const { setSearchInput, setCategoryFilter } = searchSlice.actions;

export default searchSlice.reducer;
