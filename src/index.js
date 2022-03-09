import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@src/styles/root.scss";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";

const renderApp = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
  hydrate(renderApp(), rootElement);
} else {
  render(renderApp(), rootElement);
}

reportWebVitals();
