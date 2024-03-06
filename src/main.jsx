import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import MainPage from "./pages/MainPage.jsx";
import FindAccount from "./pages/FindAccount.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="main" element={<MainPage />} />
          <Route path="find-account" element={<FindAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
