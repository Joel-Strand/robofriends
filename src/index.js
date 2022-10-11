import React from "react";
import ReactDOM from "react-dom/client";
import "tachyons";
import "./cogs/styles/index.css";
import App from "./cogs/containers/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
