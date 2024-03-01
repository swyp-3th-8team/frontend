import styles from "./Mission.module.scss";

export default function Mission({ objectiveList, missionTitle }) {
  return (
    <>
      <div className={styles.mission}>
        <div>{objectiveList?.[0]?.content}</div>
        <div>{objectiveList?.[1]?.content}</div>
        <div>{objectiveList?.[2]?.content}</div>
        <div>{objectiveList?.[3]?.content}</div>
        <div className={styles.mainMission}>{missionTitle}</div>
        <div>{objectiveList?.[4]?.content}</div>
        <div>{objectiveList?.[5]?.content}</div>
        <div>{objectiveList?.[6]?.content}</div>
        <div>{objectiveList?.[7]?.content}</div>
      </div>
    </>
  );
}
