import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import MainPage from "./pages/MainPage.jsx";
import FindAccount from "./pages/FindAccount.jsx";
import PreSignup from "./pages/PreSignup.jsx";
import PreMainPage from "./pages/PreMainPage.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="mando" element={<PreMainPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="find-account" element={<FindAccount />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="pre-signup" element={<PreSignup />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
