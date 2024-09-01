import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/Contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.BASE_URL}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
