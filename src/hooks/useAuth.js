import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../api/ServerUrl";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  //   useEffect(() => {
  //     const userId = sessionStorage.getItem("userId");

  //     userId ? setIsLogin(true) : setIsLogin(false);
  //   }, [setIsLogin]);

  const handleLogout = () => {
    axios
      .post(`${SERVER_URL}/api/member/logout`)
      .then((res) => {
        console.log(res);
        sessionStorage.removeItem("userId");
        setIsLogin(false);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return { isLogin, handleLogout };
};
