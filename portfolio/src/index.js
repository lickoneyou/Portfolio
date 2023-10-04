import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import translate from "./translate";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const reducer = (state = translate.en, action) => {
  switch (action.type) {
    case "en":
      return { ...translate.en };
    case "ru":
      return { ...translate.ru };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
