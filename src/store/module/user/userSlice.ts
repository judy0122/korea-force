import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: null, isLogged: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onChangeIsLogin(state, action) {
      state.isLogged = action.payload;
    },
    onChangeUser(state, action) {
      state.user = action.payload;
    },
    resetState: () => initialState,
  },
});

export default userSlice;
