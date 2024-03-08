import styles from "./Goal.module.scss";

export default function Goal({ goalList, missionList, onClick }) {
  return (
    <div className={styles.cellContainer} onClick={onClick}>
      <Cell>{goalList?.[0]?.content}</Cell>
      <Cell>{goalList?.[1]?.content}</Cell>
      <Cell>{goalList?.[2]?.content}</Cell>
      <Cell>{goalList?.[3]?.content}</Cell>
      <Cell className="mainCell">{missionList}</Cell>
      <Cell>{goalList?.[4]?.content}</Cell>
      <Cell>{goalList?.[5]?.content}</Cell>
      <Cell>{goalList?.[6]?.content}</Cell>
      <Cell>{goalList?.[7]?.content}</Cell>
    </div>
  );
}

function Cell({ children, className }) {
  return (
    <div
      className={
        className === "mainCell" ? styles.mainCell : styles.cellWrapper
      }
    >
      <div className={styles.cell}>{children}</div>
    </div>
  );
}
