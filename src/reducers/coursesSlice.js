import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCourses: [],
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setAllCourses(state, action) {
      state.allCourses = action.payload;
    },
  },
});

export const { setAllCourses } = courseSlice.actions;
export default courseSlice.reducer;
