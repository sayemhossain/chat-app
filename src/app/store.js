import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import conversationsSliceReducer from "../features/conversations/conversationsSlice";
import messagesSliceReducer from "../features/messages/messagesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    auth: conversationsSliceReducer,
    auth: messagesSliceReducer,
  },
  devTools: !process.env.NODE_ENV === "production",
  middleware: getDefaultMiddlewares().concat(apiSlice.middleware),
});
