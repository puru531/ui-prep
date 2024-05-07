import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: [
    {
      id: "1",
      courseId: "js",
      name: "Fundamentals",
    },
    {
      id: "2",
      courseId: "js",
      name: "Basics of JavaScript",
    },
  ],
};

const topicsSlice = createSlice({
  name: "topics", //name of the slice
  initialState, // initial state of the slice
  reducers: {
    // all functions to set the data to state globally
    setTopics(state, action) {
      state.topics = action.payload;
    },
  },
});

export const { setTopics } = topicsSlice.actions; //topicsSlice.actions gives all the functions (reducers)
export default topicsSlice.reducer;
