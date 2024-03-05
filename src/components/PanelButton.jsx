import styles from "./PanelButton.module.scss";

export default function PanelButton({
  action,
  onClickPanelButton,
  isPanelEditing,
}) {
  return (
    <button
      className={
        action === "저장하기" ? styles.saveButton : styles.modifyButton
      }
      onClick={onClickPanelButton}
      disabled={isPanelEditing}
    >
      {action}
    </button>
  );
}
