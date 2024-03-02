import { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/close.svg";
import PencilIcon from "../../assets/icons/pencil.svg";
import styles from "./GoalPanel.module.scss";

export default function MissionPanel({
  onTitleChange,
  title,
  children,
  onClick,
  buttonText,
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

  // PencilButton 클릭 시 호출되는 함수
  const handlePencilButtonClick = () => {
    setIsEditing((prev) => !prev);
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
              placeholder="목표 입력"
            />
          ) : (
            <span>{editedTitle || "목표 입력"}</span>
          )}
          <PencilButton onClick={handlePencilButtonClick} />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

function PencilButton({ onClick }) {
  return (
    <button className={styles.pencilButton} type="button" onClick={onClick}>
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
