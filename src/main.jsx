import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.querySelector(".page__content")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
