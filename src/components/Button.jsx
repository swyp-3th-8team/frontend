import styles from "./Button.module.scss";

export default function Button({ children, size, color, isActive, onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${
        isActive ? styles.active : styles.inactive
      } ${color === "white" ? styles.white : ""}`}
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
}
