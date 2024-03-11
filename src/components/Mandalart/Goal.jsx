import styles from "./Goal.module.scss";

export default function Goal({ goalList, missionList, onClick }) {
  return (
    <div className={styles.cellContainer} onClick={onClick}>
      <Cell className={styles.cellWrapper0}>{goalList?.[0]?.content}</Cell>
      <Cell className={styles.cellWrapper1}>{goalList?.[1]?.content}</Cell>
      <Cell className={styles.cellWrapper2}>{goalList?.[2]?.content}</Cell>
      <Cell className={styles.cellWrapper3}>{goalList?.[3]?.content}</Cell>
      <Cell className={styles.mainCell}>{missionList}</Cell>
      <Cell className={styles.cellWrapper4}>{goalList?.[4]?.content}</Cell>
      <Cell className={styles.cellWrapper5}>{goalList?.[5]?.content}</Cell>
      <Cell className={styles.cellWrapper6}>{goalList?.[6]?.content}</Cell>
      <Cell className={styles.cellWrapper7}>{goalList?.[7]?.content}</Cell>
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
