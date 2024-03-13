import { useContext } from "react";
import MainPageContext from "../../pages/MainPageContext";
import styles from "./GoalDetail.module.scss";

export default function GoalDetail({
  missionList,
  selectedMissionIndex,
  onClick,
  goalDetailText,
  setGoalDetailText,
  focusedGoalIndex,
}) {
  const { isGoalDetailEditing } = useContext(MainPageContext);

  return (
    <div className={styles.goalDetailContainer} onClick={onClick}>
      {[0, 1, 2, 3].map((index) =>
        RenderGoalDetailItem(
          index,
          missionList[selectedMissionIndex]?.goalList,
          goalDetailText[index],
          (text) => {
            const updatedTexts = [...goalDetailText];
            updatedTexts[index] = text;
            setGoalDetailText(updatedTexts);
          },
          isGoalDetailEditing,
          focusedGoalIndex
        )
      )}

      <div className={styles.mainGoalWrapper}>
        <div className={styles.mainGoal}>
          {missionList[selectedMissionIndex]?.content}
        </div>
      </div>

      {[4, 5, 6, 7].map((index) =>
        RenderGoalDetailItem(
          index,
          missionList[selectedMissionIndex]?.goalList,
          goalDetailText[index],
          (text) => {
            const updatedTexts = [...goalDetailText];
            updatedTexts[index] = text;
            setGoalDetailText(updatedTexts);
          },
          isGoalDetailEditing,
          focusedGoalIndex
        )
      )}
    </div>
  );
}

const RenderGoalDetailItem = (
  index,
  goalList,
  goalDetailText,
  setGoalDetailText,
  isGoalDetailEditing,
  focusedGoalIndex
) => {
  const { isTextareaEditing } = useContext(MainPageContext);
  const isGoalCompleted = goalList?.[index]?.isCompleted;

  return (
    <div
      key={index}
      className={`${styles.goalDetail} ${
        isGoalDetailEditing && focusedGoalIndex === index ? styles.focused : ""
      } ${isGoalCompleted ? styles.completedGoal : ""}`}
    >
      <div>
        {goalList?.[index]?.content === "" ? (
          <>
            세부 목표를
            <br />
            입력해 주세요
          </>
        ) : (
          goalList?.[index]?.content
        )}
      </div>
      {isTextareaEditing ? (
        <textarea
          className={styles.goalDetailTextarea}
          placeholder="다짐을 적어주세요!&#10;메모라든지 할 일이라든지&#10;무엇이든 좋아요!"
          value={goalDetailText}
          onChange={(e) => setGoalDetailText(e.target.value)}
        />
      ) : (
        <span className={styles.goalDetailTextarea}>
          {goalDetailText || (
            <>
              다짐을 적어주세요!
              <br />
              메모라든지 할 일이라든지
              <br />
              무엇이든 좋아요!
            </>
          )}
        </span>
      )}
    </div>
  );
};
