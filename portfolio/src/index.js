import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import translate from "./translate";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const reducerLanguage = (state = translate.en, action) => {
  switch (action.type) {
    case "en":
      return { ...translate.en };
    case "ru":
      return { ...translate.ru };
    default:
      return state;
  }
};

const reducerPortfolio = (state = "autumn", action) => {
  switch (action.type) {
    case "autumn":
      return "autumn";
    case "summer":
      return "summer";
    case "spring":
      return "spring";
    case "winter":
      return "winter";
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  language: reducerLanguage,
  portfolio: reducerPortfolio,
});

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
