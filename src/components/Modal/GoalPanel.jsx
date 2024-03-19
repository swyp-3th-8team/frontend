import { useContext, useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import MainPageContext from "../../pages/MainPageContext";
import Button from "../Button";
import styles from "./GoalPanel.module.scss";
import axios from "axios";
import { SERVER_URL } from "../../api/ServerUrl";

export default function GoalPanel({
  goalPanelId,
  missionTitle,
  title,
  children,
  onClose,
  goalList,
  selectedMissionIndex,
  goalDetailText,
}) {
  const [buttonText, setButtonText] = useState("수정하기");
  const {
    isPanelEditing,
    togglePanelEditing,
    toggleGoalDetailEditing,
    toggleTextareaEditing,
  } = useContext(MainPageContext);
  const userId = sessionStorage.getItem("userId");

  const handlePanelButtonClick = async () => {
    togglePanelEditing();
    toggleGoalDetailEditing();
    setButtonText((prevText) =>
      prevText === "수정하기" ? "저장하기" : "수정하기"
    );
    toggleTextareaEditing();

    if (isPanelEditing === true) {
      if (goalPanelId) {
        axios
          .put(
            `${SERVER_URL}/members/${userId}/details/${selectedMissionIndex}`,
            {
              goalList: goalList.map(({ content }) => content),
              goalText: goalDetailText,
            }
          )
          .then()
          .catch((err) => console.log(err));
      } else {
        axios
          .post(`${SERVER_URL}/members/${userId}/details`, {
            missionIndex: selectedMissionIndex,
            goalList: goalList.map(({ content }) => content),
            goalText: goalDetailText,
          })
          .then()
          .catch((err) => console.log(err));
      }
    }
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
        <div className={styles.missionTitle}>
          {missionTitle === "" ? "미션을 등록해 주세요" : missionTitle}
        </div>
        <div
          className={`${title === "" ? styles.title : styles.completedTitle}`}
        >
          {title === "" ? "목표를 등록해 주세요" : title}
        </div>
      </div>
      <div className={styles.content}>{children}</div>
      <Button type="panel" isActive="false" onClick={handlePanelButtonClick}>
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
