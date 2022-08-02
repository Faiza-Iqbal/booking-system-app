// lib
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// src
import App from "./App";
import Auth0Service from "./auth/Auth0Service";
import store from "./store";

// styles
import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Service>
        <App />
      </Auth0Service>
    </BrowserRouter>
  </Provider>
);
