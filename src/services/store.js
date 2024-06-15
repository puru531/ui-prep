import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../reducers/topicsSlice";
import coursesReducer from "../reducers/coursesSlice";

const store = configureStore({
  reducer: {
    topics: topicsReducer,
    courses: coursesReducer,
  },
});

export default store;
