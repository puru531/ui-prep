import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jsTopics: [],
  reactTopics: [],
  currentTopic: {},
};

const topicsSlice = createSlice({
  name: "topics", //name of the slice
  initialState, // initial state of the slice
  reducers: {
    // all functions to set the data to state globally
    setJsTopics(state, action) {
      state.jsTopics = action.payload;
    },
    setReactTopics(state, action) {
      state.reactTopics = action.payload;
    },
    setCurrentTopic(state, action) {
      state.currentTopic = action.payload;
    },
  },
});

export const { setJsTopics, setReactTopics, setCurrentTopic, getCurrentTopic } =
  topicsSlice.actions; //topicsSlice.actions gives all the functions (reducers)
export default topicsSlice.reducer;
