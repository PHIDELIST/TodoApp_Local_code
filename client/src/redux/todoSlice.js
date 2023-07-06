
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ui: JSON.parse(localStorage.getItem("ui")) || "profile",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addUI: (state, action) => {
      state.ui = action.payload;
    },
    viewUI: (state, action) => {
      state.ui = action.payload;
    },
    profileUI: (state, action) => {
      state.ui = action.payload;
    },
  },
});

export const { addUI, viewUI, profileUI } = uiSlice.actions;
export default uiSlice.reducer;
