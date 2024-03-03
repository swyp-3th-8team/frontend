import styles from "./Mission.module.scss";

export default function Mission({ missionList, missionTitle, onClick }) {
  return (
    <>
      <div className={styles.mission} onClick={onClick}>
        <div>{missionList?.[0]?.content}</div>
        <div>{missionList?.[1]?.content}</div>
        <div>{missionList?.[2]?.content}</div>
        <div>{missionList?.[3]?.content}</div>
        <div className={styles.mainMission}>{missionTitle}</div>
        <div>{missionList?.[4]?.content}</div>
        <div>{missionList?.[5]?.content}</div>
        <div>{missionList?.[6]?.content}</div>
        <div>{missionList?.[7]?.content}</div>
      </div>
    </>
  );
}
