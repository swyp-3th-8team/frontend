import styles from "./Mission.module.scss";

export default function Mission({ missionList, missionTitle, onClick }) {
  const isMissionCompletedArray = missionList.map((mission) =>
    mission.goalList.every((goal) => goal.isCompleted)
  );

  return (
    <>
      <div className={styles.cellContainer} onClick={onClick}>
        {missionList.slice(0, 4).map((mission, index) => (
          <Cell
            key={index}
            className={`${styles[`cellWrapper${index}`]} ${
              isMissionCompletedArray[index] ? styles.completedMission : ""
            }`}
          >
            {mission.content}
          </Cell>
        ))}
        <Cell
          className={`${
            missionTitle === "" ? styles.mainCell : styles.completedMainCell
          }`}
        >
          {missionTitle}
        </Cell>
        {missionList.slice(4, 8).map((mission, index) => (
          <Cell
            key={index + 4}
            className={`${styles[`cellWrapper${index + 4}`]} ${
              isMissionCompletedArray[index + 4] ? styles.completedMission : ""
            }`}
          >
            {mission.content}
          </Cell>
        ))}
      </div>
    </>
  );
}

function Cell({ children, className }) {
  return (
    <div className={`${className}`}>
      <div className={styles.cell}>{children}</div>
    </div>
  );
}
