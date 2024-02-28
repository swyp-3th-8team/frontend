import styles from "./MainGoal.module.scss";

export default function MainGoal() {
  return (
    <div className={styles.mainGoal}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input className={styles.mainSubject} type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
}
