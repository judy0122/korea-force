import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modifyMsg: false,
  rejectMsg: false,
  rejectComplete: false,
  deliveryTime: false,
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
