import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabIndex: 0,
  subTabIndex: 0,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    onChangeTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
    onChangeSubTabIndex(state, action) {
      state.subTabIndex = action.payload;
    },
    resetState: () => initialState,
  },
});

export default tabSlice;
