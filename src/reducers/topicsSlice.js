import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allTopics: [],
  currentTopic: {},
};

const topicsSlice = createSlice({
  name: "topics", //name of the slice
  initialState, // initial state of the slice
  reducers: {
    // all functions to set the data to state globally
    setAllTopics(state, action) {
      state.allTopics = action.payload;
    },
    setCurrentTopic(state, action) {
      state.currentTopic = action.payload;
    },
  },
});

export const {
  setAllTopics,
  setJsTopics,
  setReactTopics,
  setCurrentTopic,
  getCurrentTopic,
} = topicsSlice.actions; //topicsSlice.actions gives all the functions (reducers)
export default topicsSlice.reducer;
