import styles from "./Mission.module.scss";

export default function Mission({ missionList, missionTitle, onClick }) {
  return (
    <>
      <div className={styles.cellContainer} onClick={onClick}>
        <Cell>{missionList?.[0]?.content}</Cell>
        <Cell>{missionList?.[1]?.content}</Cell>
        <Cell>{missionList?.[2]?.content}</Cell>
        <Cell>{missionList?.[3]?.content}</Cell>
        <Cell className="mainCell">{missionTitle}</Cell>
        <Cell>{missionList?.[4]?.content}</Cell>
        <Cell>{missionList?.[5]?.content}</Cell>
        <Cell>{missionList?.[6]?.content}</Cell>
        <Cell>{missionList?.[7]?.content}</Cell>
      </div>
    </>
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
