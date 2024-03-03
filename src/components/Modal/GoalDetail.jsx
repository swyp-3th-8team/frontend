import Goal from "../Mandalart/Goal";

import styles from "./GoalDetail.module.scss";

export default function GoalDetail({ missionList, selectedMissionIndex }) {
  return (
    <div className={styles.goalContainer}>
      <Goal
        goalList={missionList[selectedMissionIndex]?.goalList}
        missionList={missionList[selectedMissionIndex]?.content}
      />
    </div>
  );
}
