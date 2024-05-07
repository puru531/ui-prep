import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../reducers/topicsSlice";

const store = configureStore({
  reducer: {
    topics: topicsReducer,
  },
});

export default store;
