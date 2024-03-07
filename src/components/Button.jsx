import styles from "./Button.module.scss";

export default function Button({ children, size, isActive, onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${
        isActive ? styles.active : styles.inactive
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
