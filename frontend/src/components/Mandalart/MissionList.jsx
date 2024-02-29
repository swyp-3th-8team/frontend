import { useState } from "react";
import Button from "../Button";
import styles from "./MissionList.module.scss";

export default function MissionList() {
  const [edit, setEdit] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setEdit(edit);
  }

  return (
    <form className={styles.missionList} onSubmit={handleSubmit}>
      <button className={styles.close}>x</button>
      <div className={styles.mission}>
        <input type="text" placeholder="대주제를 등록해주세요" />
        <button>✏️</button>
      </div>
      <div className={styles.goal}>
        <input
          type="text"
          placeholder="목표를 입력해주세요"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
        <input type="text" placeholder="목표를 입력해주세요" />
      </div>
      <Button type="submit" disabled={edit === ""} finishButton="저장하기" />
    </form>
  );
}
