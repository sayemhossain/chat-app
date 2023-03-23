import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery({
    baseQuery: process.env.REACT_APP_API_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
