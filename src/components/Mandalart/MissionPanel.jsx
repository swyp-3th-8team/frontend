import { useEffect, useState } from "react";
import { useContext } from "react";
import MainPageContext from "../../pages/MainPageContext";
import CloseIcon from "../../assets/icons/close.svg";
import PencilIcon from "../../assets/icons/pencil.svg";
import Button from "../Button";
import styles from "./MissionPanel.module.scss";

export default function MissionPanel({
  onTitleChange,
  title,
  children,
  onClose,
  setIsMissionListEditing,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [buttonText, setButtonText] = useState("수정하기");
  const { isPanelEditing, togglePanelEditing } = useContext(MainPageContext);

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

  const handlePanelButtonClick = () => {
    togglePanelEditing();
    setIsMissionListEditing((prev) => !prev);
    setButtonText((prevText) =>
      prevText === "수정하기" ? "저장하기" : "수정하기"
    );
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
              placeholder="미션을 입력해 주세요"
            />
          ) : (
            <span>{editedTitle || "미션을 입력해 주세요"}</span>
          )}
          <PencilButton onClickPencilButton={handlePencilButtonClick} />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
      <Button type="panel" onClick={handlePanelButtonClick}>
        {buttonText}
      </Button>
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
