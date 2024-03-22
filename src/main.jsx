import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import PreSignup from "./pages/PreSignup.jsx";
import MainPage from "./pages/MainPage.jsx";
import FindAccount from "./pages/FindAccount.jsx";
import PreMainPage from "./pages/PreMainPage.jsx";
import FindPassword from "./pages/FindPassword.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="mando" element={<MainPage />} />
        <Route path="" element={<PreMainPage />} />
        <Route path="find-account" element={<FindAccount />} />
        <Route path="find-password" element={<FindPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="pre-signup" element={<PreSignup />} />
    </Routes>
  </BrowserRouter>
);
