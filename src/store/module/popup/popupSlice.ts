import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modifyMsg: false,
  rejectMsg: false,
  deliveryTime: false,
  cookingTime: false,
  cancelReason: false,
  soldout: false,
  print: false,
  collect: false,
  pcList: false,
  origin: false,
  alarm: false,
  simple: {
    isShow: false,
    title: "",
    contents: "",
    hasCancel: false,
    onClick: () => null,
  },
};

const popup = createSlice({
  name: "popup",
  initialState,
  reducers: {
    onChangeIsShow(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    resetState: () => initialState,
  },
});

export default popup;
