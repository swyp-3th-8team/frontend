import styles from "./GoalDetail.module.scss";

export default function GoalDetail({
  missionList,
  selectedMissionIndex,
  onClick,
}) {
  return (
    <div className={styles.goalContainer} onClick={onClick}>
      <div className={styles.goalDetail}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[0]?.content}</div>
        <textarea placeholder="다짐을 적어주세요!" />
      </div>
      <div className={styles.goalDetail}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[1]?.content}</div>
        <textarea placeholder="다짐을 적어주세요!" />
      </div>
      <div className={styles.goalDetail}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[2]?.content}</div>
        <textarea placeholder="다짐을 적어주세요!" />
      </div>
      <div className={styles.goalDetail}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[3]?.content}</div>
        <textarea placeholder="다짐을 적어주세요!" />
      </div>
      <div className={styles.mainGoal}>
        {missionList[selectedMissionIndex]?.content}
      </div>
      <div className={styles.goalDetail}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[4]?.content}</div>
        <textarea placeholder="다짐을 적어주세요!" />
      </div>
      <div className={styles.goalDetail}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[5]?.content}</div>
        <textarea placeholder="다짐을 적어주세요!" />
      </div>
      <div className={styles.goalDetail}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[6]?.content}</div>
        <textarea placeholder="다짐을 적어주세요!" />
      </div>
      <div className={styles.goalDetail}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[7]?.content}</div>
        <textarea placeholder="다짐을 적어주세요!" />
      </div>
    </div>
  );
}
