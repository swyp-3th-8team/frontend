import Modal from "./Modal";
import Goal from "../Mandalart/Goal";

import styles from "./GoalDetail.module.scss";

export default function GoalDetail({
  missionList,
  selectedMissionIndex,
  onClose,
}) {
  return (
    <Modal onClose={onClose}>
      <div className={styles.goalContainer}>
        <Goal
          goalList={missionList[selectedMissionIndex]?.goalList}
          missionList={missionList[selectedMissionIndex]?.content}
        />
      </div>
    </Modal>
  );
}
