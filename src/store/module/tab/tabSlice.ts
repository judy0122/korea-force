import { createSlice } from "@reduxjs/toolkit";
import { TabOrderType, DeliveryType } from "src/types/order";

const initialState: {
  tabIndex: number;
  tabType: TabOrderType;
  subTabIndex: number;
  counts: number[];
  isNext: boolean;
  deliveryType: DeliveryType;
} = {
  tabIndex: 1,
  tabType: "DELIVERY",
  subTabIndex: 0,
  counts: [0, 0, 0, 0],
  isNext: false,
  deliveryType: "company",
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
    onChangeIsNext(state, action) {
      state.isNext = action.payload;
    },
    onChangeDeliveryType(state, action) {
      state.deliveryType = action.payload;
    },
    resetState: () => initialState,
  },
});

export default tabSlice;
