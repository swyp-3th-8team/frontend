import styles from "./PanelButton.module.scss";

export default function PanelButton({
  finishButton,
  objective,
  onClickPanelButton,
}) {
  return (
    <button
      className={objective === "save" ? styles.saveButton : styles.modifyButton}
      onClick={onClickPanelButton}
    >
      {finishButton}
    </button>
  );
}
