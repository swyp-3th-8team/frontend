import styles from "./Button.module.scss";

export default function Button({
  children,
  type,
  size,
  color,
  isActive,
  onClick,
}) {
  const isPanelButton = type === "panel";

  const buttonClass = isPanelButton
    ? styles.panelButton
    : `${styles.button} ${size ? styles[size] : ""} ${
        isActive ? styles.active : styles.inactive
      } ${color === "white" ? styles.white : ""}`;

  return (
    <button
      className={buttonClass}
      type={type === "button" ? "button" : "submit"}
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
}
