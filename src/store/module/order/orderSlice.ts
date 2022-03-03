import { createSlice } from "@reduxjs/toolkit";
import { OrdersType, OrderType } from "src/types/order";

const initialState: {
  list: OrdersType[];
  order: OrderType;
  selectedOrder: number;
  pageIndex: number;
} = {
  order: undefined as any,
  selectedOrder: -1,
  list: [],
  pageIndex: 1,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    onChangeList(state, action) {
      state.list = action.payload;
    },
    onChangePageIndex(state, action) {
      state.pageIndex = action.payload;
    },
    onChangeOrder(state, action) {
      state.order = action.payload;
    },
    onChangeSelectedOrder(state, action) {
      state.selectedOrder = action.payload;
    },
    onResetOrder(state) {
      state.order = undefined as any;
      state.selectedOrder = -1;
    },
    resetState: () => initialState,
  },
});

export default orderSlice;
