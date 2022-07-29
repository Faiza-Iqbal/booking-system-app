// lib
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// src
import App from "./App";
import store from "./store";

import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
