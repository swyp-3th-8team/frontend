import { useContext } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import PanelButton from "../PanelButton";
import MainPageContext from "../../pages/MainPageContext";
import styles from "./GoalPanel.module.scss";

export default function GoalPanel({ missionTitle, title, children, onClose }) {
  const { togglePanelEditing } = useContext(MainPageContext);
  const handlePanelButtonClick = () => {
    togglePanelEditing();
  };
  return (
    <div className={styles.wrapper}>
      <CloseButton onClose={onClose} />
      <div className={styles.titleWrapper}>
        <div className={styles.missionTitle}>{missionTitle}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.buttonWrapper}>
        <PanelButton onClickPanelButton={handlePanelButtonClick} />
      </div>
    </div>
  );
}

function CloseButton({ onClose }) {
  return (
    <button className={styles.closeButton} onClick={onClose}>
      <img src={CloseIcon} />
    </button>
  );
}
