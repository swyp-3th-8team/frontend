import styles from "./Goal.module.scss";

export default function Goal({ goalList, missionList, onClick }) {
  return (
    <div className={styles.cellContainer} onClick={onClick}>
      {goalList.slice(0, 4).map((goal, index) => (
        <Cell
          key={index}
          className={`${styles[`cellWrapper${index}`]} ${
            goal.isCompleted ? styles.completedGoal : ""
          }`}
        >
          {goal.content}
        </Cell>
      ))}
      <Cell className={styles.mainCell}>{missionList}</Cell>
      {goalList.slice(4, 8).map((goal, index) => (
        <Cell
          key={index}
          className={`${styles[`cellWrapper${index}`]} ${
            goal.isCompleted ? styles.completedGoal : ""
          }`}
        >
          {goal.content}
        </Cell>
      ))}
    </div>
  );
}

function Cell({ className, children }) {
  return (
    <div className={`${className}`}>
      <div className={styles.cell}>{children}</div>
    </div>
  );
}
