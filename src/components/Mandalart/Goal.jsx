import styles from "./Goal.module.scss";

export default function Goal({ goalList, missionList, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div>{goalList?.[0]?.content}</div>
      <div>{goalList?.[1]?.content}</div>
      <div>{goalList?.[2]?.content}</div>
      <div>{goalList?.[3]?.content}</div>
      <div className={styles.mainGoal}>{missionList}</div>
      <div>{goalList?.[4]?.content}</div>
      <div>{goalList?.[5]?.content}</div>
      <div>{goalList?.[6]?.content}</div>
      <div>{goalList?.[7]?.content}</div>
    </div>
  );
}
