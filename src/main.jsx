import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Router";
import "./index.css";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
