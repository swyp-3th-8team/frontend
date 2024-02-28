import Goal from "../components/Mandalart/Goal";
import GoalList from "../components/Mandalart/GoalList";
import MainGoal from "../components/Mandalart/MainGoal";
import SubjectList from "../components/Mandalart/SubjectList";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <>
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
      <SubjectList />
      <GoalList />
    </>
  );
}
