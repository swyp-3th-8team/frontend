import styles from "./Mission.module.scss";

export default function Mission({ missionList, missionTitle, onClick }) {
  return (
    <>
      <div className={styles.cellContainer} onClick={onClick}>
        <Cell className={styles.cellWrapper0}>{missionList?.[0]?.content}</Cell>
        <Cell className={styles.cellWrapper1}>{missionList?.[1]?.content}</Cell>
        <Cell className={styles.cellWrapper2}>{missionList?.[2]?.content}</Cell>
        <Cell className={styles.cellWrapper3}>{missionList?.[3]?.content}</Cell>
        <Cell className={styles.mainCell}>{missionTitle}</Cell>
        <Cell className={styles.cellWrapper4}>{missionList?.[4]?.content}</Cell>
        <Cell className={styles.cellWrapper5}>{missionList?.[5]?.content}</Cell>
        <Cell className={styles.cellWrapper6}>{missionList?.[6]?.content}</Cell>
        <Cell className={styles.cellWrapper7}>{missionList?.[7]?.content}</Cell>
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
