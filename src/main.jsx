import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import OrderProvider from "./ContextAPIs/OrderProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OrderProvider>
      <RouterProvider router={Router} />
    </OrderProvider>
  </React.StrictMode>
);
