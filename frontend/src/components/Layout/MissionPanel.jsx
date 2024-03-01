import styles from "./GoalPanel.module.scss";
import CloseIcon from "../../assets/icons/close.svg";
import PencilIcon from "../../assets/icons/pencil.svg";
import { useState } from "react";

export default function MissionPanel({ title, children, onClick, buttonText }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.wrapper}>
      <CloseButton />
      <div className={styles.title}>
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => onClick(e.target.value)}
          />
        ) : (
          title
        )}
        <PencilButton onClick={() => setIsEditing(!isEditing)} />
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

function CloseButton() {
  return (
    <button className={styles.closeButton}>
      <img src={CloseIcon} />
    </button>
  );
}
