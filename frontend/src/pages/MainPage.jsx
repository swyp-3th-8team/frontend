import Goal from "../components/Mandarlart/Goal";
import MainGoal from "../components/Mandarlart/MainGoal";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Goal />
      <Goal />
      <Goal />
      <Goal />
      <MainGoal />
      <Goal />
      <Goal />
      <Goal />
      <Goal />
    </div>
  );
}
