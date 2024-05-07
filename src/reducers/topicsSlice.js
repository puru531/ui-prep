import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTopics: [
    {
      id: 1,
      name: "Fundamentals",
      course_id: "js",
    },
    {
      id: 2,
      name: "Basics of JavaScript",
      course_id: "js",
    },
  ],
  currentTopic: {}
};

const topicsSlice = createSlice({
  name: "topics", //name of the slice
  initialState, // initial state of the slice
  reducers: {
    // all functions to set the data to state globally
    setTopics(state, action) {
      state.allTopics = action.payload;
    },
    setCurrentTopic(state, action) {
      state.currentTopic = action.payload;
    }
  },
});

export const { setTopics, setCurrentTopic } = topicsSlice.actions; //topicsSlice.actions gives all the functions (reducers)
export default topicsSlice.reducer;
