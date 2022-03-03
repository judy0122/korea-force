import { createSlice } from "@reduxjs/toolkit";
import { TabOrderType } from "src/types/order";

const initialState: {
  tabIndex: number;
  tabType: TabOrderType;
  subTabIndex: number;
  counts: number[];
} = {
  tabIndex: 1,
  tabType: "DELIVERY",
  subTabIndex: 0,
  counts: [0, 0, 0, 0],
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    onChangeTab(state, action) {
      state.tabIndex = action.payload.tabIndex;
      state.tabType = action.payload.tabType;
    },
    onChangeSubTabIndex(state, action) {
      state.subTabIndex = action.payload;
    },
    onChangeCount(state, action) {
      state.counts = action.payload;
    },
    resetState: () => initialState,
  },
});

export default tabSlice;
