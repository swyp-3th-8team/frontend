import styles from "./Goal.module.scss";

export default function Goal({ taskList, objectiveList }) {
  return (
    <div className={styles.container}>
      <div>{taskList?.[0]?.content}</div>
      <div>{taskList?.[1]?.content}</div>
      <div>{taskList?.[2]?.content}</div>
      <div>{taskList?.[3]?.content}</div>
      <div className={styles.mainGoal}>{objectiveList}</div>
      <div>{taskList?.[4]?.content}</div>
      <div>{taskList?.[5]?.content}</div>
      <div>{taskList?.[6]?.content}</div>
      <div>{taskList?.[7]?.content}</div>
    </div>
  );
}
