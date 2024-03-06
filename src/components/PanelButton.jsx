import styles from "./PanelButton.module.scss";

export default function PanelButton({ onClickPanelButton, isPanelEditing }) {
  return (
    <button
      className={styles.panelButton}
      onClick={onClickPanelButton}
      disabled={isPanelEditing}
    >
      수정 / 저장하기
    </button>
  );
}
