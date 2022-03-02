import { createSlice } from "@reduxjs/toolkit";
import { OrderType } from "src/types/order";

const initialState: {
  order: OrderType;
  selectedOrder: number;
} = {
  order: undefined as any,
  selectedOrder: -1,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    onChangeOrder(state, action) {
      state.order = action.payload;
    },
    onChangeSelectedOrder(state, action) {
      state.selectedOrder = action.payload;
    },
    resetState: () => initialState,
  },
});

export default orderSlice;
