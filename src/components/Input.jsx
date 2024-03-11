import { useLocation } from "react-router-dom";
import styles from "./Input.module.scss";

export default function Input({ id, value, type, placeholder, onChange }) {
  const { pathname } = useLocation();
  return (
    <input
      className={`${styles.input} ${
        pathname === "/login"
          ? placeholder === "아이디"
            ? styles.loginIdInput
            : styles.loginPasswordInput
          : ""
      }`}
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      onChange={onChange}
    />
  );
}
