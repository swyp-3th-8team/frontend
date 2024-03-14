import { useContext, useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import MainPageContext from "../../pages/MainPageContext";
import Button from "../Button";
import styles from "./GoalPanel.module.scss";

export default function GoalPanel({ missionTitle, title, children, onClose }) {
  const [buttonText, setButtonText] = useState("수정하기");
  const {
    isPanelEditing,
    togglePanelEditing,
    toggleGoalDetailEditing,
    toggleTextareaEditing,
  } = useContext(MainPageContext);

  const handlePanelButtonClick = () => {
    togglePanelEditing();
    toggleGoalDetailEditing();
    setButtonText((prevText) =>
      prevText === "수정하기" ? "저장하기" : "수정하기"
    );
    toggleTextareaEditing();
  };

  const handleCloseButtonClick = () => {
    if (isPanelEditing) {
      alert("수정 사항을 저장해 주세요.");
    } else {
      onClose();
    }
  };

  return (
    <div className={styles.wrapper}>
      <CloseButton onClose={handleCloseButtonClick} />
      <div className={styles.titleWrapper}>
        <div className={styles.missionTitle}>{missionTitle}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.content}>{children}</div>
      <Button type="panel" onClick={handlePanelButtonClick}>
        {buttonText}
      </Button>
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
