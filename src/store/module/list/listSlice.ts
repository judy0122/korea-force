import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  pageIndex: 1,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    onChangeList(state, action) {
      state.list = action.payload;
    },
    resetState: () => initialState,
  },
});

export default listSlice;
