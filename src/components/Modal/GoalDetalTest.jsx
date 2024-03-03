import Modal from "./Modal";

import styles from "./GoalDetail.module.scss";

export default function GoalDetail({
  missionList,
  selectedMissionIndex,
  onClose,
}) {
  return (
    <Modal onClose={onClose}>
      <div className={styles.goalContainer}>
        <div>{missionList[selectedMissionIndex]?.goalList?.[0]?.content}</div>
        <div>{missionList[selectedMissionIndex]?.goalList?.[1]?.content}</div>
        <div>{missionList[selectedMissionIndex]?.goalList?.[2]?.content}</div>
        <div>{missionList[selectedMissionIndex]?.goalList?.[3]?.content}</div>
        <div className={styles.mainGoal}>
          {missionList[selectedMissionIndex]?.content}
        </div>
        <div>{missionList[selectedMissionIndex]?.goalList?.[4]?.content}</div>
        <div>{missionList[selectedMissionIndex]?.goalList?.[5]?.content}</div>
        <div>{missionList[selectedMissionIndex]?.goalList?.[6]?.content}</div>
        <div>{missionList[selectedMissionIndex]?.goalList?.[7]?.content}</div>
      </div>
    </Modal>
  );
}

/**
    <Modal onClose={onClose}>
      <div className={styles.goalContainer}>
        <Goal
          goalList={missionList[selectedMissionIndex]?.goalList}
          missionList={missionList[selectedMissionIndex]?.content}
        />
      </div>
    </Modal>
 */
