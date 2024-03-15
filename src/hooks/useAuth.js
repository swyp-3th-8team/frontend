import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  //   useEffect(() => {
  //     const userId = sessionStorage.getItem("userId");

  //     userId ? setIsLogin(true) : setIsLogin(false);
  //   }, [setIsLogin]);

  const handleLogout = () => {
    axios
      .post("http://129.154.48.177/api/member/logout")
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
