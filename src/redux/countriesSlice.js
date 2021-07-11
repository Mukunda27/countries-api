import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ALL_COUNTRIES_API,
  ALL_COUNTRIES_API_BY_REGION,
  ALL_COUNTRIES_API_BY_NAME,
} from "../api-endpoint";

export const getCountriesAsync = createAsyncThunk(
  "countries/getCountriesAsync",
  async () => {
    const response = await fetch(ALL_COUNTRIES_API);
    if (response.ok) {
      const countries = await response.json();
      return { countries };
    } else {
      return [];
    }
  }
);

export const getCountriesAsyncByRegion = createAsyncThunk(
  "countries/getCountriesAsyncByRegion",
  async (payload) => {
    const response = await fetch(
      `${ALL_COUNTRIES_API_BY_REGION}${payload.region}`
    );
    if (response.ok) {
      const countries = await response.json();
      return { countries };
    } else {
      return [];
    }
  }
);

export const getCountriesAsyncByName = createAsyncThunk(
  "countries/getCountriesAsyncByName",
  async (payload) => {
    let response;
    if (payload.name) {
      response = await fetch(`${ALL_COUNTRIES_API_BY_NAME}${payload.name}`);
    } else {
      response = await fetch(ALL_COUNTRIES_API);
    }
    if (response.ok) {
      const countries = await response.json();
      return { countries };
    } else {
      return [];
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: [],
  extraReducers: {
    [getCountriesAsync.fulfilled]: (state, action) => {
      return action.payload.countries;
    },
    [getCountriesAsyncByRegion.fulfilled]: (state, action) => {
      return action.payload.countries;
    },
    [getCountriesAsyncByName.fulfilled]: (state, action) => {
      return action.payload.countries;
    },
  },
});

export default countriesSlice.reducer;
