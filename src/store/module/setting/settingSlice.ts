import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSetting: true,
  tabIndex: 0,
};

const setting = createSlice({
  name: "setting",
  initialState,
  reducers: {
    onChangeIsSetting(state, action) {
      state.isSetting = action.payload;
    },
    onChangeTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
    resetState: () => initialState,
  },
});

export default setting;
