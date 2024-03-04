import styles from "./PanelButton.module.scss";

export default function PanelButton({
  finishButton,
  object,
  onClickPanelButton,
}) {
  return (
    <button
      type="submit"
      className={object === "save" ? styles.saveButton : styles.modifyButton}
      onClick={onClickPanelButton}
    >
      {finishButton}
    </button>
  );
}
