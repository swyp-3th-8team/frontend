import { useEffect, useState } from "react";
import { useContext } from "react";
import MainPageContext from "../../pages/MainPageContext";
import CloseIcon from "../../assets/icons/close.svg";
import PencilIcon from "../../assets/icons/pencil.svg";
import Button from "../Button";
import styles from "./MissionPanel.module.scss";
import axios from "axios";
import { SERVER_URL } from "../../api/ServerUrl";

export default function MissionPanel({
  titleId,
  missionPanelId,
  children,
  title,
  onTitleChange,
  onClose,
  isMissionListEditing,
  setIsMissionListEditing,
  missionList,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [buttonText, setButtonText] = useState("수정하기");
  const { isPanelEditing, togglePanelEditing } = useContext(MainPageContext);
  const userId = sessionStorage.getItem("userId");

  // 초기에 title이 input인 경우를 고려하여 처리
  useEffect(() => {
    setEditedTitle(title || "");
  }, [title]);

  // input 값이 변경될 때마다 호출되는 함수
  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
    //onTitleChange(e.target.value); // 입력 중에도 Mainpage의 상태 업데이트
  };

  const handlePencilButtonClick = async () => {
    setIsEditing((prev) => !prev);

    if (isEditing === true) {
      if (titleId) {
        axios
          .put(`${SERVER_URL}/members/${userId}/title/${titleId}`, {
            title: editedTitle,
            userId,
          })
          .then(() => onTitleChange(editedTitle))
          .catch((err) => console.log(err));
      } else {
        axios
          .post(`${SERVER_URL}/members/${userId}/title`, {
            title: editedTitle,
          })
          .then(() => {
            onTitleChange(editedTitle);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  //const [getResMain, setGetResMain] = useState([]);
  const handlePanelButtonClick = async () => {
    togglePanelEditing();
    setIsMissionListEditing((prev) => !prev);
    setButtonText((prevText) =>
      prevText === "수정하기" ? "저장하기" : "수정하기"
    );

    if (isMissionListEditing === true) {
      if (missionPanelId) {
        axios
          .put(`${SERVER_URL}/members/${userId}/main/${missionPanelId}`, {
            missionList: missionList.map(({ content }) => content),
          })
          .then()
          .catch((err) => console.log(err));
      } else {
        axios
          .post(`${SERVER_URL}/members/${userId}/main`, {
            missionList: missionList.map(({ content }) => content),
          })
          .then()
          .catch((err) => console.log(err));
      }
    }
  };

  const handleCloseButtonClick = () => {
    if (isPanelEditing) {
      alert("수정된 목표를 저장해 주세요.");
    } else {
      onClose();
    }
  };

  return (
    <div className={styles.wrapper}>
      <CloseButton onClose={handleCloseButtonClick} />
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
      <Button type="panel" isActive="false" onClick={handlePanelButtonClick}>
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
