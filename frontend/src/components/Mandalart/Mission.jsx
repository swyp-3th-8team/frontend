import styles from "./Mission.module.scss";

export default function Mission({ objectiveList, missionTitle }) {
  return (
    <>
      <div className={styles.mission}>
        <div>{objectiveList?.objectiveList?.[0]?.content}</div>
        <div>{objectiveList?.objectiveList?.[1]?.content}</div>
        <div>{objectiveList?.objectiveList?.[2]?.content}</div>
        <div>{objectiveList?.objectiveList?.[3]?.content}</div>
        <div className={styles.mainMission}>{missionTitle}</div>
        <div>{objectiveList?.objectiveList?.[4]?.content}</div>
        <div>{objectiveList?.objectiveList?.[5]?.content}</div>
        <div>{objectiveList?.objectiveList?.[6]?.content}</div>
        <div>{objectiveList?.objectiveList?.[7]?.content}</div>
      </div>
    </>
  );
}
