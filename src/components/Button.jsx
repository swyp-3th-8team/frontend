import styles from "./Button.module.scss";

export default function Button({
  children,
  type,
  size,
  isActive,
  onClick,
  disabled,
}) {
  const isPanelButton = type === "panel";

  const buttonClass = isPanelButton
    ? styles.panelButton
    : `${styles.button} ${size ? styles[size] : ""} ${
        isActive ? styles.active : styles.inactive
      }`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
