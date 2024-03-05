import { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import PencilIcon from "../../assets/icons/pencil.svg";
import styles from "./MissionPanel.module.scss";
import PanelButton from "../PanelButton";

export default function MissionPanel({
  onTitleChange,
  title,
  children,
  onClose,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");

  // 초기에 title이 input인 경우를 고려하여 처리
  useEffect(() => {
    setEditedTitle(title || "");
  }, [title]);

  // input 값이 변경될 때마다 호출되는 함수
  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
    onTitleChange(e.target.value); // 입력 중에도 Mainpage의 상태 업데이트
  };

  const handlePencilButtonClick = () => {
    setIsEditing((prev) => !prev);
  };

  const [isPanelEditing, setIsPanelEditing] = useState(false);

  const handleModifyButtonClick = () => {
    setIsPanelEditing(true);
  };

  const handleSaveButtonClick = () => {
    setIsPanelEditing(false);
  };

  return (
    <div className={styles.wrapper}>
      <CloseButton onClose={onClose} />
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={handleInputChange}
              placeholder="목표를 입력해주세요"
            />
          ) : (
            <span>{editedTitle || "목표를 입력해주세요"}</span>
          )}
          <PencilButton onClickPencilButton={handlePencilButtonClick} />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.buttonWrapper}>
        <PanelButton
          finishButton="수정하기"
          objective="modify"
          onClickPanelButton={console.log("sdfmskldfnls")}
        />
        <PanelButton
          finishButton="저장하기"
          objective="save"
          onClickPanelButton={handleSaveButtonClick}
        />
      </div>
    </div>
  );
}

function PencilButton({ onClickPencilButton }) {
  return (
    <button
      className={styles.pencilButton}
      type="button"
      onClick={onClickPencilButton}
    >
      <img src={PencilIcon} alt="Pencil Icon" />
    </button>
  );
}

function CloseButton({ onClose }) {
  return (
    <button className={styles.closeButton} onClick={onClose}>
      <img src={CloseIcon} />
    </button>
  );
}
