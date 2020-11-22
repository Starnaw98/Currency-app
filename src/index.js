import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux";
import { Provider } from "react-redux";
import "./styles/style.scss";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
