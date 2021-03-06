import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./module/user/userSlice";
import orderSlice from "./module/order/orderSlice";
import tabSlice from "./module/tab/tabSlice";
import popupSlice from "./module/popup/popupSlice";
import settingSlice from "./module/setting/settingSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  order: orderSlice.reducer,
  tab: tabSlice.reducer,
  popup: popupSlice.reducer,
  setting: settingSlice.reducer,
});

const persistConfig = {
  key: "korpc",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
    logger,
  ].filter(Boolean),
});
const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>;
